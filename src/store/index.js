import { createStore } from 'vuex'

const store = createStore({
	state() {
		return {
			userName: 'Sandhika Galih'
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
		}
	}
})

export default store
