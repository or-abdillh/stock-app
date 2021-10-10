//Actions
import profile from '../api/account/profile.js'
import products from '../api/products/products.js'

const actions = {
   
   getProfile({ commit }) {
      //Get token
      let TOKEN = null
      //From local storage if exist
      if ( localStorage.getItem('TOKEN') ) {
         TOKEN = localStorage.getItem('TOKEN')
      }
      
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
      let TOKEN = null
      //From local storage if exist
      if ( localStorage.getItem('TOKEN') ) {
         TOKEN = localStorage.getItem('TOKEN')
      }
      
      const setProducts = res => {
         //Check the response
         console.log('res : ', res.data)
         if ( res.data.status === 200 ) {
            commit('setProducts', res.data.results)
         }
      }
      
      products(TOKEN, setProducts)
   }
}

export default actions