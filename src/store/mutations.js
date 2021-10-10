const mutations = {
   
   setFullname( state, payload ){
		state.fullname = payload
	},
	setDeleteModalValue( state, payload ){
	   let self = state.deleteModalValue
	   self.tableName = payload.tableName
	   self.primaryKey = payload.primaryKey
	},
	resetDeleteModalValue( state ){
	   let self = state.deleteModalValue
	   self.tableName = ''
	   self.primaryKey = ''
	}
}

export default mutations