import { createStore } from 'vuex'
import getters from './getters.js'
import mutations from './mutations.js'

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
	getters,
	mutations
})

export default store
