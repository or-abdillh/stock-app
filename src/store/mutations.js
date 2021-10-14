const mutations = {
   
   setFullname (state, payload) {
		state.fullname = payload
	},
	setProducts (state, payload) {
	   state.products = payload
	},
	setDeleteProduct (state, payload) {
	   state.deleteProduct.id_product = payload.id_product
	   state.deleteProduct.image_product = payload.image_product
	},
	setUpdateProduct (state, payload) {
	  const body = state.updateProduct
	  //Binding data
	  body.id_product = payload.id_product
	  body.name_product = payload.name_product
	  body.price_product = payload.price_product
	  body.stock_product = payload.stock_product
	  body.category_product = payload.category_product
	  body.image_product = payload.image_product
	  body.stock_unit = payload.stock_unit
	},
	resetDeleteModalValue (state) {
	   let self = state.deleteModalValue
	   self.tableName = ''
	   self.primaryKey = ''
	}
}

export default mutations