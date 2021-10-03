<template>
   <section style="z-index: 999" class="fixed bg-prussian-blue flex top-0 left-0 right-0">
      <div class="s-container lg:w-5/12 md:w-7/12 md:mx-auto pb-5 flex items-center">
         <div @click="btnBackNav()" class="btn-active-label duration-300 text-gray-100 flex items-center text-xl">
            <i class="fa fa-chevron-left mr-3" ></i>
            <p>Back</p>
         </div>
         <slot name="title-page"></slot>
      </div>
   </section>
</template>

<style>
   
   .nav-title {
      @apply text-xl font-medium text-gray-100 absolute left-1/2;
      transform: translateX(-50%);
   }
   
</style>

<script setup>
   
   import { useRouter } from 'vue-router'
   
   const router = useRouter()
   const btnBackNav = () => {
      setTimeout(() => {
         router.go(-1)
      }, 500)
   }
   
</script>