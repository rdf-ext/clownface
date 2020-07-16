## Modules

<dl>
<dt><a href="#module_index">index</a></dt>
<dd></dd>
<dt><a href="#module_lib/Clownface">lib/Clownface</a></dt>
<dd></dd>
<dt><a href="#module_lib/Context">lib/Context</a></dt>
<dd></dd>
<dt><a href="#module_lib/fromPrimitive">lib/fromPrimitive</a></dt>
<dd></dd>
<dt><a href="#module_lib/inArray">lib/inArray</a></dt>
<dd></dd>
<dt><a href="#module_lib/languageTag">lib/languageTag</a></dt>
<dd></dd>
<dt><a href="#module_lib/namespace">lib/namespace</a></dt>
<dd></dd>
<dt><a href="#module_lib/term">lib/term</a></dt>
<dd></dd>
<dt><a href="#module_lib/toArray">lib/toArray</a></dt>
<dd></dd>
<dt><a href="#module_lib/toTermArray">lib/toTermArray</a></dt>
<dd></dd>
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

<a name="module_index"></a>

## index
<a name="exp_module_index--module.exports"></a>

### module.exports(init) ⇒ <code>Clownface</code> ⏏
Factory to create graph pointer objects

**Kind**: Exported function  
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
    <td>[init._context]</td><td><code>Context</code></td><td></td><td><p>an existing clownface context. takes precedence before other params</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_lib/Clownface"></a>

## lib/Clownface

