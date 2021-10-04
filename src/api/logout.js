//Handler for logout action

let cb = (router, isLoad, loadSuccess, emits, event) => {
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
export default cb