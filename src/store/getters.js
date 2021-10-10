const getters = {
   
   fullname(state) {
      return state.fullname
   },
   tableName(state) {
      return state.deleteModalValue.tableName
   },
   primaryKey(state) {
      return state.deleteModalValue.primaryKey
   }
}

export default getters