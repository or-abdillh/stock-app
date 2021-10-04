<template>
   <section :class="showPrompt ? 'block' : 'hidden'" class="modal-layer">
      <div class="show-from-bottom modal-wrapper">
         <h1 class="modal-title">
            Change your password
         </h1>
         <div>
            <input v-model="form.oldPassword" class="p-3 mt-2 rounded-xl border border-gray-400 mb-2 w-full" type="password" placeholder="Old password" />
            <input v-model="form.newPassword" class="p-3 mt-2 rounded-xl border border-gray-400 mb-2 w-full" type="password" placeholder="New password" />
            <input v-model="form.confirmNew" class="p-3 mt-2 rounded-xl border border-gray-400 w-full" type="password" placeholder="Confirm New password" />
         </div>
         <div class="flex mt-5 gap-3">
            <!-- Modal actions -->
            <button :disabled="isValid.length > 0 > 0" data-role="change" @click="btnNextPrompt()" class="btn-active-label bg-prussian-blue duration-300 text-center rounded text-gray-100 w-5/12  px-2 py-1">
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
   
   import { ref, reactive, watch } from 'vue'
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
   const isValid = ref([false])
   
   //V model
   const form = reactive({
      oldPassword: '',
      newPassword: '',
      confirmNew: ''
   })
   
   watch(form, () => {
      //Validation system
      isValid.value = Object.values(form).filter(val => val === '')
   })
   
   //Handler for next prompt
   const btnNextPrompt = () => {
      const cb = () => alert('ok')
      buttonNextModal(cb, isLoad, loadSuccess, emits, 'closePrompt')
      setTimeout(() => {
         //newName.value = ''
      }, 2000)
   }
   
   //Handler for close prompt
   const btnClosePrompt = () => {
      setTimeout(() => {
         
         emits('closePrompt')
      }, 500)
   }
   
</script>