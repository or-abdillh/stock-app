const getters = {
   
   fullname(state) {
      return state.fullname
   },
   products(state) {
     return state.products 
   },
   tableName(state) {
      return state.deleteModalValue.tableName
   },
   primaryKey(state) {
      return state.deleteModalValue.primaryKey
   }
}

export default getters