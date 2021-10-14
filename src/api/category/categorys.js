//Get all category from server
import BASE_URL from '../BASE_URL.js'
import axios from 'axios'

const categorys = callback => {
   //Get TOKEN
   const body = { TOKEN: localStorage.getItem('TOKEN') }
   
   axios.post(`${BASE_URL}/categorys`, body)
      .then(res => {
         //Success
         if ( res.data.status === 200 ) callback(true, res)
      })
      .catch(err => console.log(err))
}

export default categorys