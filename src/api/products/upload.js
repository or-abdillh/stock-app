//Upload img product to server
import BASE_URL from '../BASE_URL.js'
import axios from 'axios'

const upload = file => {
   //upload to server
   axios.post(`${BASE_URL}/upload`, file)
      .then(res => {
         console.log(res.data)
      })
      .catch(err => {
         console.log(err)
      })
}

export default upload