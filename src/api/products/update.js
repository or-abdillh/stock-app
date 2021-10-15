import axios from 'axios'
import BASE_URL from '../BASE_URL'

const update = (body, success) => {
   //
   axios.post(`${BASE_URL}/updateProduct`, body)
      .then(res => {
         success(res)
      })
      .catch(err => {
         console.log(err)
      })
}

export default update