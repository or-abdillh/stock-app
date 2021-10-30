//create new product

import axios from 'axios'
import BASE_URL from '../BASE_URL.js'

const createProduct = (body, success) => {
   //Create fetch
   axios.post(`${BASE_URL}/createProduct`, body , {
      headers: {
         token: body.TOKEN  
      }})
      .then(res => {
         success(res)
      })
      .catch(err => {
         console.log(err)
      })
}

export default createProduct