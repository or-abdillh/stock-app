<template>
   <section id="card" class="s-container">
      <div class="mt-3 text-xl flex justify-between items-center">
         <p class="font-medium">Items by 'All'</p>
         <i class="fa fa-chevron-down"></i>
      </div>
      <div class="w-full flex flex-wrap justify-between gap-1 mt-4">
         <template v-for="card in 8" :key="card">
            <div class="show-slide overflow-hidden rounded-xl mb-3 border border-gray-300 shadow-xl" style="max-width: 48%">
               <img class="w-full" src="/product.jpg" alt="product" />
               <div class="pt-2 pb-4 px-3 bg-white">
                  <strong>Name product</strong>
                  <div class="flex mt-2">
                     <span>
                        <i class="mr-1 fas fa-dollar-sign"></i>
                        <small>25000</small>
                     </span>
                     <span>
                        <i class="mr-1 fas fa-cubes ml-3"></i>
                        <small>25pcs</small>
                     </span>
                  </div>
                  <div class="mt-4 flex justify-between">
                     <span class="btn-active-label duration-300 block w-8/12 rounded bg-prussian-blue text-center text-sm py-1 text-gray-100">Update</span>
                     <span @click="btnDeleteItem('item', '12')" class="btn-active-icon duration-300 block w-3/12 rounded bg-gray-500 text-gray-100 flex justify-center items-center">
                        <i class="fa fa-trash text-sm"></i>
                     </span>
                  </div>
               </div>
            </div>
         </template>
      </div>
   </section>
</template>

<script setup>
   
   import { reactive } from 'vue'
   import { useStore } from 'vuex'
   
   const store = useStore()
   const emits = defineEmits(['btnDeleteItem'])
   
   const deleteModalObj = reactive({
      tableName: '',
      primaryKey: ''
   })
   
   const btnDeleteItem = (table, id) => {
      
      let self = deleteModalObj
      self.tableName = table
      self.primaryKey = id
      store.commit('setDeleteModalValue', self)
      
      setTimeout(() => {
         emits('btnDeleteItem')
      }, 500)
   }
   
</script>