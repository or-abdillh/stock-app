<template>
   <section id="category-bar" class="show-slide s-container">
      <div class="mt-3 text-xl flex justify-between items-center">
         <p class="font-medium">Category</p>
         <i class="fa fa-chevron-right"></i>
      </div>
      <div class="mt-3 mb-5 overflow-scroll flex gap-4">
         <template v-for="item in categoryArr" :key="item">
            <span @click="changeCategory(item)" :class="currentCategory === item ? 'active' : ''" class="label duration-300">
               {{ item }}
            </span>
         </template>
      </div>
   </section>
   <hr />
</template>

<script setup>
   
   import { reactive, ref } from 'vue'
   
   const categoryArr = reactive(['All', 'Shoes', 'Bags', 'Socks'])
   const currentCategory = ref('All')
   const changeCategory = name => currentCategory.value = name
   
</script>

<style>

   @import "../style/components/search-bar.css"
   
</style>