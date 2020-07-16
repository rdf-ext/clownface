/* global describe, it */
import assert from 'assert'
import { turtle } from '@tpluscode/rdf-string'
import { rdfs } from '@tpluscode/rdf-ns-builders'
import clownface from '../../index.mjs'
import loadExample from '../support/example.js'
import rdf from '../support/factory.js'
import { Clownface } from '../../lib/Clownface.mjs'
import ns from '../support/namespace.js'
import parse from '../support/parse.mjs'

const { ex } = ns

describe('Clownface.out', () => {
  it('should be a function', () => {
    const cf = clownface({ dataset: rdf.dataset() })

    assert.strictEqual(typeof cf.out, 'function')
  })

  it('should return a new Dataset instance', async () => {
    const cf = clownface({
      dataset: await loadExample(),
      term: rdf.namedNode('http://localhost:8080/data/person/amy-farrah-fowler')
    })

    const result = cf.out(rdf.namedNode('http://schema.org/jobTitle'))

    assert(result instanceof Clownface)
    assert.notStrictEqual(result, cf)
  })

  it('should search subject -> object', async () => {
    const cf = clownface({
      dataset: await loadExample(),
      term: rdf.namedNode('http://localhost:8080/data/person/amy-farrah-fowler')
    })

    const result = cf.out(rdf.namedNode('http://schema.org/jobTitle'))

    assert.strictEqual(result._context.length, 1)
    assert.strictEqual(result._context[0].term.termType, 'Literal')
    assert.strictEqual(result._context[0].term.value, 'neurobiologist')
  })

  it('should support multiple predicate values in an array', async () => {
    const cf = clownface({
      dataset: await loadExample(),
      term: rdf.namedNode('http://localhost:8080/data/person/bernadette-rostenkowski')
    })

    const result = cf.out([
      rdf.namedNode('http://schema.org/familyName'),
      rdf.namedNode('http://schema.org/givenName')
    ])

    assert.strictEqual(result._context.length, 2)
  })

  it('should support clownface objects as predicates', async () => {
    const cf = clownface({
      dataset: await loadExample(),
      term: rdf.namedNode('http://localhost:8080/data/person/bernadette-rostenkowski')
    })

    const result = cf.out(cf.node([
      rdf.namedNode('http://schema.org/familyName'),
      rdf.namedNode('http://schema.org/givenName')
    ]))

    assert.strictEqual(result._context.length, 2)
  })

  describe('with language option', () => {
    const testData = turtle`${ex.ananas}
      ${rdfs.label} "Pineapple" ;
      ${rdfs.label} "Ananas"@pl ;
      ${rdfs.label} "Ananas"@de ;
      ${rdfs.label} "Ananász"@hu ;
      ${rdfs.label} "Ananas"@sr-Latn ;
      ${rdfs.label} "Ананас"@sr-Cyrl ;
    .
    
    ${ex.noLabels} ${rdfs.label} _:foo , ${ex.bar}, 41 .
    
    ${ex.apple}
      ${rdfs.label} "Apple"@en ;
      ${rdfs.label} "Apfel"@de ;
      ${rdfs.label} "Јабука"@sr-Cyrl .
      
    ${ex.carrot}
      ${rdfs.label} "Karotte"@de ;
      ${rdfs.label} "Karotte"@de-AT ;
      ${rdfs.label} "Rüebli"@de-CH ;
    .
    
    ${ex.eggplant}
      ${rdfs.label} "Psianka podłużna"@pl, "Bakłażan"@pl, "Oberżyna"@pl .
      
    ${ex.kongressstrasse} 
      ${rdfs.label} "Kongressstraße"@de ;
      ${rdfs.label} "Kongreßstraße"@de-DE-1901 ;
    .`.toString()

    describe('filtered by single language parameter', () => {
      it('should not return non-literals and non-string literals when language parameter is defined', async () => {
        const apple = (await parse(testData)).node(ex.noLabels)

        const label = apple.out(rdfs.label, { language: '' })

        assert.strictEqual(label.terms.length, 0)
      })

      it('should return exact match for given language', async () => {
        const apple = (await parse(testData)).node(ex.apple)

        const label = apple.out(rdfs.label, { language: 'de' })

        assert(label.term.equals(rdf.literal('Apfel', 'de')))
      })

      it('should return plain string when language is empty string', async () => {
        const apple = (await parse(testData)).node(ex.ananas)

        const label = apple.out(rdfs.label, { language: '' })

        assert(label.term.equals(rdf.literal('Pineapple')))
      })

      it('should skip pointers which do not have matching language', async () => {
        const apple = (await parse(testData)).node(ex.ananas)

        const label = apple.out(rdfs.label, { language: 'en' })

        assert.strictEqual(label.values.length, 0)
      })

      it('should return any result for wildcard language', async () => {
        const apple = (await parse(testData)).node(ex.ananas)

        const label = apple.out(rdfs.label, { language: '*' })

        assert.ok(label.term)
      })

      it('should return all matching literals for a language', async () => {
        const apple = (await parse(testData)).node(ex.eggplant)

        const label = apple.out(rdfs.label, { language: 'pl' })

        assert.strictEqual(label.terms.length, 3)
      })

      it('should return all matching literals for a wildcard language', async () => {
        const apple = (await parse(testData)).node(ex.eggplant)

        const label = apple.out(rdfs.label, { language: '*' })

        assert.strictEqual(label.terms.length, 3)
      })

      it('should be case-insensitive', async () => {
        const apple = (await parse(testData)).node(ex.apple)

        const label = apple.out(rdfs.label, { language: 'SR-cyrl' })

        assert(label.term.equals(rdf.literal('Јабука', 'sr-Cyrl')))
      })

      it('should match secondary language tag by primary', async () => {
        const apple = (await parse(testData)).node(ex.apple)

        const label = apple.out(rdfs.label, { language: 'sr' })

        assert(label.term.equals(rdf.literal('Јабука', 'sr-Cyrl')))
      })

      it('should match secondary language tag by primary regardless of case', async () => {
        const apple = (await parse(testData)).node(ex.apple)

        const label = apple.out(rdfs.label, { language: 'SR' })

        assert(label.term.equals(rdf.literal('Јабука', 'sr-Cyrl')))
      })

      it('should match tertiary tag by secondary language', async () => {
        const apple = (await parse(testData)).node(ex.kongressstrasse)

        const label = apple.out(rdfs.label, { language: 'de-DE' })

        assert(label.term.equals(rdf.literal('Kongreßstraße', 'de-DE-1901')))
      })
    })

    describe('filtered by multiple languages', () => {
      it('should choose first match', async () => {
        const apple = (await parse(testData)).node(ex.apple)

        const label = apple.out(rdfs.label, { language: ['fr', 'no', 'be', 'en', 'de'] })

        assert(label.term.equals(rdf.literal('Apple', 'en')))
      })

      it('should choose exact match over secondary language', async () => {
        const apple = (await parse(testData)).node(ex.carrot)

        const label = apple.out(rdfs.label, { language: ['de-1901', 'de'] })

        assert(label.term.equals(rdf.literal('Karotte', 'de')))
      })
    })
  })
})
