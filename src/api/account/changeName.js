//Change name
import BASE_URL from '../BASE_URL.js'
import axios from 'axios'

const changeName = (newName, callback) => {
   // create body
   const body = {
      TOKEN: localStorage.getItem('TOKEN'),
      new_name: newName
   }
   //Fetch
   axios.post(`${BASE_URL}/changeName`, body)
      .then(res => {
         //Success
         if (res.data.status === 200) callback(true)
      })
      .catch(err => console.log(err))
}

export default changeName