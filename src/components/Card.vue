<template>
   <section id="card" class="s-container">
      <!-- Section title -->
      <div class="mt-3 text-xl flex justify-between items-center">
         <p class="font-medium">Items by 'All'</p>
         <i class="fa fa-chevron-down"></i>
      </div>
      <!-- Card wrapper -->
      <div class="card-wrapper">
         <template v-for="(card, index) in cards" :key="index">
            <div class="card flex flex-wrap flex-column flex-stretch show-slide">
               <img class="w-full" :src="card.image_product" :alt="card.image_product" />
               <div class="pt-2 self-end pb-6 px-3 bg-white">
                  <strong>{{ card.name_product }}</strong>
                  <div class="flex mt-2">
                     <span>
                        <i class="mr-1 fas fa-dollar-sign"></i>
                        <small>{{ card.price_product }}</small>
                     </span>
                     <span>
                        <i class="mr-1 fas fa-cubes ml-3"></i>
                        <small>{{ card.stock_product }}{{ card.stock_unit }}</small>
                     </span>
                  </div>
                  <div class="mt-4 w-full flex justify-between">
                     <span @click="btnUpdateItem()" class="btn-active-label duration-300 block w-8/12 rounded bg-prussian-blue text-center text-sm py-1 text-gray-100">Update</span>
                     <span @click="btnDeleteItem('table', 'id')" class="btn-active-icon duration-300 block w-3/12 rounded bg-gray-500 text-gray-100 flex justify-center items-center">
                        <i class="fa fa-trash text-sm"></i>
                     </span>
                  </div>
               </div>
            </div>
         </template>
      </div>
   </section>
</template>

<style scoped>
   
   @import "../style/components/card.css"
   
</style>

<script setup>
   
   import { reactive } from 'vue'
   import { useStore } from 'vuex'
   import { useRouter } from 'vue-router'
   
   //The props
   defineProps({
      cards: {
         type: Array,
         default: []
      }
   })
   
   //init
   const store = useStore()
   const router = useRouter()
   const emits = defineEmits(['btnDeleteItem'])
   
   //Save data about table name and primary key
   const deleteModalObj = reactive({
      tableName: '',
      primaryKey: ''
   })
   
   //Handler for button update
   const btnUpdateItem = () => {
      //Push router to update views
      setTimeout(() => {
         router.push({ name: 'update' })
      }, 500)
   }
   
   //Handler for button delete
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