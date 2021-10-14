<template>
   <section id="menu" class="show-slide s-container mb-6">
      <div @click="btnNewProduc()" class="btn-active-icon label-wrapper mb-4">
         <i class="text-prussian-blue fa fa-plus text-2xl"></i>
         <p class="text-xl">New product</p>
      </div>
      <div @click="btnManageCategory()" class="btn-active-icon label-wrapper">
         <i class="text-prussian-blue fas fa-tasks text-2xl"></i>
         <p class="text-xl">Manage category</p>
      </div>
   </section>
   <hr />
</template>

<script setup>
   
   import { useRouter } from 'vue-router'
   
   const router = useRouter()
   
   //Handler for new item menu
   const btnNewProduc = () => {
      setTimeout(() => {
         router.push({ name: 'new' })
      }, 500)
   }
   
   //Handler for manage category menu
   const btnManageCategory = () => {
      setTimeout(() => {
         router.push({ name: 'category' })
      }, 500)
   }
   
</script>

<style>
   
   #menu .label {
      @apply flex items-center justify-center w-2/12 text-gray-100 px-3 py-4 rounded-xl;
   }
   
   #menu .label-wrapper {
      @apply flex items-center gap-3 duration-300;
   }
   
</style>