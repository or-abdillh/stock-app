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
               <template v-if="!isLoad && !loadSucces">
                  Next
               </template>
               <template v-else-if="isLoad && !loadSucces">
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
   import { computed, ref } from 'vue'
   
   const store = useStore()
   const emits = defineEmits(['closeModal'])
   const isLoad = ref(false)
   const loadSucces = ref(false)
   
   //This is props
   defineProps({
      isShowModal: {
         default: false,
         type: Boolean
      }
   })
   
   //Get parameter for delete record
   const tableName = computed(() => {
      return store.getters.tableName
   })
   const primaryKey = computed(() => {
      return store.getters.primaryKey
   })
   
   //Handler for next button modal
   const btnNextModal = () => {
      setTimeout(() => {
         isLoad.value = !isLoad.value
         //Actions here
         setTimeout(() => {
            loadSucces.value = true
            
            setTimeout(() => {
               emits('closeModal')
               loadSucces.value = false
               isLoad.value = false
            }, 500)
         }, 1500)
      }, 350)
   }
   
   //Handler for button close modal
   const btnCloseModal = delay => {
      
      setTimeout(() => {
         emits('closeModal')
      }, delay)
   }
   
</script>