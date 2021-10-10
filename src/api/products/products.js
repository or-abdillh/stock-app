//Get all products to server
import BASE_URL from '../BASE_URL.js'
import axios from 'axios'

const products = (token, callback) => {
   //POST 
   const body = { TOKEN: token }
   
   axios.post(`${BASE_URL}/products`, body)
      .then(res => {
         callback(res)
      })
      .catch(err => {
         console.error(err)
      })
}

export default products