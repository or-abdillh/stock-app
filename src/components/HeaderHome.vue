<template>
   <section class="s-container">
      <div style="z-index: 999" class="fixed top-0 left-0 right-0">
         <div class="header-home-wrapper s-container">
            <div class="flex items-center">
               <img class="rounded-xl" src="/icons/icon-144x144.png" alt="logo-stock" width="40"/>
               <strong class="logo-text text-prussian-blue ml-2 text-xl font-bold">STOCK</strong>
            </div>
            <div @click="btnUserProfile()" class="btn-active-icon duration-300 bg-prussian-blue text-gray-100 flex justify-center items-center p-3 rounded-xl">
               <i class="fa fa-user"></i>
            </div>
         </div>
      </div>
      <div class="show-slide mt-20 text-2xl text-prussian-blue">
         <p>Wellcome to <strong>Stock</strong> ,</p>
         <p>Sandhika Galih</p>
      </div>
   </section>
</template>

<style>
   
   @import "../style/reset.css";
   @import "../style/var.css";
   @import "../style/components/container.css";
   @import "../style/components/heading.css";
   
   .header-home-wrapper {
      @apply flex justify-between bg-opacity-50 pb-5 w-full lg:w-5/12 md:w-7/12 md:mx-auto;
      backdrop-filter: blur(12px);
      
   }
   
</style>

<script setup>
   
   import { useRouter } from 'vue-router'
   
   //Event handler for button profile
   const router = useRouter()
   const btnUserProfile = () => {
      setTimeout(() => {
         router.push({ name: 'profile' })
      }, 350)
   }
   
</script>