const getters = {
   
   fullname(state) {
      return state.fullname
   },
   products(state) {
     return state.products 
   },
   deleteProduct(state) {
     return state.deleteProduct
   },
   updateProduct(state) {
     return state.updateProduct 
   },
   TOKEN(state) {
     return state.deleteProduct.TOKEN
   },
   tableName(state) {
      return state.deleteModalValue.tableName
   },
   primaryKey(state) {
      return state.deleteModalValue.primaryKey
   }
}

export default getters