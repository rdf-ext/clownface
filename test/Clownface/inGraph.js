/* global describe, it */

const assert = require('assert')
const { rdfs } = require('@tpluscode/rdf-ns-builders')
const clownface = require('../..')
const rdf = require('../support/factory')
const ns = require('../support/namespace')

describe('.inGraph', () => {
  it('called on null pointer keeps null pointer', () => {
    const term = ns.ex.Foo
    const dataset = rdf.dataset([
      rdf.quad(term, rdfs.label, rdf.literal('default graph')),
      rdf.quad(term, rdfs.label, rdf.literal('named graph'), ns.ex.NamedGraph)
    ])

    const pointer = clownface({ dataset }).inGraph()

    assert.deepStrictEqual(typeof pointer.term, 'undefined')
  })

  it('called on pointer to graph switches to that graph', () => {
    const term = ns.ex.Foo
    const dataset = rdf.dataset([
      rdf.quad(term, rdfs.label, rdf.literal('default graph')),
      rdf.quad(term, rdfs.label, rdf.literal('named graph'), ns.ex.Foo)
    ])
    const pointer = clownface({ dataset, term })

    const movedPointer = pointer.inGraph()

    assert.deepStrictEqual(movedPointer.out(rdfs.label).value, 'named graph')
  })

  it('switches to graph returned by map parameter', () => {
    const term = ns.ex.Foo
    const dataset = rdf.dataset([
      rdf.quad(term, rdfs.label, rdf.literal('default graph')),
      rdf.quad(term, rdfs.label, rdf.literal('named graph'), ns.ex.FooGraph)
    ])
    const pointer = clownface({ dataset, term })
    const appendGraph = term => rdf.namedNode(term.value + 'Graph')

    const movedPointer = pointer.inGraph({ map: appendGraph })

    assert.deepStrictEqual(movedPointer.out(rdfs.label).value, 'named graph')
  })
})
