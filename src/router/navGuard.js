//Navigation Guard
import cookie from 'js-cookie'
import BASE_URL from '../api/BASE_URL.js'
import axios from 'axios'

const navGuard = router => {
   //Get the TOKEN
   const body = {
      TOKEN : localStorage.getItem('TOKEN')
   }
   //If token not exist
   if ( body.TOKEN === undefined ) body.TOKEN = "false" 
   //Fetch to server for validation the token
   axios.post(`${BASE_URL}/token`, body)
      .then(res => {
         //validation action
         const auth = res.data.status
         router.beforeEach((to, from, next) => {
            console.log(auth, to.name)
            if ( to.name !== 'login' && auth !== 200 ) next({ name: 'login' })
            else next()
         })
      })
      .catch(err => {
         console.error(err)
      })
}

export default navGuard