/**
 * @module lib/inArray
 */

export function inArray (node, array) {
  return array.some(function (otherNode) {
    return otherNode.equals(node)
  })
}
