//Change password
import BASE_URL from '../BASE_URL.js'
import axios from 'axios'

const changePassword = (newPassword, callback) => {
   // create body
   const body = { new_password: newPassword }
   //Create headers
   const headers = { headers: { token: localStorage.getItem('TOKEN') } }
   //Fetch
   axios.post(`${BASE_URL}/changePassword`, body, headers)
      .then(res => {
         //Success
         if (res.data.status === 200) callback(true)
         else callback(false)
      })
      .catch(err => console.log(err))
}

export default changePassword