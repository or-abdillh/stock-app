//Update category
import axios from 'axios'
import BASE_URL from '../BASE_URL' 

const updateCategory = (data, category, callback, getCategory) => {
   //Create body
   const body = {
      id_category: data.split('-')[0],
      oldCategory: data.split('-')[1],
      category: category
   }
   
   //Create headers
   const headers = { headers: { token: localStorage.getItem('TOKEN') } }
   
   //Fetch
   axios.post(`${BASE_URL}/updateCategory`, body, headers)
      .then(res => {
         //Success
         if (res.data.status === 200) callback(getCategory)
      })
      .catch(err => console.log(err))
}

export default updateCategory