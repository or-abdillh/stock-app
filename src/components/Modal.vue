<template>
   <section :class="isShowModal ? 'block' : 'hidden'" style="z-index: 99999" class="fixed duration-300 bg-gray-800 bg-opacity-50 inset-0">
      <div class="show-from-bottom bg-gray-100 w-8/12 mx-auto mt-24 rounded-xl shadow px-6 py-4">
         <h1 class="text-xl mb-2 text-prussian-blue">Are you sure ?</h1>
         <p class="text-prussian-blue">Click 'next' to continue</p>
         <div class="flex mt-5 gap-3">
            <span class="btn-active-label bg-prussian-blue duration-300 text-center rounded text-gray-100 w-4/12 py-1">Next</span>
            <span @click="btnCloseModal()" class="btn-active-label duration-300 py-1">Close</span>
         </div>
      </div>
   </section>
</template>

<script setup>
   
   import { useStore } from 'vuex'
   import { computed } from 'vue'
   
   const store = useStore()
   const emits = defineEmits(['closeModal'])
   
   //Get parameter for delete record
   const tableName = computed(() => {
      return store.state.deleteModalValue.tableName
   })
   const primaryKey = computed(() => {
      return store.state.deleteModalValue.primaryKey
   })
   
   defineProps({
      isShowModal: {
         default: false,
         type: Boolean
      }
   })
   
   const btnCloseModal = () => {
      
      let obj = {
         tableName: '',
         primaryKey: ''
      }
      
      store.commit('setDeleteModalValue', obj)
      
      setTimeout(() => {
         emits('closeModal')
      }, 500)
   }
   
</script>