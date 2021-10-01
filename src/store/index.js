import { createStore } from 'vuex'

const store = createStore({
	state() {
		return {
			userName: 'Sandhika Galih',
			deleteModalValue: {
			   tableName: '',
			   primaryKey: ''
			}
		}
	},
	getters: {
		userName( state ){
			return state.userName
		}
	},
	mutations: {
		setUserName( state, payload ){
			state.userName = payload
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
})

export default store
