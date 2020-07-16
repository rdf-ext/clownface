/**
 * @module lib/namespace
 */

import ns from '@rdf-esm/namespace'

export const namespace = (factory) => {
  const xsd = ns('http://www.w3.org/2001/XMLSchema#', { factory })
  const rdf = ns('http://www.w3.org/1999/02/22-rdf-syntax-ns#', { factory })

  return {
    first: rdf.first,
    nil: rdf.nil,
    rest: rdf.rest,
    langString: rdf.langString,
    xsd
  }
}
