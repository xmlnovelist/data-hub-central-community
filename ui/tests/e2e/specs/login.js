// https://docs.cypress.io/api/introduction/api.html

// Tests the login flow
describe('Login', () => {
	beforeEach(() => {
		cy.server()
		cy.route('/api/auth/status', {"appName":null,"authenticated":false,"username":null,"disallowUpdates":false,"appUsersOnly":false})
		cy.route({
			method: 'POST',
			url: '/api/auth/login',
			response: {},
			status: 401
		})
		cy.route('PUT', '/api/models/', {})
		cy.route('GET', '/api/models/', [])
		cy.route('/api/auth/profile', {"username":"admin","fullname":null,"emails":null})
		cy.route('/api/models/current', {"name":"Call Center Customer 360", "nodes":{"customer":{"label":"Customer", "entityName":"Customer", "type":"entity", "id":"customer", "x":-12.8333282470703, "y":98.1666717529297, "properties":[{"name":"address", "type":"String", "_propId":"a5ab6f7f-2e5f-4f61-917c-5b507d1794a0"}, {"name":"age", "type":"Integer", "_propId":"0ba86da4-36d9-4c8c-b100-013da3a02837"}, {"name":"city", "type":"String", "_propId":"1c091c89-d60c-4199-a764-deaab7dc6059"}, {"name":"customerId", "type":"String", "_propId":"10cdfb40-0947-4b1b-b94f-71375efde619"}, {"name":"email", "type":"String", "_propId":"5d07c3d1-135e-4919-9a85-ed15cb7373af"}, {"name":"estIncomeHHLD", "type":"Decimal", "_propId":"777e2895-6712-428a-8a0e-9ec2a1a2a9d2"}, {"name":"favoriteStoreType", "type":"String", "_propId":"1c64be05-ac11-4633-9ca0-93da3a8b8d1a"}, {"name":"firstName", "type":"String", "_propId":"b966273c-40e6-4187-b8ce-adf6f0ecfdf8"}, {"name":"gender", "type":"String", "_propId":"79bab1c7-d9cb-440c-b910-594bd06102f1"}, {"name":"lastName", "type":"String", "_propId":"a26af11a-dbb0-423d-9981-8280cf6f857e"}, {"name":"numberMinorsHHLD", "type":"String", "_propId":"0b911e9d-67c4-4dfc-9cb2-a66b4c3b1a73"}, {"name":"phoneNumber", "type":"String", "_propId":"556c3d6f-ac82-4383-a233-ed3108e7ae55"}, {"name":"postalCode", "type":"String", "_propId":"371a6037-093a-4392-84ed-50d7a9d77057"}, {"name":"segment", "type":"String", "_propId":"235cfd31-1c13-4032-907b-96598ea54b1e"}, {"name":"state", "type":"String", "_propId":"b36a1db2-2396-418b-8993-815f1eb783c5"}], "labelField":"firstName", "primaryKey":"customerId", "idField":"customerId"}, "order":{"label":"Order", "entityName":"Order", "type":"entity", "id":"order", "x":-80.1158301158301, "y":-100.945945945946, "properties":[{"name":"creditCardType", "type":"String", "_propId":"a3966ee5-280e-4859-8af5-3f856d256de1"}, {"name":"customerId", "type":"String", "_propId":"1f0de5c1-ab24-4726-8d09-540598c5b313"}, {"name":"orderDate", "type":"Date", "_propId":"8b573710-725c-4ddb-b929-7a04f836110f"}, {"_propId":"360c932a-3f3c-4030-b949-ae3cb1b37b69", "name":"orderId", "type":"String"}, {"name":"pricePaid", "type":"Decimal", "_propId":"df559744-1832-4675-85c4-bbf6cd9f1ff2"}, {"name":"shipDate", "type":"Date", "_propId":"f88704a5-417a-4224-b712-b2816caf876e"}, {"_propId":"2c887d74-1e1a-4768-b19d-b72aae6bff74", "name":"status", "type":"String"}], "labelField":"orderId", "primaryKey":"orderId", "idField":"orderId"}, "product":{"label":"Product", "entityName":"Product", "type":"entity", "id":"product", "x":96.7799227799228, "y":-140.042471042471, "properties":[{"name":"brandName", "type":"String", "_propId":"a5490612-1c2c-4c00-8696-6977f80e9624"}, {"name":"category", "type":"String", "_propId":"ad29499f-7a66-426a-9f31-7bc7007593ff"}, {"name":"color", "type":"String", "_propId":"3a8d7e38-bada-4c6a-a375-d8849f693395"}, {"name":"name", "type":"String", "_propId":"686f3b9a-2a42-4c1e-a0b0-9e2305436cda"}, {"name":"orderId", "type":"String", "_propId":"6b6258ad-62f4-4307-b432-d6e9142c7f91"}, {"name":"productId", "type":"String", "_propId":"d1b8a4fc-d32f-4064-bcff-d2788d52d563"}, {"name":"size", "type":"String", "_propId":"f0ffea87-3f72-4ac0-ba24-84805aa8a622"}, {"name":"sku", "type":"String", "_propId":"15a1abcd-dd68-409c-91de-dd176d5451b1"}, {"name":"texture", "type":"String", "_propId":"389e4b57-f3e3-4656-8592-5b0ec0712acb"}], "labelField":"name", "primaryKey":"productId", "idField":"productId"}, "category":{"id":"category", "x":267.16667175293, "y":-84.8333282470703, "label":"Category", "entityName":"Category", "shapeProperties":{"borderDashes":[4, 3]}, "type":"concept", "properties":[], "color":{"border":"#3cdbc0", "highlight":{"border":"#3cdbc0", "background":"#c9f5ed"}}}, "city":{"id":"city", "x":149.335907335907, "y":84.2818532818533, "label":"City", "entityName":"City", "shapeProperties":{"borderDashes":[4, 3]}, "type":"concept", "properties":[], "color":{"border":"#3cdbc0", "highlight":{"border":"#3cdbc0", "background":"#c9f5ed"}}}}, "edges":{"customer-places-order":{"id":"customer-places-order", "from":"customer", "label":"places", "to":"order", "cardinality":"1:Many", "keyFrom":"customerId", "keyTo":"customerId", "smooth":{"roundness":0.5}}, "order-has-product":{"id":"order-has-product", "from":"order", "label":"has", "to":"product", "cardinality":"1:Many", "keyFrom":"orderId", "keyTo":"orderId", "smooth":{"roundness":0.5}}, "product-hascategory-category":{"from":"product", "label":"hasCategory", "to":"category", "keyFrom":"productId", "keyTo":"category", "id":"product-hascategory-category", "smooth":{"roundness":0.5}, "dashes":[4, 3], "color":{"color":"#3cdbc0"}}, "order-placedby-customer":{"from":"order", "label":"placedBy", "to":"customer", "cardinality":"1:Many", "keyFrom":"customerId", "keyTo":"customerId", "id":"order-placedby-customer", "smooth":{"roundness":0.5}}, "customer-hascity-city":{"from":"customer", "label":"hasCity", "to":"city", "keyFrom":"customerId", "keyTo":"city", "id":"customer-hascity-city", "smooth":{"roundness":0.5}, "dashes":[4, 3], "color":{"color":"#3cdbc0"}}}, "img":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAFBklEQVRYR+2XbUxTVxjHn9tb2kJty0ugCswWRYIgDMSYmI7IlE0wccSJL6kRRoYOmDOCMoX5oU1M3RYENZsvCG5swSWImYxoIaLMYAfZWoFaRQFHBhVbxDooYOnLvcsxdCFdsdLbqMk4H+95zvn/zv88zznnYvCGN+wN54M5QKo79P9ykCRJusViiWUwGLeoOmcf71EHJZKLoRGRAvmZyhaZF41lbmrMrQMA65p1FdnXG7PPAQCBhHU6XUxeXl5qenr6ObFYPPyixXgMkM+PDSIIGm9pTEYYAGHC6My3ccwr6fCxrX9pB8Z38oPnnS/I/Hx3WlqobGRkpF6j0ayNiIi47O/vXySVSjfOBOkRwPdSK76/Ks8+BACPAMCGxFJTTzAXCANC9hRvu0+j0egESdoyNojWhS0M6q6rq9MJhULcarX68Pn8JSqV6ncAIJ1Bug24+eMa/5qKzX4paScxw9DD5X+0yS44iigHSZ/+e4/GOVxvGBwwwKnSnHfaWq4qHEB8iouLS2UyWY5HAb882nzpQEFSWklZMxQWrGECgNlR4EpPDzPEe/EAhmGB4+Mmcv8nW2IUzfV3HOPEYnFydXX1AvS9f2LkroDtq6JcJH19BpLnywIelwU4TmMDwIQzB+pb7mcoW4erMLz/m/rzzQdUqvL/xGm12riQkJB2NL5j4u+OeLbfcvtuuL3FJEmSFosN6HQcaDTMFwBGZkh0enLqqZgmee4DABh1FqM3mx4EeTEXob4JwgZsnP7vfG4DGgyjR3g89t7g4OCDer3+RwB4OlOiuzoTe/ueWFta+vBEURgsXuQPGIYh2D40zm3AFauKM5StsjaUNmii+fPjOTpd+2NXMM76Tw3cPZsTujQb9Y2NjQ1zOJxw+464DRgUmhg7pG1R2wVjY3OC1OrTKL/GZgs5Ojoaqez/8zhNEPx+X+3l/KysrOOUc3D1mrLUG9fz5dNg0GK5AGC03xizAMUEu3cIdxTuiz4siPt1+iLddpATEhlgfHjvyXSIlWtlAY21e2/5+fkIZgH3wlC3AQGA56xyOzq7W+VXLq4vKipCRUO5uQ2oUChWiUSiVkeC1cml+eGCO5OVlZUnKdNRqeKeXm3JkvDQ/Y4QCQkHFloscq5arda8VsCqqh+OZGZmFDmBYExVoOW1AiannD3Y1LDza8eKjY/PCmxv/+5pQkICplQq2VKplJBIJE5vkJdZgNs5CAA0AEBXkmG60NqUcvW1hl1xq3Z99EFT2bc5UqnUeG3Din2qxC3PD/TZNiqASAs9EtBWopcMFh6+nePNZu+fV7tN8UzTq+/YuKsbLWRl80+RxsGhES+beVCdUfhsNuckVUDkIjpuxgiCaJictDL0ej13vaI28+72fPSssuchJpQU8jnRYdmdm3LeNZOknIXjJS/jJlXA5/f55OTkBQaDsckumJhU8uHNG4U/OwKYbdbh2526gIVvMWsCAwO3vipAIAjiktlsSzOZrMDlMsFoNObzeLxjjgBWq/UmjuOirq6u01FRUbmvFPDx8Hja4KARoqOCoLtbu2/ZMmGpEwCmyWQ6wWKxUPWj96HL5oktBo1GsyE6OvoXu5pUelIkkXz62wzquP3HyiUdlZvEYXK8re320bBFwj1fHPrqs4ryw2fQ//DLALiK8YiDUyJoLq+pynX6C+kKxlm/JwHd0Xc5Zg7QpUUuAuYcnHOQqgNUx7/xOfgPkh7HOBUp2+kAAAAASUVORK5CYII="})
		cy.route('POST', '/api/mastering/notifications', 'fixture:notificationsPage1.json')
	})

	it('pass with valid credentials', () => {
		cy.route('POST', '/api/auth/login', {})
		cy.visit('/')
		cy.url().should('include', '/login')

		cy.contains('button', 'LogIn')
		cy.get('input[name=login]').type('maverick')
		cy.get('input[name=password]').type('goose')
		cy.get('button').click()
		cy.url().should('include', '/model')
	})

	it('fails with invalid credentials', () => {
		cy.visit('/')
		cy.url().should('include', '/login')
		cy.contains('button', 'LogIn')
		cy.get('input[name=login]').type('maverick')
		cy.get('input[name=password]').type('moose')
		cy.get('button').click()
		cy.contains(
			'div[class=v-alert__content]',
			'Username and/or Password Incorrect'
		)
		cy.url().should('include', '/login')
	})

	it('fails with missing credentials', () => {
		cy.visit('/')

		cy.contains('button', 'LogIn')
		cy.get('button').click()
		cy.contains(
			'div[class=v-alert__content]',
			'Username and/or Password Incorrect'
		)
		cy.url().should('include', '/login')
	})
})
