//Get all category from server
import BASE_URL from '../BASE_URL.js'
import axios from 'axios'

const categorys = arr => {
   //Get TOKEN
   const body = { TOKEN: localStorage.getItem('TOKEN') }
   
   axios.post(`${BASE_URL}/categorys`, body)
      .then(res => {
         //Success
         console.log(res.data.results)
         if ( res.data.status === 200 ) arr = res.data.results
      })
      .catch(err => console.log(err))
}

export default categorys