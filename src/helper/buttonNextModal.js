// Handler function for button next modal

const btnNextModal = (actions) => {
   setTimeout(() => {
      isLoad.value = !isLoad.value
      actions()
   }, 350)
}

export default btnNextModal