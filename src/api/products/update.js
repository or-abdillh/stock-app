import axios from 'axios'
import BASE_URL from '../BASE_URL'

const update = (body, success) => {
   //Create Headers
   const headers = { headers: { token: body.TOKEN } }
   
   axios.post(`${BASE_URL}/updateProduct`, body, headers)
      .then(res => {
         success(res)
      })
      .catch(err => {
         console.log(err)
      })
}

export default update