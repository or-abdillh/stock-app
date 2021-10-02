<template>
   <section class="s-container">
      <div style="z-index: 999" class="flex justify-between fixed top-0 left-0 right-0 pb-3 s-container w-full bg-white">
         <div class="flex items-center">
            <img class="rounded-xl" src="/icons/icon-144x144.png" alt="logo-stock" width="40"/>
            <strong class="logo-text text-prussian-blue ml-2 text-xl font-bold">STOCK</strong>
         </div>
         <div @click="btnUserProfile()" class="btn-active-icon duration-300 bg-prussian-blue text-gray-100 flex justify-center items-center p-3 rounded-xl">
            <i class="fa fa-user"></i>
         </div>
      </div>
      <div class="show-slide mt-16 text-2xl text-prussian-blue">
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