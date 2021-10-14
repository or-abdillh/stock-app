//Remove image product from server
import axios from 'axios'
import BASE_URL from '../BASE_URL'

const removeFile = body => {
   //
   //console.log('remove file', body, callback)
   axios.post(`${BASE_URL}/removeImage`, body)
      .then(res => {
         console.log(res)
      })
      .catch(err => {
         console.log(err)
      })
}

export default removeFile