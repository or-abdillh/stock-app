//Get all products by keyword and category
import BASE_URL from '../BASE_URL.js'
import axios from 'axios'

const searchProducts = (body, callback) => {
   
   axios.post(`${BASE_URL}/search`, body)
      .then(res => {
         //Success
         console.log('res', res)
         if (res.data.status === 200) callback(true, res.data)
      })
      .catch(err => console.log(err))
}

export default searchProducts