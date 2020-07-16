/* global describe, it */

import assert from 'assert'
import clownface from '../../index.mjs'
import loadExample from '../support/example.js'
import rdf from '../support/factory.js'
import { Clownface } from '../../lib/Clownface.mjs'

describe('Clownface.node', () => {
  it('should be a function', async () => {
    const cf = clownface({ dataset: rdf.dataset() })

    assert.strictEqual(typeof cf.node, 'function')
  })

  it('should return a new Dataset instance', async () => {
    const term = rdf.namedNode('http://localhost:8080/data/person/stuart-bloom')
    const cf = clownface({ dataset: await loadExample() })

    const result = cf.node(term)

    assert(result instanceof Clownface)
    assert.notStrictEqual(result, cf)
  })

  it('should use the dataset from the context', async () => {
    const dataset = await loadExample()
    const term = rdf.namedNode('http://localhost:8080/data/person/stuart-bloom')
    const cf = clownface({ dataset })

    const result = cf.node(term)

    assert.strictEqual(result._context[0].dataset, dataset)
  })

  it('should use the given Named Node', async () => {
    const term = rdf.namedNode('http://localhost:8080/data/person/stuart-bloom')
    const cf = clownface({ dataset: await loadExample() })

    const result = cf.node(term)

    assert.strictEqual(result._context.length, 1)
    assert(term.equals(result._context[0].term))
  })

  it('should use the given string as Literal', async () => {
    const value = '2311 North Los Robles Avenue, Aparment 4A'
    const cf = clownface({ dataset: await loadExample() })

    const result = cf.node(value)

    assert.strictEqual(result._context.length, 1)
    assert.strictEqual(result._context[0].term.termType, 'Literal')
    assert.strictEqual(result._context[0].term.value, value)
  })

  it('should use the given number as Literal', async () => {
    const cf = clownface({ dataset: await loadExample() })

    const result = cf.node(123)

    assert.strictEqual(result._context.length, 1)
    assert.strictEqual(result._context[0].term.termType, 'Literal')
    assert.strictEqual(result._context[0].term.value, '123')
  })

  it('should throw an error if an unknown type is given', () => {
    const cf = clownface({ dataset: rdf.dataset() })

    let result
    let catched = false

    try {
      result = cf.node(new RegExp()).nodes()
    } catch (e) {
      catched = true
    }

    assert.strictEqual(catched, true)
    assert.strictEqual(result, undefined)
  })

  it('should support multiple values in an array', () => {
    const cf = clownface({ dataset: rdf.dataset() })

    const result = cf.node(['1', '2'])

    assert.strictEqual(result._context.length, 2)
    assert.strictEqual(result._context[0].term.termType, 'Literal')
    assert.strictEqual(result._context[0].term.value, '1')
    assert.strictEqual(result._context[1].term.termType, 'Literal')
    assert.strictEqual(result._context[1].term.value, '2')
  })

  it('should create Named Node context if type is NamedNode', () => {
    const cf = clownface({ dataset: rdf.dataset() })

    const result = cf.node('http://example.org/', { type: 'NamedNode' })

    assert.strictEqual(result._context.length, 1)
    assert.strictEqual(result._context[0].term.termType, 'NamedNode')
  })

  it('should create Blank Node context if type is BlankNode', () => {
    const cf = clownface({ dataset: rdf.dataset() })

    const result = cf.node(null, { type: 'BlankNode' })

    assert.strictEqual(result._context.length, 1)
    assert.strictEqual(result._context[0].term.termType, 'BlankNode')
  })

  it('should use the given datatype', () => {
    const datatype = rdf.namedNode('http://example.org/datatype')
    const cf = clownface({ dataset: rdf.dataset() })

    const result = cf.node('example', { datatype: datatype.value })

    assert.strictEqual(result._context.length, 1)
    assert.strictEqual(result._context[0].term.termType, 'Literal')
    assert.strictEqual(result._context[0].term.datatype.termType, 'NamedNode')
    assert.strictEqual(result._context[0].term.datatype.value, datatype.value)
  })

  it('should accept rdfjs NamedNodes as datatype', () => {
    const datatype = rdf.namedNode('http://example.org/datatype')
    const cf = clownface({ dataset: rdf.dataset() })

    const result = cf.node('example', { datatype: datatype })

    assert.strictEqual(result._context.length, 1)
    assert.strictEqual(result._context[0].term.termType, 'Literal')
    assert.strictEqual(result._context[0].term.datatype.termType, 'NamedNode')
    assert.strictEqual(result._context[0].term.datatype.value, datatype.value)
  })
})
