//Handler for deleteItem action

let cb = (isLoad, loadSuccess, emits, event) => {
   setTimeout(() => {
      loadSuccess.value = true
      
      setTimeout(() => {
         emits(event)
         loadSuccess.value = false
         isLoad.value = false
      }, 500)
   }, 1500)
}
export default cb