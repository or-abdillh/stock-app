//Get info profile to server
import BASE_URL from '../BASE_URL.js'
import axios from 'axios'

const profile = token => {
   //Create the body
   const body = { TOKEN: token }
   axios.post(`${BASE_URL}/profile`, body)
      .then(res => {
         console.log(res)
      })
      .catch(err => {
         console.log(err)
      })
}

export default profile