<template>
   <section :class="isShowModal ? 'block' : 'hidden'" style="z-index: 99999" class="fixed duration-300 bg-gray-800 bg-opacity-50 inset-0">
      <div class="show-from-bottom bg-gray-100 w-9/12 md:w-5/12 mx-auto mt-24 rounded-xl shadow px-6 py-6">
         <h1 class="text-xl mb-2 text-prussian-blue">Are you sure ?</h1>
         <p class="text-prussian-blue">Click 'next' to continue</p>
         <div class="flex mt-5 gap-3">
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
            <span @click="btnCloseModal(500)" class="btn-active-label duration-300 py-1">Close</span>
         </div>
      </div>
   </section>
</template>

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