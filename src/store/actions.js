//Actions
import profile from '../api/account/profile.js'
import products from '../api/products/products.js'
import { computed } from 'vue'

const actions = {
   
   getProfile({ commit }) {
      //Get token
      const TOKEN = localStorage.getItem('TOKEN')
      
      const setFullname = res => {
         //Check the response
         if ( res.data.status === 200 ) {
            commit('setFullname', res.data.results[0].fullname)
         }
      }
      
      profile(TOKEN, setFullname)
   },
   
   getProducts({ commit }) {
      //Get token
      const TOKEN = localStorage.getItem('TOKEN')
      
      const setProducts = res => {
         //Check the response
         if ( res.data.status === 200 ) {
            commit('setProducts', res.data.results)
         }
      }
      
      products(TOKEN, setProducts)
   }
}

export default actions