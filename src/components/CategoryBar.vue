<template>
   <section id="category-bar" class="show-slide s-container">
      <div class="text-xl flex justify-between items-center">
         <p class="font-medium">Category</p>
         <i class="fa fa-chevron-right"></i>
      </div>
      <div class="mt-3 mb-5 overflow-scroll flex gap-4">
         <template v-for="(item, index) in categoryArr" :key="index">
            <span @click="changeCategory(item.category)" :class="currentCategory === item.category ? 'active' : ''" class="label flex justify-center items-center block duration-300">
               {{ item.category }}
            </span>
         </template>
      </div>
   </section>
   <hr />
</template>

<script setup>
   
   import { reactive, ref, onMounted, computed } from 'vue'
   import { useStore } from 'vuex'
   import categorys from '../api/category/categorys.js'
   
   //init store
   const store = useStore()
   
   //Define emits
   const emits = defineEmits(['changeCategory'])
   
   //Get categorys from server
   const categoryArr = ref('')
   onMounted(() => {
      
      const getCategory = (status, res)  => {
         if ( status ) {
            categoryArr.value = res.data.results
            categoryArr.value.unshift({ category: 'All' })
            categoryArr.value.push({ category: 'Uncategorys' })
         }
      }
      
      //Get category from server
      categorys(getCategory)
      
      //Get the currenr category
      const categoryFromState = computed(() => {
         return store.getters.currentCategory
      })
      
      currentCategory.value = categoryFromState.value
   })
   
   const currentCategory = ref('')
   
   const changeCategory = name => {
      //Set to state
      store.commit('setCurrentCategory', name)
      currentCategory.value = name
      //alert(currentCategory.value)
      emits('changeCategory')
   }
   
</script>

<style>

   @import "../style/components/search-bar.css"
   
</style>