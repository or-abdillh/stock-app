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
   import axios from 'axios'
   import categorys from '../api/category/categorys.js'
   import BASE_URL from '../api/BASE_URL.js'
   
   //Get categorys from server
   const categoryArr = ref('')
   onMounted(() => {
      //Get category from server
      axios.post(`${BASE_URL}/categorys`, { TOKEN: localStorage.getItem('TOKEN') })
         .then(res => {
            if (res.data.status === 200) {
               categoryArr.value = res.data.results
               categoryArr.value.unshift({ category: 'All' })
               categoryArr.value.push({ category: 'Uncategorys' })
            }
         })
         .catch(err => console.log(err))
   })
   
   const currentCategory = ref('All')
   const changeCategory = name => currentCategory.value = name
   
</script>

<style>

   @import "../style/components/search-bar.css"
   
</style>