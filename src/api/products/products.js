//Get all products to server
import BASE_URL from '../BASE_URL.js'
import axios from 'axios'

const products = (token, callback) => {
   // Send Token in headers
   axios.get(`${BASE_URL}/products`, {
      headers: {
         token
      }})
      .then(res => {
         callback(res)
      })
      .catch(err => {
         console.error(err)
      })
}

export default products