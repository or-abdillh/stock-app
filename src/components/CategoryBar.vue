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
   
   import { reactive, ref, onMounted } from 'vue'
   import categorys from '../api/category/categorys.js'
   
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
   })
   
   const currentCategory = ref('All')
   const changeCategory = name => currentCategory.value = name
   
</script>

<style>

   @import "../style/components/search-bar.css"
   
</style>