<template>
   <section id="category-bar" class="s-container">
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
   
   @import "../style/reset.css";
   @import "../style/var.css";
   @import "../style/components/container.css";
   
   #category-bar .active {
      @apply text-gray-100 font-semibold;
      background: var(--prussian-blue)!important;
   }
   
   #category-bar .label {
      @apply bg-gray-100 px-8 text-center rounded-xl border border-gray-600 py-2;
   }
   
</style>