//Delete category 
import axios from 'axios'
import BASE_URL from '../BASE_URL' 

const deleteCategory = (key, callback, getCategorys) => {
   //Create body
   const body = { 
      TOKEN: localStorage.getItem('TOKEN'),
      id_category: key
   }
   //Fetch
   axios.post(`${BASE_URL}/deleteCategory`, body)
      .then(res => {
         //Success
         if (res.data.status === 200) callback(getCategorys)
      })
      .catch(err => console.log(err))
}

export default deleteCategory