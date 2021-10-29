//Get info profile to server
import BASE_URL from '../BASE_URL.js'
import axios from 'axios'

const profile = ( token, callback ) => {

   axios.get(`${BASE_URL}/profile`, {
      headers: {
         token
      }})
      .then(res => {
         callback(res)
      })
      .catch(err => {
         console.log(err)
      })
}

export default profile