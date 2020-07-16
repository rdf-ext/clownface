/**
 * @module lib/Context
 */

import { inArray } from './inArray.mjs'
import { term } from './term.mjs'
import { toArray } from './toArray.mjs'
import { createLanguageMapper } from './languageTag.mjs'

export class Context {
  constructor ({ dataset, graph, value, factory, namespace }) {
    this.dataset = dataset
    this.graph = graph
    this.factory = factory
    this.namespace = namespace
    this.term = term(value, undefined, undefined, factory)
  }

  clone ({ dataset = this.dataset, graph = this.graph, value, factory = this.factory, namespace = this.namespace }) {
    return new Context({ dataset, graph, value, factory, namespace })
  }

  has (predicate, object) {
    return this.matchProperty(toArray(this.term), predicate, object, toArray(this.graph), 'subject').map(subject => {
      return this.clone({ value: subject })
    })
  }

  in (predicate) {
    return this.matchProperty(null, predicate, toArray(this.term), toArray(this.graph), 'subject').map(subject => {
      return this.clone({ value: subject })
    })
  }

  out (predicate, { language }) {
    let objects = this.matchProperty(toArray(this.term), predicate, null, toArray(this.graph), 'object')

    if (typeof language !== 'undefined') {
      const languages = (typeof language === 'string' ? [language] : language)
      const getLiteralsForLanguage = createLanguageMapper(objects)

      objects = languages.map(getLiteralsForLanguage).find(Boolean) || []
    }

    return objects.map(object => {
      return this.clone({ value: object })
    })
  }

  addIn (predicates, subjects) {
    const context = []

    if (this.term) {
      subjects.forEach(subject => {
        predicates.forEach(predicate => {
          this.dataset.add(this.factory.quad(subject, predicate, this.term, this.graph))
        })

        context.push(this.clone({ value: subject }))
      })
    }

    return context
  }

  addOut (predicates, objects) {
    const context = []

    if (this.term) {
      objects.forEach(object => {
        predicates.forEach(predicate => {
          this.dataset.add(this.factory.quad(this.term, predicate, object, this.graph))
        })

        context.push(this.clone({ value: object }))
      })
    }

    return context
  }

  addList (predicates, items) {
    if (!this.term) {
      return
    }

    predicates.forEach(predicate => {
      const nodes = items.map(() => this.factory.blankNode())

      this.dataset.add(this.factory.quad(this.term, predicate, nodes[0] || this.namespace.nil, this.graph))

      for (let index = 0; index < nodes.length; index++) {
        this.dataset.add(this.factory.quad(nodes[index], this.namespace.first, items[index], this.graph))
        this.dataset.add(this.factory.quad(nodes[index], this.namespace.rest, nodes[index + 1] || this.namespace.nil, this.graph))
      }
    })
  }

  deleteIn (predicate) {
    this.deleteMatch(null, predicate, toArray(this.term), toArray(this.graph))
  }

  deleteOut (predicate) {
    this.deleteMatch(toArray(this.term), predicate, null, toArray(this.graph))
  }

  deleteList (predicates) {
    predicates.forEach(predicate => {
      for (const quad of this.dataset.match(this.term, predicate)) {
        this.deleteItems(quad)
      }
    })
  }

  deleteItems (start) {
    let quads = [start]

    while (!quads[quads.length - 1].object.equals(this.namespace.nil)) {
      const node = quads[quads.length - 1].object

      quads = quads.concat([...this.dataset.match(node)])
    }

    quads.forEach(quad => {
      this.dataset.delete(quad)
    })
  }

  match (subject, predicate, object, graph) {
    const matches = []

    for (const quad of this.dataset) {
      if (subject && !inArray(quad.subject, subject)) {
        continue
      }

      if (predicate && !inArray(quad.predicate, predicate)) {
        continue
      }

      if (object && !inArray(quad.object, object)) {
        continue
      }

      if (graph && !inArray(quad.graph, graph)) {
        continue
      }

      matches.push(quad)
    }

    return matches
  }

  matchProperty (subject, predicate, object, graph, property) {
    return this.match(subject, predicate, object, graph).map(quad => quad[property])
  }

  deleteMatch (subject, predicate, object, graph) {
    this.match(subject, predicate, object, graph).forEach(quad => {
      this.dataset.delete(quad)
    })
  }
}
