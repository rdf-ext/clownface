/* global describe, it */

const assert = require('assert')
const clownface = require('../..')
const rdf = require('../support/factory')

describe('defaultGraph', () => {
  it('returns pointer to default graph node', () => {
    const pointer = clownface({ dataset: rdf.dataset() })

    const defaultGraph = pointer.defaultGraph

    assert(defaultGraph.term.equals(rdf.defaultGraphInstance))
  })
})
