import { createStore } from 'vuex'

const Store = {
	state() {
		return {
			userName: 'Sandhika Galih'
		}
	},
	getters: {
		getUserName( state ){
			return state.userName
		}
	},
	mutations: {
		setUserName( state, payload ){
			state.userName = payload
		}
	}
}

export default Store
