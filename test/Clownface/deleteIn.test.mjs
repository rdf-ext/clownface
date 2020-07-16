/* global describe, it */

import assert from 'assert'
import clownface from '../../index.mjs'
import loadExample from '../support/example.js'
import rdf from '../support/factory.js'
import dataset from 'rdf-dataset-ext'

const { addAll } = dataset

describe('Clownface.deleteIn', () => {
  it('should be a function', () => {
    const cf = clownface({ dataset: rdf.dataset() })

    assert.strictEqual(typeof cf.deleteIn, 'function')
  })

  it('should return the called object', async () => {
    const dataset = addAll(rdf.dataset(), await loadExample())
    const cf = clownface({ dataset })

    assert.strictEqual(cf.deleteIn(), cf)
  })

  it('should remove quads based on the object value', async () => {
    const dataset = addAll(rdf.dataset(), await loadExample())
    const cf = clownface({
      dataset,
      term: rdf.namedNode('http://localhost:8080/data/person/bernadette-rostenkowski')
    })

    cf.deleteIn()

    assert.strictEqual(dataset.size, 118)
  })

  it('should remove quads based on the object value and predicate', async () => {
    const dataset = addAll(rdf.dataset(), await loadExample())
    const cf = clownface({
      dataset,
      term: rdf.namedNode('http://localhost:8080/data/person/bernadette-rostenkowski')
    })

    cf.deleteIn(rdf.namedNode('http://schema.org/knows'))

    assert.strictEqual(dataset.size, 119)
  })

  it('should remove quads based on the object value and multiple predicates', async () => {
    const dataset = addAll(rdf.dataset(), await loadExample())
    const cf = clownface({
      dataset,
      term: rdf.namedNode('http://localhost:8080/data/person/bernadette-rostenkowski')
    })

    cf.deleteIn([
      rdf.namedNode('http://schema.org/knows'),
      rdf.namedNode('http://schema.org/spouse')
    ])

    assert.strictEqual(dataset.size, 118)
  })
})
