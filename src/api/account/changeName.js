//Change name
import BASE_URL from '../BASE_URL.js'
import axios from 'axios'

const changeName = (newName, callback) => {
   // create body
   const body = { new_name: newName }
   //Create headers
   const headers = { headers: { token: localStorage.getItem('TOKEN') } }
   //Fetch
   axios.post(`${BASE_URL}/changeName`, body, headers)
      .then(res => {
         //Success
         if (res.data.status === 200) callback(true)
      })
      .catch(err => console.log(err))
}

export default changeName