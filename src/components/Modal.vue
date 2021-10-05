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
   import { computed, ref } from 'vue'
   import logout from '../api/logout.js'
   import deleteItem from '../api/deleteItem.js'
   
   const store = useStore()
   const router = useRouter()
   const emits = defineEmits(['closeModal'])
   const isLoad = ref(false)
   const loadSuccess = ref(false)
   
   //This is props
   const props = defineProps({
      isShowModal: {
         default: false,
         type: Boolean
      }, 
      actions: {
         default: 'logout',
         type: String
      }
   })
   
   //Get parameter for delete record
   const tableName = computed(() => {
      return store.getters.tableName
   })
   const primaryKey = computed(() => {
      return store.getters.primaryKey
   })
   
   //Switch action
   //deleteItems, deleteCategory, logout
   //Handler for next button modal
   const btnNextModal = () => {
      
      isLoad.value = true
      switch (props.actions) {
         case 'logout':
            logout(router, isLoad, loadSuccess, emits, 'closeModal')
            break
         case 'deleteItems': 
            deleteItem(isLoad, loadSuccess, emits, 'closeModal')
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