//Get all products by keyword and category
import BASE_URL from '../BASE_URL.js'
import axios from 'axios'

const searchProducts = (body, callback) => {
   
   //Create headers
   const headers = { headers: { token: body.TOKEN } }
   
   if (body.keyword === '') body.keyword = false
   //alert(`${BASE_URL}/search/${body.keyword}/${body.category_product}`)
   axios.get(`${BASE_URL}/search/${body.keyword}/${body.category_product}`, headers)
      .then(res => {
         //Success
         //alert(JSON.stringify(res.data))
         if (res.data.status === 200) callback(true, res.data)
      })
      .catch(err => console.log(err))
}

export default searchProducts