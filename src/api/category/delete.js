//Delete category 
import axios from 'axios'
import BASE_URL from '../BASE_URL' 

const deleteCategory = (category, key, callback, getCategorys) => {
   //Create data options
   const data = { id_category: key }
   
   const body = {
      category,
      id_category: key
   }
   
   //Create Headers
   const headers = { token: localStorage.getItem('TOKEN') } 
   
   //Fetch
   axios.delete(`${BASE_URL}/deleteCategory`, {
      headers, data
   })
      .then(res => {
         //Success
         if (res.data.status === 200) {
            //Set all products to uncategory
            axios.post(`${BASE_URL}/setUncategorys`, body, { headers })
               .then(res => {
                  callback(getCategorys)
               })
               .catch(err => console.log(err))
         }
      })
      .catch(err => console.log(err))
}

export default deleteCategory