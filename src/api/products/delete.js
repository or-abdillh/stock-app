//Delete product from table products
import BASE_URL from '../BASE_URL.js'
import axios from 'axios'

const deleteProduct = (body, action) => {
   //create data options 
   const data = {
      id_product: body.id_product,
      image_product: body.image_product
   }
   
   //Create Headers
   const headers = { token: body.TOKEN }
   
   axios.delete(`${BASE_URL}/deleteProduct`,{
      headers,
      data
   })
      .then(res => {
         console.log(res)
         if (res.data.status === 200) {
            action(true)
         } else action(false)
      })
      .catch(err => {
         console.log(err)
      })
}

export default deleteProduct