//BASE_URL
import BASE_URL from '../BASE_URL.js'
//AXIOS
import axios from 'axios'

// LOGIN API HANDLER
const login = (body, callback) => {
   //create connection to server
   axios.post(`${BASE_URL}/auth`, body)
      .then(res => {
         // response handler using callback
         const data = res.data
         callback(data.status)
      })
      .catch(err => {
         console.error(err)
      }) 
}

export default login