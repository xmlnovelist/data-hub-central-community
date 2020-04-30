'use strict'

const ents = require('/entities.sjs');
const merging = require('/com.marklogic.smart-mastering/merging.xqy')

var uri;

let doc = cts.doc(uri).toObject()
let uris = doc.envelope.headers.merges.map(m => m['document-uri'])

xdmp.invokeFunction(() => {
	declareUpdate();
	merging.rollbackMerge(uri)
})

let result = null
xdmp.invokeFunction(() => {
	// xdmp.sleep(5000)
	result = ents.getEntities(uris)
})

result

