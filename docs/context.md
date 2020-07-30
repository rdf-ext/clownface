# Clownface context

A `Clownface` object represents 0 or more nodes in an underlying dataset. There are two pairs of properties (getters) which return those nodes:

1. `term`/`terms` which return RDF/JS terms
3. `value`/`values` which return string representation of said terms

It is important to understand their semantics.

The singular `term` and `value` return an object only when the `Clownface` instance represents a single term. If the context is 0 nodes or >1 nodes, they return `undefined`

The plural `terms` and `values` always return an array of objects, or an empty array.

## Initialising the context

As presented in the [getting started](/) and [deep dive](deep-dive.md) examples, a clownface instance is initially created using a factory function exported by the module. Depending on the parameters passed to it, various contexts can be created.

### Any pointer

By providing only a `dataset` parameter to the clownface factory, an "Any pointer" is created.

This state is quite unique, because this is the only circumstance in which a context will be empty. In other words, in this state, the pointer does not really point at any node within the dataset. Similar to a Null Pointer in some programming languages.

<run-kit>

```js
const cf = require('clownface')
const rdf = require('@rdfjs/dataset')

// only dataset is a required parameter
const anyPointer = cf({ dataset: rdf.dataset() })

const { term, value, terms, values } = anyPointer

// term/value are undefined
console.log(`Term: ${term}; Value: ${value}`)

// terms/values are empty arrays
console.log(`Terms: ${terms}; Values: ${values}`)
```

</run-kit>

### A single pointer

The context can represent a single graph pointer, that is a single node in the graph.

<run-kit>

```js
const cf = require('clownface')
const rdf = require('@rdfjs/dataset')
const { schema } = require('@tpluscode/rdf-ns-builders')

// the initial term can be initialized in the factory method
const graphPointer = cf({ dataset: rdf.dataset(), term: schema.Person })

// term/value are defined
// terms/values are single-element arrays
const context = {
  term: graphPointer.term,
  value: graphPointer.value,
  terms: graphPointer.terms,
  values: graphPointer.values
}
```

</run-kit>

### Multi-pointer

A pointer object can also point at multiple nodes at the same time. Those nodes could be in different named graphs or even different datset.

We refer to it as "multi-pointer".

It is probably the most common kind of pointer you will work with as values returned from most methods `.in()`, `.out()` and `.has()` are potentially multi-pointers.

<run-kit>

```js
const cf = require('clownface')
const rdf = require('@rdfjs/dataset')
const { foaf, schema } = require('@tpluscode/rdf-ns-builders')

// the term can also be an array of RDF/JS nodes
const graphPointer = cf({ dataset: rdf.dataset(), term: [ schema.Person, foaf.Person ] })

// term/value are undefined
// terms/values are arrays
const context = {
  term: graphPointer.term,
  value: graphPointer.value,
  terms: graphPointer.terms,
  values: graphPointer.values
}
```

</run-kit>

To ensure individual graph pointers, one can call `.toArray()`. Also the callbacks to `.forEach` and `.map()` methods will always invoked on singular graph pointers even if the original instance is a multi-pointer.

## Switching context

At any time the graph pointer can be moved to another node using one of a few methods of self-descriptive names:

- `node`
- `namedNode`
- `blankNode`
- `literal`

Note that switching the pointer always returns a new `Clownface` object. Also, the new pointed node does not have to exist in the dataset. Simply changing the pointer also does not modify the dataset.

<run-kit>

```js
const cf = require('clownface')
const rdf = require('@rdfjs/dataset')
const namespace = require('@rdfjs/namespace')
const { xsd } = require('@tpluscode/rdf-ns-builders')

const ex = namespace('http://example.com/')

// the term can also be an array of RDF/JS nodes
const graphPointer = cf({ dataset: rdf.dataset(), term: ex.foo })

const contexts = {
  // namedNode treat string as URI
  named: graphPointer.namedNode('http://example.com/bar').term,

  // literal can have language or datatype
  literal: graphPointer.literal('10', xsd.nonNegativeInteger).term,

  // blank node does not require parameters
  blank: graphPointer.blankNode().term,

  // `node` will attempt to detect the term type
  // but be careful with URI strings
  detected: graphPointer.node('http://example.com/bar').term,
    
  // the original object still points at the original node
  original: graphPointer.term,
}
```

</run-kit>

Each one of those methods also accept RDF/JS terms and instances of `Clownface` itself as well as array to create a multiple pointer context. Do refer to [the API page](api.md) for details about their parameters.

## Returning to any pointer

?> From v1.1

Given a singular graph pointer or a multi-pointer it is possible to reject the pointed nodes to return to the initial state.

<run-kit>

```js
const cf = require('clownface')
const rdf = require('@rdfjs/dataset')
const namespace = require('@rdfjs/namespace')
const { xsd } = require('@tpluscode/rdf-ns-builders')

const ex = namespace('http://example.com/')

const graphPointer = cf({ dataset: rdf.dataset(), term: ex.foo })

const { term, terms, value, values } = graphPointer.any()

// term/value are again undefined
console.log(`Term: ${term}; Value: ${value}`)

// terms/values are again empty arrays
console.log(`Terms: ${terms}; Values: ${values}`)
```

</run-kit>

> Of course data is not changed by this method.
>
> Also the original pointer is not modified.
