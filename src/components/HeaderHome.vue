<template>
   <section class="s-container">
      <!-- Fixed Header -->
      <div class="fixed-header-wrapper">
         <!-- Dynamic Header -->
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

   @import "../style/components/header-home.css"
   
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