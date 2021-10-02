const getters = {
   
   userName(state) {
      return state.userName
   },
   
   tableName(state) {
      return state.deleteModalValue.tableName
   },
   
   primaryKey(state) {
      return state.deleteModalValue.primaryKey
   }
}

export default getters