* [lib/Clownface](#module_lib/Clownface)
    * [.Clownface](#module_lib/Clownface.Clownface)
        * [.term](#module_lib/Clownface.Clownface+term) ⇒ <code>undefined</code> \| <code>Term</code>
        * [.terms](#module_lib/Clownface.Clownface+terms) ⇒ <code>Array.&lt;Term&gt;</code>
        * [.value](#module_lib/Clownface.Clownface+value) ⇒ <code>undefined</code> \| <code>string</code>
        * [.values](#module_lib/Clownface.Clownface+values) ⇒ <code>Array.&lt;string&gt;</code>
        * [.dataset](#module_lib/Clownface.Clownface+dataset) ⇒ <code>undefined</code> \| <code>DatasetCore</code>
        * [.datasets](#module_lib/Clownface.Clownface+datasets) ⇒ <code>Array.&lt;DatasetCore&gt;</code>
        * [.list()](#module_lib/Clownface.Clownface+list) ⇒ <code>Iterable</code> \| <code>null</code>
        * [.toArray()](#module_lib/Clownface.Clownface+toArray) ⇒ <code>Array.&lt;Clownface&gt;</code>
        * [.filter(callback)](#module_lib/Clownface.Clownface+filter) ⇒ <code>Clownface</code>
        * [.forEach(callback)](#module_lib/Clownface.Clownface+forEach) ⇒ <code>Clownface</code>
        * [.map(callback)](#module_lib/Clownface.Clownface+map) ⇒ <code>Array.&lt;T&gt;</code>
        * [.node(values, [options])](#module_lib/Clownface.Clownface+node) ⇒ <code>Clownface</code>
        * [.blankNode([values])](#module_lib/Clownface.Clownface+blankNode) ⇒ <code>Clownface</code>
        * [.literal(values, [languageOrDatatype])](#module_lib/Clownface.Clownface+literal) ⇒ <code>Clownface</code>
        * [.namedNode(values)](#module_lib/Clownface.Clownface+namedNode) ⇒ <code>Clownface</code>
        * [.in(predicates)](#module_lib/Clownface.Clownface+in) ⇒ <code>Clownface</code>
        * [.out(predicates, [options])](#module_lib/Clownface.Clownface+out) ⇒ <code>Clownface</code>
        * [.has(predicates, [objects])](#module_lib/Clownface.Clownface+has) ⇒ <code>Clownface</code>
        * [.addIn(predicates, subjects, [callback])](#module_lib/Clownface.Clownface+addIn) ⇒ <code>Clownface</code>
        * [.addOut(predicates, objects, [callback])](#module_lib/Clownface.Clownface+addOut) ⇒ <code>Clownface</code>
        * [.addList(predicates, items)](#module_lib/Clownface.Clownface+addList) ⇒ <code>Clownface</code>
        * [.deleteIn(predicates)](#module_lib/Clownface.Clownface+deleteIn) ⇒ <code>Clownface</code>
        * [.deleteOut(predicates)](#module_lib/Clownface.Clownface+deleteOut) ⇒ <code>Clownface</code>
        * [.deleteList(predicates)](#module_lib/Clownface.Clownface+deleteList) ⇒ <code>Clownface</code>

<a name="module_lib/Clownface.Clownface"></a>

### lib/Clownface.Clownface
A graph pointer object, which points at 0..N nodes within a dataset

**Kind**: static class of [<code>lib/Clownface</code>](#module_lib/Clownface)  

* [.Clownface](#module_lib/Clownface.Clownface)
    * [.term](#module_lib/Clownface.Clownface+term) ⇒ <code>undefined</code> \| <code>Term</code>
    * [.terms](#module_lib/Clownface.Clownface+terms) ⇒ <code>Array.&lt;Term&gt;</code>
    * [.value](#module_lib/Clownface.Clownface+value) ⇒ <code>undefined</code> \| <code>string</code>
    * [.values](#module_lib/Clownface.Clownface+values) ⇒ <code>Array.&lt;string&gt;</code>
    * [.dataset](#module_lib/Clownface.Clownface+dataset) ⇒ <code>undefined</code> \| <code>DatasetCore</code>
    * [.datasets](#module_lib/Clownface.Clownface+datasets) ⇒ <code>Array.&lt;DatasetCore&gt;</code>
    * [.list()](#module_lib/Clownface.Clownface+list) ⇒ <code>Iterable</code> \| <code>null</code>
    * [.toArray()](#module_lib/Clownface.Clownface+toArray) ⇒ <code>Array.&lt;Clownface&gt;</code>
    * [.filter(callback)](#module_lib/Clownface.Clownface+filter) ⇒ <code>Clownface</code>
    * [.forEach(callback)](#module_lib/Clownface.Clownface+forEach) ⇒ <code>Clownface</code>
    * [.map(callback)](#module_lib/Clownface.Clownface+map) ⇒ <code>Array.&lt;T&gt;</code>
    * [.node(values, [options])](#module_lib/Clownface.Clownface+node) ⇒ <code>Clownface</code>
    * [.blankNode([values])](#module_lib/Clownface.Clownface+blankNode) ⇒ <code>Clownface</code>
    * [.literal(values, [languageOrDatatype])](#module_lib/Clownface.Clownface+literal) ⇒ <code>Clownface</code>
    * [.namedNode(values)](#module_lib/Clownface.Clownface+namedNode) ⇒ <code>Clownface</code>
    * [.in(predicates)](#module_lib/Clownface.Clownface+in) ⇒ <code>Clownface</code>
    * [.out(predicates, [options])](#module_lib/Clownface.Clownface+out) ⇒ <code>Clownface</code>
    * [.has(predicates, [objects])](#module_lib/Clownface.Clownface+has) ⇒ <code>Clownface</code>
    * [.addIn(predicates, subjects, [callback])](#module_lib/Clownface.Clownface+addIn) ⇒ <code>Clownface</code>
    * [.addOut(predicates, objects, [callback])](#module_lib/Clownface.Clownface+addOut) ⇒ <code>Clownface</code>
    * [.addList(predicates, items)](#module_lib/Clownface.Clownface+addList) ⇒ <code>Clownface</code>
    * [.deleteIn(predicates)](#module_lib/Clownface.Clownface+deleteIn) ⇒ <code>Clownface</code>
    * [.deleteOut(predicates)](#module_lib/Clownface.Clownface+deleteOut) ⇒ <code>Clownface</code>
    * [.deleteList(predicates)](#module_lib/Clownface.Clownface+deleteList) ⇒ <code>Clownface</code>

<a name="module_lib/Clownface.Clownface+term"></a>

#### clownface.term ⇒ <code>undefined</code> \| <code>Term</code>
Gets the current RDF/JS term or undefined if pointer has no context

**Kind**: instance property of [<code>Clownface</code>](#module_lib/Clownface.Clownface)  
<a name="module_lib/Clownface.Clownface+terms"></a>

#### clownface.terms ⇒ <code>Array.&lt;Term&gt;</code>
Gets the current terms or an empty array if the pointer has no context

**Kind**: instance property of [<code>Clownface</code>](#module_lib/Clownface.Clownface)  
<a name="module_lib/Clownface.Clownface+value"></a>

#### clownface.value ⇒ <code>undefined</code> \| <code>string</code>
Gets the string representation of term

**Kind**: instance property of [<code>Clownface</code>](#module_lib/Clownface.Clownface)  
<a name="module_lib/Clownface.Clownface+values"></a>

#### clownface.values ⇒ <code>Array.&lt;string&gt;</code>
Gets the string representation of terms

**Kind**: instance property of [<code>Clownface</code>](#module_lib/Clownface.Clownface)  
<a name="module_lib/Clownface.Clownface+dataset"></a>

#### clownface.dataset ⇒ <code>undefined</code> \| <code>DatasetCore</code>
Gets the current context's dataset, or undefined if there are multiple

**Kind**: instance property of [<code>Clownface</code>](#module_lib/Clownface.Clownface)  
<a name="module_lib/Clownface.Clownface+datasets"></a>

#### clownface.datasets ⇒ <code>Array.&lt;DatasetCore&gt;</code>
Gets the current context's datasets

**Kind**: instance property of [<code>Clownface</code>](#module_lib/Clownface.Clownface)  
<a name="module_lib/Clownface.Clownface+list"></a>

#### clownface.list() ⇒ <code>Iterable</code> \| <code>null</code>
Creates an iterator which iterates and rdf:List of the current term

**Kind**: instance method of [<code>Clownface</code>](#module_lib/Clownface.Clownface)  
<a name="module_lib/Clownface.Clownface+toArray"></a>

#### clownface.toArray() ⇒ <code>Array.&lt;Clownface&gt;</code>
Returns an array of graph pointers where each one has a single _context

**Kind**: instance method of [<code>Clownface</code>](#module_lib/Clownface.Clownface)  
<a name="module_lib/Clownface.Clownface+filter"></a>

#### clownface.filter(callback) ⇒ <code>Clownface</code>
Returns graph pointers which meet the condition specified in a callback function

**Kind**: instance method of [<code>Clownface</code>](#module_lib/Clownface.Clownface)  
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

<a name="module_lib/Clownface.Clownface+forEach"></a>

#### clownface.forEach(callback) ⇒ <code>Clownface</code>
Performs the specified action on every graph pointer

**Kind**: instance method of [<code>Clownface</code>](#module_lib/Clownface.Clownface)  
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

<a name="module_lib/Clownface.Clownface+map"></a>

#### clownface.map(callback) ⇒ <code>Array.&lt;T&gt;</code>
Calls a defined callback function on each graph pointer, and returns an array that contains the results.

**Kind**: instance method of [<code>Clownface</code>](#module_lib/Clownface.Clownface)  
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

<a name="module_lib/Clownface.Clownface+node"></a>

#### clownface.node(values, [options]) ⇒ <code>Clownface</code>
Creates graph pointer to one or more node(s)

Depending on the value creates pointers to:

- blank node context for null `values`
- literal for string `values` and no `options` paramter
- matching RDF/JS term
- term created according to `options.type` parameter

**Kind**: instance method of [<code>Clownface</code>](#module_lib/Clownface.Clownface)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>values</td><td><code>null</code> | <code>string</code> | <code>Array.&lt;string&gt;</code> | <code>Term</code> | <code>Array.&lt;Term&gt;</code> | <code>Clownface</code> | <code>Array.&lt;Clownface&gt;</code></td><td></td>
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

<a name="module_lib/Clownface.Clownface+blankNode"></a>

#### clownface.blankNode([values]) ⇒ <code>Clownface</code>
Creates graph pointer to one or more blank nodes

**Kind**: instance method of [<code>Clownface</code>](#module_lib/Clownface.Clownface)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[values]</td><td><code>null</code> | <code>string</code> | <code>Array.&lt;string&gt;</code> | <code>BlankNode</code> | <code>Array.&lt;BlankNode&gt;</code> | <code>Clownface</code> | <code>Array.&lt;Clownface&gt;</code></td><td><p>blank node identifiers (generates it when falsy) or existing RDF/JS blank node(s)</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_lib/Clownface.Clownface+literal"></a>

#### clownface.literal(values, [languageOrDatatype]) ⇒ <code>Clownface</code>
Creates graph pointer to one or more literal nodes

**Kind**: instance method of [<code>Clownface</code>](#module_lib/Clownface.Clownface)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>values</td><td><code>string</code> | <code>Array.&lt;string&gt;</code> | <code>boolean</code> | <code>Array.&lt;boolean&gt;</code> | <code>number</code> | <code>Array.&lt;number&gt;</code> | <code>Literal</code> | <code>Array.&lt;Literal&gt;</code> | <code>Clownface</code> | <code>Array.&lt;Clownface&gt;</code></td><td><p>literal values as JS objects or RDF/JS Literal(s)</p>
</td>
    </tr><tr>
    <td>[languageOrDatatype]</td><td><code>string</code> | <code>Term</code></td><td><p>a language tag string or datatype term</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_lib/Clownface.Clownface+namedNode"></a>

#### clownface.namedNode(values) ⇒ <code>Clownface</code>
Creates graph pointer to one or more named nodes

**Kind**: instance method of [<code>Clownface</code>](#module_lib/Clownface.Clownface)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>values</td><td><code>string</code> | <code>Array.&lt;string&gt;</code> | <code>NamedNode</code> | <code>Array.&lt;NamedNode&gt;</code> | <code>Clownface</code> | <code>Array.&lt;Clownface&gt;</code></td><td><p>URI(s) or RDF/JS NamedNode(s)</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_lib/Clownface.Clownface+in"></a>

#### clownface.in(predicates) ⇒ <code>Clownface</code>
Creates a graph pointer to nodes which are linked to the current pointer by `predicates`

**Kind**: instance method of [<code>Clownface</code>](#module_lib/Clownface.Clownface)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>predicates</td><td><code>Term</code> | <code>Array.&lt;Term&gt;</code> | <code>Clownface</code> | <code>Array.&lt;Clownface&gt;</code></td><td><p>one or more RDF/JS term identifying a property</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_lib/Clownface.Clownface+out"></a>

#### clownface.out(predicates, [options]) ⇒ <code>Clownface</code>
Creates a graph pointer to nodes which link the current pointer by `predicates`

**Kind**: instance method of [<code>Clownface</code>](#module_lib/Clownface.Clownface)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>predicates</td><td><code>Term</code> | <code>Array.&lt;Term&gt;</code> | <code>Clownface</code> | <code>Array.&lt;Clownface&gt;</code></td><td><p>one or more RDF/JS term identifying a property</p>
</td>
    </tr><tr>
    <td>[options]</td><td><code>object</code></td><td></td>
    </tr><tr>
    <td>[options.language]</td><td><code>string</code> | <code>Array.&lt;string&gt;</code> | <code>undefined</code></td><td></td>
    </tr>  </tbody>
</table>

<a name="module_lib/Clownface.Clownface+has"></a>

#### clownface.has(predicates, [objects]) ⇒ <code>Clownface</code>
Creates a graph pointer to nodes which are subjects of predicates, optionally also with specific objects

If the current context is empty, will check all potential subjects

**Kind**: instance method of [<code>Clownface</code>](#module_lib/Clownface.Clownface)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>predicates</td><td><code>Term</code> | <code>Array.&lt;Term&gt;</code> | <code>Clownface</code> | <code>Array.&lt;Clownface&gt;</code></td><td><p>RDF property identifiers</p>
</td>
    </tr><tr>
    <td>[objects]</td><td><code>*</code></td><td><p>object values to match</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_lib/Clownface.Clownface+addIn"></a>

#### clownface.addIn(predicates, subjects, [callback]) ⇒ <code>Clownface</code>
Creates a new quad(s) in the dataset where the current context is the object

**Kind**: instance method of [<code>Clownface</code>](#module_lib/Clownface.Clownface)  
**Returns**: <code>Clownface</code> - current graph pointer  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>predicates</td><td><code>Term</code> | <code>Array.&lt;Term&gt;</code> | <code>Clownface</code> | <code>Array.&lt;Clownface&gt;</code></td><td></td>
    </tr><tr>
    <td>subjects</td><td><code>NamedNode</code> | <code>Array.&lt;NamedNode&gt;</code> | <code>Clownface</code> | <code>Array.&lt;Clownface&gt;</code></td><td><p>one or more nodes to use as subjects</p>
</td>
    </tr><tr>
    <td>[callback]</td><td><code><a href="#GraphPointerCallback">GraphPointerCallback</a></code></td><td><p>called for each object, with subject pointer as parameter</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_lib/Clownface.Clownface+addOut"></a>

#### clownface.addOut(predicates, objects, [callback]) ⇒ <code>Clownface</code>
Creates a new quad(s) in the dataset where the current context is the subject

**Kind**: instance method of [<code>Clownface</code>](#module_lib/Clownface.Clownface)  
**Returns**: <code>Clownface</code> - current graph pointer  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>predicates</td><td><code>Term</code> | <code>Array.&lt;Term&gt;</code> | <code>Clownface</code> | <code>Array.&lt;Clownface&gt;</code></td><td></td>
    </tr><tr>
    <td>objects</td><td><code>*</code></td><td><p>one or more values to use for objects</p>
</td>
    </tr><tr>
    <td>[callback]</td><td><code><a href="#GraphPointerCallback">GraphPointerCallback</a></code></td><td><p>called for each subject, with object pointer as parameter</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_lib/Clownface.Clownface+addList"></a>

#### clownface.addList(predicates, items) ⇒ <code>Clownface</code>
Creates a new RDF list or lists containing the given items

**Kind**: instance method of [<code>Clownface</code>](#module_lib/Clownface.Clownface)  
**Returns**: <code>Clownface</code> - current graph pointer  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>predicates</td><td><code>Term</code> | <code>Array.&lt;Term&gt;</code> | <code>Clownface</code> | <code>Array.&lt;Clownface&gt;</code></td><td></td>
    </tr><tr>
    <td>items</td><td><code>*</code></td><td><p>one or more values to use for subjects</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_lib/Clownface.Clownface+deleteIn"></a>

#### clownface.deleteIn(predicates) ⇒ <code>Clownface</code>
Deletes all quads where the current graph pointer contexts are the objects

**Kind**: instance method of [<code>Clownface</code>](#module_lib/Clownface.Clownface)  
**Returns**: <code>Clownface</code> - current graph pointer  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>predicates</td><td><code>Term</code> | <code>Array.&lt;Term&gt;</code> | <code>Clownface</code> | <code>Array.&lt;Clownface&gt;</code></td>
    </tr>  </tbody>
</table>

<a name="module_lib/Clownface.Clownface+deleteOut"></a>

#### clownface.deleteOut(predicates) ⇒ <code>Clownface</code>
Deletes all quads where the current graph pointer contexts are the subjects

**Kind**: instance method of [<code>Clownface</code>](#module_lib/Clownface.Clownface)  
**Returns**: <code>Clownface</code> - current graph pointer  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>predicates</td><td><code>Term</code> | <code>Array.&lt;Term&gt;</code> | <code>Clownface</code> | <code>Array.&lt;Clownface&gt;</code></td>
    </tr>  </tbody>
</table>

<a name="module_lib/Clownface.Clownface+deleteList"></a>

#### clownface.deleteList(predicates) ⇒ <code>Clownface</code>
Deletes entire RDF lists where the current graph pointer is the subject

**Kind**: instance method of [<code>Clownface</code>](#module_lib/Clownface.Clownface)  
**Returns**: <code>Clownface</code> - current graph pointer  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>predicates</td><td><code>Term</code> | <code>Array.&lt;Term&gt;</code> | <code>Clownface</code> | <code>Array.&lt;Clownface&gt;</code></td>
    </tr>  </tbody>
</table>

<a name="module_lib/Context"></a>

## lib/Context
<a name="module_lib/fromPrimitive"></a>

## lib/fromPrimitive
<a name="module_lib/inArray"></a>

## lib/inArray
<a name="module_lib/languageTag"></a>

## lib/languageTag
<a name="module_lib/namespace"></a>

## lib/namespace
<a name="module_lib/term"></a>

## lib/term
<a name="module_lib/toArray"></a>

## lib/toArray
<a name="module_lib/toTermArray"></a>

## lib/toTermArray
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
    <td>pointer</td><td><code>Clownface</code></td><td><p>graph pointer to the new or existing node</p>
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
    <td>pointer</td><td><code>Clownface</code></td>
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
    <td>pointer</td><td><code>Clownface</code></td>
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
    <td>pointer</td><td><code>Clownface</code></td>
    </tr>  </tbody>
</table>

