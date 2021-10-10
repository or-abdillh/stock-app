const getters = {
   
   username(state) {
      return state.username
   },
   
   tableName(state) {
      return state.deleteModalValue.tableName
   },
   
   primaryKey(state) {
      return state.deleteModalValue.primaryKey
   }
}

export default getters