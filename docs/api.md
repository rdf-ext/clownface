## Classes

<dl>
<dt><a href="#Clownface">Clownface</a></dt>
<dd><p>A graph pointer object, which points at 0..N nodes within a dataset</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#factory">factory(init)</a> ⇒ <code><a href="#Clownface">Clownface</a></code></dt>
<dd><p>Factory to create graph pointer objects</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#GraphPointerCallback">GraphPointerCallback</a> : <code>function</code></dt>
<dd></dd>
<dt><a href="#FilterCallback">FilterCallback</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#ForEachCallback">ForEachCallback</a> : <code>function</code></dt>
<dd></dd>
<dt><a href="#MapCallback">MapCallback</a> ⇒ <code>T</code></dt>
<dd></dd>
</dl>

<a name="Clownface"></a>

## Clownface
A graph pointer object, which points at 0..N nodes within a dataset

**Kind**: global class  

* [Clownface](#Clownface)
    * [.term](#Clownface+term) ⇒ <code>undefined</code> \| <code>Term</code>
    * [.terms](#Clownface+terms) ⇒ <code>Array.&lt;Term&gt;</code>
    * [.value](#Clownface+value) ⇒ <code>undefined</code> \| <code>string</code>
    * [.values](#Clownface+values) ⇒ <code>Array.&lt;string&gt;</code>
    * [.dataset](#Clownface+dataset) ⇒ <code>undefined</code> \| <code>DatasetCore</code>
    * [.datasets](#Clownface+datasets) ⇒ <code>Array.&lt;DatasetCore&gt;</code>
    * [.any()](#Clownface+any) ⇒ [<code>Clownface</code>](#Clownface)
    * [.isList()](#Clownface+isList) ⇒ <code>boolean</code>
    * [.list()](#Clownface+list) ⇒ <code>Iterable</code> \| <code>null</code>
    * [.toArray()](#Clownface+toArray) ⇒ [<code>Array.&lt;Clownface&gt;</code>](#Clownface)
    * [.filter(callback)](#Clownface+filter) ⇒ [<code>Clownface</code>](#Clownface)
    * [.forEach(callback)](#Clownface+forEach) ⇒ [<code>Clownface</code>](#Clownface)
    * [.map(callback)](#Clownface+map) ⇒ <code>Array.&lt;T&gt;</code>
    * [.node(values, [options])](#Clownface+node) ⇒ [<code>Clownface</code>](#Clownface)
    * [.blankNode([values])](#Clownface+blankNode) ⇒ [<code>Clownface</code>](#Clownface)
    * [.literal(values, [languageOrDatatype])](#Clownface+literal) ⇒ [<code>Clownface</code>](#Clownface)
    * [.namedNode(values)](#Clownface+namedNode) ⇒ [<code>Clownface</code>](#Clownface)
    * [.in([predicates])](#Clownface+in) ⇒ [<code>Clownface</code>](#Clownface)
    * [.out([predicates], [options])](#Clownface+out) ⇒ [<code>Clownface</code>](#Clownface)
    * [.has(predicates, [objects])](#Clownface+has) ⇒ [<code>Clownface</code>](#Clownface)
    * [.addIn(predicates, subjects, [callback])](#Clownface+addIn) ⇒ [<code>Clownface</code>](#Clownface)
    * [.addOut(predicates, objects, [callback])](#Clownface+addOut) ⇒ [<code>Clownface</code>](#Clownface)
    * [.addList(predicates, items)](#Clownface+addList) ⇒ [<code>Clownface</code>](#Clownface)
    * [.deleteIn([predicates], [subjects])](#Clownface+deleteIn) ⇒ [<code>Clownface</code>](#Clownface)
    * [.deleteOut([predicates], [objects])](#Clownface+deleteOut) ⇒ [<code>Clownface</code>](#Clownface)
    * [.deleteList(predicates)](#Clownface+deleteList) ⇒ [<code>Clownface</code>](#Clownface)

<a name="Clownface+term"></a>

### clownface.term ⇒ <code>undefined</code> \| <code>Term</code>
Gets the current RDF/JS term or undefined if pointer has no context

**Kind**: instance property of [<code>Clownface</code>](#Clownface)  
<a name="Clownface+terms"></a>

### clownface.terms ⇒ <code>Array.&lt;Term&gt;</code>
Gets the current terms or an empty array if the pointer has no context

**Kind**: instance property of [<code>Clownface</code>](#Clownface)  
<a name="Clownface+value"></a>

### clownface.value ⇒ <code>undefined</code> \| <code>string</code>
Gets the string representation of term

**Kind**: instance property of [<code>Clownface</code>](#Clownface)  
<a name="Clownface+values"></a>

### clownface.values ⇒ <code>Array.&lt;string&gt;</code>
Gets the string representation of terms

**Kind**: instance property of [<code>Clownface</code>](#Clownface)  
<a name="Clownface+dataset"></a>

### clownface.dataset ⇒ <code>undefined</code> \| <code>DatasetCore</code>
Gets the current context's dataset, or undefined if there are multiple

**Kind**: instance property of [<code>Clownface</code>](#Clownface)  
<a name="Clownface+datasets"></a>

### clownface.datasets ⇒ <code>Array.&lt;DatasetCore&gt;</code>
Gets the current context's datasets

**Kind**: instance property of [<code>Clownface</code>](#Clownface)  
<a name="Clownface+any"></a>

### clownface.any() ⇒ [<code>Clownface</code>](#Clownface)
Removes current pointers from the context and return an "any pointer".
The returned object can be used to find any nodes in the dataset

**Kind**: instance method of [<code>Clownface</code>](#Clownface)  
<a name="Clownface+isList"></a>

### clownface.isList() ⇒ <code>boolean</code>
Returns true if the current term is a rdf:List

**Kind**: instance method of [<code>Clownface</code>](#Clownface)  
<a name="Clownface+list"></a>

### clownface.list() ⇒ <code>Iterable</code> \| <code>null</code>
Creates an iterator which iterates and rdf:List of the current term

**Kind**: instance method of [<code>Clownface</code>](#Clownface)  
<a name="Clownface+toArray"></a>

### clownface.toArray() ⇒ [<code>Array.&lt;Clownface&gt;</code>](#Clownface)
Returns an array of graph pointers where each one has a single _context

**Kind**: instance method of [<code>Clownface</code>](#Clownface)  
<a name="Clownface+filter"></a>

### clownface.filter(callback) ⇒ [<code>Clownface</code>](#Clownface)
Returns graph pointers which meet the condition specified in a callback function

**Kind**: instance method of [<code>Clownface</code>](#Clownface)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>callback</td><td><code><a href="#FilterCallback">FilterCallback</a></code></td>
    </tr>  </tbody>
</table>

<a name="Clownface+forEach"></a>

### clownface.forEach(callback) ⇒ [<code>Clownface</code>](#Clownface)
Performs the specified action on every graph pointer

**Kind**: instance method of [<code>Clownface</code>](#Clownface)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>callback</td><td><code><a href="#ForEachCallback">ForEachCallback</a></code></td>
    </tr>  </tbody>
</table>

<a name="Clownface+map"></a>

### clownface.map(callback) ⇒ <code>Array.&lt;T&gt;</code>
Calls a defined callback function on each graph pointer, and returns an array that contains the results.

**Kind**: instance method of [<code>Clownface</code>](#Clownface)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>callback</td><td><code>MapCallback.&lt;T&gt;</code></td>
    </tr>  </tbody>
</table>

<a name="Clownface+node"></a>

### clownface.node(values, [options]) ⇒ [<code>Clownface</code>](#Clownface)
Creates graph pointer to one or more node(s)

Depending on the value creates pointers to:

- blank node context for null `values`
- literal for string `values` and no `options` paramter
- matching RDF/JS term
- term created according to `options.type` parameter

**Kind**: instance method of [<code>Clownface</code>](#Clownface)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>values</td><td><code>null</code> | <code>string</code> | <code>Array.&lt;string&gt;</code> | <code>Term</code> | <code>Array.&lt;Term&gt;</code> | <code><a href="#Clownface">Clownface</a></code> | <code><a href="#Clownface">Array.&lt;Clownface&gt;</a></code></td><td></td>
    </tr><tr>
    <td>[options]</td><td><code>Object</code></td><td></td>
    </tr><tr>
    <td>[options.type]</td><td><code>&quot;NamedNode&quot;</code> | <code>&quot;BlankNode&quot;</code> | <code>&quot;Literal&quot;</code></td><td><p>explicit type for nodes</p>
</td>
    </tr><tr>
    <td>[options.language]</td><td><code>string</code></td><td><p>language tag of literals</p>
</td>
    </tr><tr>
    <td>[options.datatype]</td><td><code>string</code></td><td><p>datatype of literals</p>
</td>
    </tr>  </tbody>
</table>

<a name="Clownface+blankNode"></a>

### clownface.blankNode([values]) ⇒ [<code>Clownface</code>](#Clownface)
Creates graph pointer to one or more blank nodes

**Kind**: instance method of [<code>Clownface</code>](#Clownface)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[values]</td><td><code>null</code> | <code>string</code> | <code>Array.&lt;string&gt;</code> | <code>BlankNode</code> | <code>Array.&lt;BlankNode&gt;</code> | <code><a href="#Clownface">Clownface</a></code> | <code><a href="#Clownface">Array.&lt;Clownface&gt;</a></code></td><td><p>blank node identifiers (generates it when falsy) or existing RDF/JS blank node(s)</p>
</td>
    </tr>  </tbody>
</table>

<a name="Clownface+literal"></a>

### clownface.literal(values, [languageOrDatatype]) ⇒ [<code>Clownface</code>](#Clownface)
Creates graph pointer to one or more literal nodes

**Kind**: instance method of [<code>Clownface</code>](#Clownface)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>values</td><td><code>string</code> | <code>Array.&lt;string&gt;</code> | <code>boolean</code> | <code>Array.&lt;boolean&gt;</code> | <code>number</code> | <code>Array.&lt;number&gt;</code> | <code>Literal</code> | <code>Array.&lt;Literal&gt;</code> | <code><a href="#Clownface">Clownface</a></code> | <code><a href="#Clownface">Array.&lt;Clownface&gt;</a></code></td><td><p>literal values as JS objects or RDF/JS Literal(s)</p>
</td>
    </tr><tr>
    <td>[languageOrDatatype]</td><td><code>string</code> | <code>Term</code></td><td><p>a language tag string or datatype term</p>
</td>
    </tr>  </tbody>
</table>

<a name="Clownface+namedNode"></a>

### clownface.namedNode(values) ⇒ [<code>Clownface</code>](#Clownface)
Creates graph pointer to one or more named nodes

**Kind**: instance method of [<code>Clownface</code>](#Clownface)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>values</td><td><code>string</code> | <code>Array.&lt;string&gt;</code> | <code>NamedNode</code> | <code>Array.&lt;NamedNode&gt;</code> | <code><a href="#Clownface">Clownface</a></code> | <code><a href="#Clownface">Array.&lt;Clownface&gt;</a></code></td><td><p>URI(s) or RDF/JS NamedNode(s)</p>
</td>
    </tr>  </tbody>
</table>

<a name="Clownface+in"></a>

### clownface.in([predicates]) ⇒ [<code>Clownface</code>](#Clownface)
Creates a graph pointer to nodes which are linked to the current pointer by `predicates`

**Kind**: instance method of [<code>Clownface</code>](#Clownface)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[predicates]</td><td><code>Term</code> | <code>Array.&lt;Term&gt;</code> | <code><a href="#Clownface">Clownface</a></code> | <code><a href="#Clownface">Array.&lt;Clownface&gt;</a></code></td><td><p>one or more RDF/JS term identifying a property</p>
</td>
    </tr>  </tbody>
</table>

<a name="Clownface+out"></a>

### clownface.out([predicates], [options]) ⇒ [<code>Clownface</code>](#Clownface)
Creates a graph pointer to the result nodes after following a predicate, or after
following any predicates in an array, starting from the subject(s) (current graph pointer) to the objects.

**Kind**: instance method of [<code>Clownface</code>](#Clownface)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[predicates]</td><td><code>Term</code> | <code>Array.&lt;Term&gt;</code> | <code><a href="#Clownface">Clownface</a></code> | <code><a href="#Clownface">Array.&lt;Clownface&gt;</a></code></td><td><p>any predicates to follow</p>
</td>
    </tr><tr>
    <td>[options]</td><td><code>object</code></td><td></td>
    </tr><tr>
    <td>[options.language]</td><td><code>string</code> | <code>Array.&lt;string&gt;</code> | <code>undefined</code></td><td></td>
    </tr>  </tbody>
</table>

<a name="Clownface+has"></a>

### clownface.has(predicates, [objects]) ⇒ [<code>Clownface</code>](#Clownface)
Creates a graph pointer to nodes which are subjects of predicates, optionally also with specific objects

If the current context is empty, will check all potential subjects

**Kind**: instance method of [<code>Clownface</code>](#Clownface)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>predicates</td><td><code>Term</code> | <code>Array.&lt;Term&gt;</code> | <code><a href="#Clownface">Clownface</a></code> | <code><a href="#Clownface">Array.&lt;Clownface&gt;</a></code></td><td><p>RDF property identifiers</p>
</td>
    </tr><tr>
    <td>[objects]</td><td><code>*</code></td><td><p>object values to match</p>
</td>
    </tr>  </tbody>
</table>

<a name="Clownface+addIn"></a>

### clownface.addIn(predicates, subjects, [callback]) ⇒ [<code>Clownface</code>](#Clownface)
Creates a new quad(s) in the dataset where the current context is the object

**Kind**: instance method of [<code>Clownface</code>](#Clownface)  
**Returns**: [<code>Clownface</code>](#Clownface) - current graph pointer  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>predicates</td><td><code>Term</code> | <code>Array.&lt;Term&gt;</code> | <code><a href="#Clownface">Clownface</a></code> | <code><a href="#Clownface">Array.&lt;Clownface&gt;</a></code></td><td></td>
    </tr><tr>
    <td>subjects</td><td><code>NamedNode</code> | <code>Array.&lt;NamedNode&gt;</code> | <code><a href="#Clownface">Clownface</a></code> | <code><a href="#Clownface">Array.&lt;Clownface&gt;</a></code></td><td><p>one or more nodes to use as subjects</p>
</td>
    </tr><tr>
    <td>[callback]</td><td><code><a href="#GraphPointerCallback">GraphPointerCallback</a></code></td><td><p>called for each object, with subject pointer as parameter</p>
</td>
    </tr>  </tbody>
</table>

<a name="Clownface+addOut"></a>

### clownface.addOut(predicates, objects, [callback]) ⇒ [<code>Clownface</code>](#Clownface)
Creates a new quad(s) in the dataset where the current context is the subject

**Kind**: instance method of [<code>Clownface</code>](#Clownface)  
**Returns**: [<code>Clownface</code>](#Clownface) - current graph pointer  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>predicates</td><td><code>Term</code> | <code>Array.&lt;Term&gt;</code> | <code><a href="#Clownface">Clownface</a></code> | <code><a href="#Clownface">Array.&lt;Clownface&gt;</a></code></td><td></td>
    </tr><tr>
    <td>objects</td><td><code>*</code></td><td><p>one or more values to use for objects</p>
</td>
    </tr><tr>
    <td>[callback]</td><td><code><a href="#GraphPointerCallback">GraphPointerCallback</a></code></td><td><p>called for each subject, with object pointer as parameter</p>
</td>
    </tr>  </tbody>
</table>

<a name="Clownface+addList"></a>

### clownface.addList(predicates, items) ⇒ [<code>Clownface</code>](#Clownface)
Creates a new RDF list or lists containing the given items

**Kind**: instance method of [<code>Clownface</code>](#Clownface)  
**Returns**: [<code>Clownface</code>](#Clownface) - current graph pointer  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>predicates</td><td><code>Term</code> | <code>Array.&lt;Term&gt;</code> | <code><a href="#Clownface">Clownface</a></code> | <code><a href="#Clownface">Array.&lt;Clownface&gt;</a></code></td><td></td>
    </tr><tr>
    <td>items</td><td><code>*</code></td><td><p>one or more values to use for subjects</p>
</td>
    </tr>  </tbody>
</table>

<a name="Clownface+deleteIn"></a>

### clownface.deleteIn([predicates], [subjects]) ⇒ [<code>Clownface</code>](#Clownface)
Deletes all quads where the current graph pointer contexts are the objects

**Kind**: instance method of [<code>Clownface</code>](#Clownface)  
**Returns**: [<code>Clownface</code>](#Clownface) - current graph pointer  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[predicates]</td><td><code>Term</code> | <code>Array.&lt;Term&gt;</code> | <code><a href="#Clownface">Clownface</a></code> | <code><a href="#Clownface">Array.&lt;Clownface&gt;</a></code></td>
    </tr><tr>
    <td>[subjects]</td><td><code>Term</code> | <code>Array.&lt;Term&gt;</code> | <code><a href="#Clownface">Clownface</a></code> | <code><a href="#Clownface">Array.&lt;Clownface&gt;</a></code></td>
    </tr>  </tbody>
</table>

<a name="Clownface+deleteOut"></a>

### clownface.deleteOut([predicates], [objects]) ⇒ [<code>Clownface</code>](#Clownface)
Deletes all quads where the current graph pointer contexts are the subjects

**Kind**: instance method of [<code>Clownface</code>](#Clownface)  
**Returns**: [<code>Clownface</code>](#Clownface) - current graph pointer  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[predicates]</td><td><code>Term</code> | <code>Array.&lt;Term&gt;</code> | <code><a href="#Clownface">Clownface</a></code> | <code><a href="#Clownface">Array.&lt;Clownface&gt;</a></code></td>
    </tr><tr>
    <td>[objects]</td><td><code>Term</code> | <code>Array.&lt;Term&gt;</code> | <code><a href="#Clownface">Clownface</a></code> | <code><a href="#Clownface">Array.&lt;Clownface&gt;</a></code></td>
    </tr>  </tbody>
</table>

<a name="Clownface+deleteList"></a>

### clownface.deleteList(predicates) ⇒ [<code>Clownface</code>](#Clownface)
Deletes entire RDF lists where the current graph pointer is the subject

**Kind**: instance method of [<code>Clownface</code>](#Clownface)  
**Returns**: [<code>Clownface</code>](#Clownface) - current graph pointer  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>predicates</td><td><code>Term</code> | <code>Array.&lt;Term&gt;</code> | <code><a href="#Clownface">Clownface</a></code> | <code><a href="#Clownface">Array.&lt;Clownface&gt;</a></code></td>
    </tr>  </tbody>
</table>

<a name="factory"></a>

## factory(init) ⇒ [<code>Clownface</code>](#Clownface)
Factory to create graph pointer objects

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>init</td><td><code>Object</code></td><td></td><td></td>
    </tr><tr>
    <td>init.dataset</td><td><code>DatasetCore</code></td><td></td><td><p>an RDF/JS dataset</p>
</td>
    </tr><tr>
    <td>[init.graph]</td><td><code>string</code> | <code>Term</code></td><td></td><td><p>graph URI</p>
</td>
    </tr><tr>
    <td>[init.term]</td><td><code>Term</code> | <code>Array.&lt;Term&gt;</code></td><td></td><td><p>one or more RDF/JS term(s) which will be the pointer&#39;s context</p>
</td>
    </tr><tr>
    <td>[init.value]</td><td><code>string</code></td><td></td><td><p>one or more raw values which will create literal node as the pointer&#39;s context</p>
</td>
    </tr><tr>
    <td>[init.factory]</td><td><code>DataFactory</code></td><td><code>@rdfjs/data-model</code></td><td><p>an RDF/JS factory which will be used to create nodes</p>
</td>
    </tr><tr>
    <td>[init._context]</td><td><code>Context</code> | <code>Array.&lt;Context&gt;</code></td><td></td><td><p>an existing clownface context. takes precedence before other params</p>
</td>
    </tr>  </tbody>
</table>

<a name="GraphPointerCallback"></a>

## GraphPointerCallback : <code>function</code>
**Kind**: global typedef  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>pointer</td><td><code><a href="#Clownface">Clownface</a></code></td><td><p>graph pointer to the new or existing node</p>
</td>
    </tr>  </tbody>
</table>

<a name="FilterCallback"></a>

## FilterCallback ⇒ <code>boolean</code>
**Kind**: global typedef  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>pointer</td><td><code><a href="#Clownface">Clownface</a></code></td>
    </tr>  </tbody>
</table>

<a name="ForEachCallback"></a>

## ForEachCallback : <code>function</code>
**Kind**: global typedef  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>pointer</td><td><code><a href="#Clownface">Clownface</a></code></td>
    </tr>  </tbody>
</table>

<a name="MapCallback"></a>

## MapCallback ⇒ <code>T</code>
**Kind**: global typedef  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>pointer</td><td><code><a href="#Clownface">Clownface</a></code></td>
    </tr>  </tbody>
</table>

