//Delete category 
import axios from 'axios'
import BASE_URL from '../BASE_URL' 

const deleteCategory = (category, key, callback, getCategorys) => {
   //Create body
   const body = { 
      TOKEN: localStorage.getItem('TOKEN'),
      id_category: key,
      category: category
   }
   //Fetch
   axios.post(`${BASE_URL}/deleteCategory`, body)
      .then(res => {
         //Success
         if (res.data.status === 200) {
            //Set all products to uncategory
            axios.post(`${BASE_URL}/setUncategorys`, body)
               .then(res => {
                  if (res.data.status === 200) callback(getCategorys)
               })
               .catch(err => console.log(err))
         }
      })
      .catch(err => console.log(err))
}

export default deleteCategory