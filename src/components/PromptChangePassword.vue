<template>
   <section :class="showPrompt ? 'block' : 'hidden'" class="modal-layer">
      <div class="show-from-bottom modal-wrapper">
         <h1 class="modal-title">
            Change your password
         </h1>
         <div>
            <input v-model="form.newPassword" class="p-3 mt-2 rounded-xl border border-gray-400 mb-2 w-full" type="password" placeholder="New password" />
            <input v-model="form.confirm" class="p-3 mt-2 rounded-xl border border-gray-400 w-full" type="password" placeholder="Confirm New password" />
         </div>
         <div class="flex mt-5 gap-3">
            <!-- Modal actions -->
            <button :disabled="!isValid" data-role="change" @click="btnNextPrompt()" class="btn-active-label bg-prussian-blue duration-300 text-center rounded text-gray-100 w-5/12  px-2 py-1">
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
   
   //Define props
   defineProps({
      showPrompt: {
         type: Boolean,
         default: false
      }
   })
   
   //Aniamted variabel
   const isLoad = ref(false)
   const loadSuccess = ref(false)
   
   //Define emits
   const emits = defineEmits('closePrompt')
   
   //Validation form
   const isValid = ref(false)
   
   //V model
   const form = reactive({
      newPassword: '',
      confirm: ''
   })
   
   watch(form, () => {
      if (form.newPassword === '' || form.confirm === '' || form.newPassword !== form.confirm) isValid.value = false
      else isValid.value = true
   })
   
   //Handler for next prompt
   const btnNextPrompt = () => {
      setTimeout(() => {
         isLoad.value = true
         setTimeout(() => {
            loadSuccess.value = true
            emits('closePrompt')
         }, 1000)
      }, 500)
   }
   
   //Handler for close prompt
   const btnClosePrompt = () => {
      setTimeout(() => {
         
         emits('closePrompt')
      }, 500)
   }
   
</script>