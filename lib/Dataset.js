const ns = require('./namespace')
const toArray = require('./toArray')
const toTermArray = require('./toTermArray')
const Context = require('./Context')

class Dataset {
  constructor (dataset, values, graphs, { context } = {}) {
    if (context) {
      this._context = context

      return
    }

    this._context = toArray(graphs, [null]).reduce((all, graph) => {
      return all.concat(toArray(values, [null]).reduce((all, value) => {
        return all.concat([new Context(dataset, graph, value)])
      }, []))
    }, [])
  }

  get term () {
    const terms = this.terms

    if (terms.length !== 1) {
      return undefined
    }

    return terms[0]
  }

  get terms () {
    return this._context.map(node => node.term).filter(Boolean)
  }

  get value () {
    const term = this.term

    return term && term.value
  }

  get values () {
    return this.terms.map(term => term.value)
  }

  list () {
    if (!this.term) {
      throw new Error('iterator over multiple terms is not supported')
    }

    let item = this

    return {
      [Symbol.iterator]: () => {
        return {
          next: () => {
            if (item.term.equals(ns.nil)) {
              return { done: true }
            }

            const value = item.out(ns.first)

            item = item.out(ns.rest)

            return { done: false, value }
          }
        }
      }
    }
  }

  toArray () {
    return this._context.map(context => Dataset.fromContext(context))
  }

  filter (callback) {
    return Dataset.fromContext(this._context.filter(context => callback(Dataset.fromContext(context))))
  }

  forEach (callback) {
    return this.toArray().forEach(callback)
  }

  map (callback) {
    return this.toArray().map(callback)
  }

  toString () {
    return this.values.join()
  }

  node (values) {
    const context = toArray(values, [null]).reduce((context, value) => {
      return context.concat(this._context.reduce((all, current) => {
        return all.concat([new Context(current.dataset, current.graph, value)])
      }, []))
    }, [])

    return Dataset.fromContext(context)
  }

  in (predicates) {
    predicates = toTermArray(predicates)

    const context = this._context.reduce((all, current) => all.concat(current.in(predicates)), [])

    return Dataset.fromContext(context)
  }

  out (predicates) {
    predicates = toTermArray(predicates)

    const context = this._context.reduce((all, current) => all.concat(current.out(predicates)), [])

    return Dataset.fromContext(context)
  }

  has (predicates, objects) {
    predicates = toTermArray(predicates)
    objects = toTermArray(objects)

    const context = this._context.reduce((all, current) => all.concat(current.has(predicates, objects)), [])

    return Dataset.fromContext(context)
  }

  addIn (predicates, subjects, callback) {
    if (!predicates || !subjects) {
      throw new Error('predicate and subject parameter is required')
    }

    predicates = toTermArray(predicates)
    subjects = toTermArray(subjects)

    const context = this._context.map(context => context.addIn(predicates, subjects))

    if (callback) {
      Dataset.fromContext(context).forEach(callback)
    }

    return this
  }

  addOut (predicates, objects, callback) {
    if (!predicates || !objects) {
      throw new Error('predicate and object parameter is required')
    }

    predicates = toTermArray(predicates)
    objects = toTermArray(objects)

    const context = this._context.map(context => context.addOut(predicates, objects))

    if (callback) {
      Dataset.fromContext(context).forEach(callback)
    }

    return this
  }

  addList (predicates, items) {
    if (!predicates || !items) {
      throw new Error('predicate and items parameter is required')
    }

    predicates = toTermArray(predicates)
    items = toTermArray(items)

    this._context.forEach(context => context.addList(predicates, items))

    return this
  }

  deleteIn (predicates) {
    predicates = toTermArray(predicates)

    this._context.forEach(context => context.deleteIn(predicates))

    return this
  }

  deleteOut (predicates) {
    predicates = toTermArray(predicates)

    this._context.forEach(context => context.deleteOut(predicates))

    return this
  }

  static fromContext (context) {
    return new Dataset(null, null, null, { context: toArray(context) })
  }
}

module.exports = Dataset