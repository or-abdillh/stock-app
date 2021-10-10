//Handler for logout action

let logout = (router, isLoad, loadSuccess, emits, event) => {
   
   //Remove TOKEN
   localStorage.removeItem('TOKEN')
   
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