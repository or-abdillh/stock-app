//Handler for logout action
import cookie from 'js-cookie'

let logout = (router, isLoad, loadSuccess, emits, event) => {
   
   //Remove TOKEN
   localStorage.setItem('TOKEN', 'xxx')
   
   setTimeout(() => {
      loadSuccess.value = true
      
      setTimeout(() => {
         emits(event)
         loadSuccess.value = false
         isLoad.value = false
         router.push({ name: 'login' })
      }, 500)
   }, 1500)
}
export default logout