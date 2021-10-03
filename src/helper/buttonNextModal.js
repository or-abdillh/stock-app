// Handler function for button next modal

const btnNextModal = (callback, isLoad, loadSuccess, emits, event) => {
   setTimeout(() => {
      isLoad.value = !isLoad.value
      //
      //callback()
      //
      setTimeout(() => {
         loadSuccess.value = true
         
         setTimeout(() => {
            emits(event)
            loadSuccess.value = false
            isLoad.value = false
         }, 500)
      }, 1500)
   }, 350)
}

export default btnNextModal