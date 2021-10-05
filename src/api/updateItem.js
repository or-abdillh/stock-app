//Handler for logout action

let cb = (isLoad, loadSuccess, form) => {
   setTimeout(() => {
      loadSuccess.value = true
      
      setTimeout(() => {
         loadSuccess.value = false
         isLoad.value = false
      }, 500)
   }, 1500)
}
export default cb