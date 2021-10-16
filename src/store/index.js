import { createStore } from 'vuex'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'

const store = createStore({
	state() {
		return {
			fullname: '',
			products: '',
			deleteProduct: {
			   TOKEN: localStorage.getItem('TOKEN'),
			   id_product: '',
			   image_product: ''
			},
			updateProduct: {
			  id_product: '',
			  name_product: '',
			  price_product: '',
			  stock_product: '',
			  image_product: '',
			  category_product: '',
			  stock_unit: ''
			},
			currentCategory: 'All',
			keyword: ''
		}
	},
	getters,
	mutations,
	actions
})

export default store