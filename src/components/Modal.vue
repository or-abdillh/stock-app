<template>
   <!-- Layer -->
   <section :class="isShowModal ? 'block' : 'hidden'" style="z-index: 99999" class="modal-layer">
      <!-- Modal wrapper -->
      <div class="show-from-bottom modal-wrapper">
         <h1 class="modal-title text-prussian-blue">Are you sure ?</h1>
         <p class="text-prussian-blue">Click 'next' to continue</p>
         <div class="flex mt-5 gap-3">
            <!-- Modal actions -->
            <span @click="btnNextModal()" class="btn-active-label bg-prussian-blue duration-300 text-center rounded text-gray-100 w-5/12  px-2 py-1">
               <template v-if="!isLoad && !loadSuccess">
                  Next
               </template>
               <template v-else-if="isLoad && !loadSuccess">
                  <i class="spinner fas fa-spinner"></i>
               </template>
               <template v-else-if="isFailed">
                  <i class="fa fa-time"></i>
               </template>
               <template v-else>
                  <i class="fa fa-check"></i>
               </template>
            </span>
            <!-- Close modal button -->
            <span @click="btnCloseModal(500)" class="btn-active-label duration-300 py-1">Close</span>
         </div>
      </div>
   </section>
</template>

<style scoped>
   
   @import "../style/components/modal.css"
   
</style>

<script setup>
   
   import { useStore } from 'vuex'
   import { useRouter } from 'vue-router'
   import { computed, ref, watch } from 'vue'
   import logout from '../api/account/logout.js'
   import deleteProduct from '../api/products/delete.js'
   
   const store = useStore()
   const router = useRouter()
   const emits = defineEmits(['closeModal', 'reload-product'])
   const isLoad = ref(false)
   const loadSuccess = ref(false)
   const isFailed = ref(false)
   
   //This is props
   const props = defineProps({
      isShowModal: {
         default: false,
         type: Boolean
      }, 
      actions: {
         type: String
      }
   })
   
   //Get body for deleteProduct
   const bodyDeleteProduct = computed(() => {
      return store.getters.deleteProduct
   })
   
   //Switch action
   //deleteProduct, deleteCategory, logout
   //Handler for next button modal
   const btnNextModal = () => {
      
      isLoad.value = true
      switch (props.actions) {
         case 'logout':
            logout(router, isLoad, loadSuccess, emits, 'closeModal')
            break
         case 'deleteProduct': 
            
            const action = status => {
               setTimeout(() => {
                  if (status) {
                     loadSuccess.value = true
                  }
                  else isFailed.value = true
                  setTimeout(() => {
                     emits('reload-product')
                     emits('closeModal')
                     isLoad.value = false
                     loadSuccess.value = false
                     isFailed.value = false
                  }, 500)
               }, 500)
            }
            deleteProduct(bodyDeleteProduct.value, action)
            break
      }
   }
   
   //Handler for button close modal
   const btnCloseModal = () => {
      
      setTimeout(() => {
         emits('closeModal')
      }, 500)
   }
   
</script>