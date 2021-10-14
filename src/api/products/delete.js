//Delete product from table products
import BASE_URL from '../BASE_URL.js'
import axios from 'axios'

const deleteProduct = (body, action) => {
   //
   axios.post(`${BASE_URL}/deleteProduct`, body)
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