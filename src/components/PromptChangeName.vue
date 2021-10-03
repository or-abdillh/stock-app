<template>
   <section :class="showPrompt ? 'block' : 'hidden'" class="modal-layer">
      <div class="show-from-bottom modal-wrapper">
         <h1 class="modal-title">
            Your name
         </h1>
         <input v-model="newName" class="p-3 mt-2 rounded-xl border border-gray-400" type="text" placeholder="Type here" />
         <div class="flex mt-5 gap-3">
            <!-- Modal actions -->
            <button data-role="change" :disabled="newName === ''" @click="btnNextPrompt()" class="btn-active-label bg-prussian-blue duration-300 text-center rounded text-gray-100 w-5/12  px-2 py-1">
               <template v-if="!isLoad && !loadSuccess">
                  Next
               </template>
               <template v-else-if="isLoad && !loadSuccess">
                  <i class="spinner fas fa-spinner"></i>
               </template>
               <template v-else>
                  <i class="fa fa-check"></i>
               </template>
            </button>
            <!-- Close modal button -->
            <span @click="btnClosePrompt()" class="btn-active-label duration-300 py-1">Close</span>
         </div>
      </div>
   </section>
</template>

<style scoped>
   
   @import "../style/components/modal.css";
   
</style>

<script setup>
   
   import { ref } from 'vue'
   import buttonNextModal from '../helper/buttonNextModal.js'
   
   defineProps({
      showPrompt: {
         type: Boolean,
         default: false
      }
   })
   
   const isLoad = ref(false)
   const loadSuccess = ref(false)
   const emits = defineEmits('closePrompt')
   
   //V model
   const newName = ref('')
   
   //Handler for next prompt
   const btnNextPrompt = () => {
      const cb = () => alert('ok')
      buttonNextModal(cb, isLoad, loadSuccess, emits, 'closePrompt')
      setTimeout(() => {
         newName.value = ''
      }, 2000)
   }
   
   //Handler for close prompt
   const btnClosePrompt = () => {
      setTimeout(() => {
         newName.value = ''
         emits('closePrompt')
      }, 500)
   }
   
</script>