//Navigation Guard
import cookie from 'js-cookie'
import BASE_URL from '../api/BASE_URL.js'
import axios from 'axios'

const navGuard = router => {
   //Get the TOKEN
   const body = {
      TOKEN : cookie.get('TOKEN')   
   }
   //If token not exist
   if ( body.TOKEN === undefined ) body.TOKEN = "false" 
   
   //Fetch to server for validation the token
   axios.post(`${BASE_URL}/token`, body)
      .then(res => {
         //validation action
         if ( res.data.status === 200 ) guard(router, true)
         else guard(router, false)
      })
      .catch(err => {
         console.error(err)
      })
}

//Guard
const guard = (router, auth) => {
   
   router.beforeEach((to, from, next) => {
      if ( to.name !== 'login' && !auth ) next({ name: 'login' })
      else next()
   })
}

export default navGuard