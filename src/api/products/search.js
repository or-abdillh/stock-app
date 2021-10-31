//Get all products by keyword and category
import BASE_URL from '../BASE_URL.js'
import axios from 'axios'

const searchProducts = (body, callback) => {
   
   //Create headers
   const headers = { headers: { token: body.TOKEN } }
      
   axios.get(`${BASE_URL}/search/${body.keyword}/${body.category_product}`, headers)
      .then(res => {
         //Success
         if (res.data.status === 200) callback(true, res.data)
      })
      .catch(err => console.log(err))
}

export default searchProducts