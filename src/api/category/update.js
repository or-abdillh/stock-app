//Update category
import axios from 'axios'
import BASE_URL from '../BASE_URL' 

const updateCategory = (key, category, callback, getCategory) => {
   //Create body
   const body = {
      TOKEN: localStorage.getItem('TOKEN'),
      id_category: key,
      category: category
   }
   //Fetch
   axios.post(`${BASE_URL}/updateCategory`, body)
      .then(res => {
         //Success
         if (res.data.status === 200) callback(getCategory)
      })
      .catch(err => console.log(err))
}

export default updateCategory