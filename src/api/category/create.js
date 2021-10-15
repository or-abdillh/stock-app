//Create new category
import BASE_URL from '../BASE_URL.js'
import axios from 'axios'

const createCategory = (category, callback, getCategorys) => {
   //Create body
   const body = {
      TOKEN: localStorage.getItem('TOKEN'),
      category: category
   }
   //Fetch
   axios.post(`${BASE_URL}/createCategory`, body)
      .then(res => {
         //Success
         if ( res.data.status === 200 ) callback(getCategorys)
      })
      .catch(err => console.log(err))
}

export default createCategory