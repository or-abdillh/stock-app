//Get info profile to server
import BASE_URL from '../BASE_URL.js'
import axios from 'axios'

const profile = ( token, callback ) => {
   //Create the body
   const body = { TOKEN: token }
   axios.post(`${BASE_URL}/profile`, body)
      .then(res => {
         callback(res)
      })
      .catch(err => {
         console.log(err)
      })
}

export default profile