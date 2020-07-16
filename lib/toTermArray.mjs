/**
 * @module lib/toTermArray
 */

import { term } from './term.mjs'
import { toArray } from './toArray.mjs'

export function toTermArray (items, type, languageOrDatatype, factory) {
  if ((typeof items === 'undefined' || items === null) && !type) {
    return items
  }

  return (toArray(items) || [undefined]).reduce((all, item) => {
    if (typeof item === 'object' && item.terms) {
      return all.concat(item.terms)
    }

    all.push(term(item, type, languageOrDatatype, factory))

    return all
  }, [])
}
