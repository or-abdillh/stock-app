//Actions
import profile from '../api/account/profile.js'

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
   }
}

export default actions