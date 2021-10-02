<template>
   <Navbar>
      <template v-slot:title-page>
         <h1 class="nav-title" >Profile</h1>
      </template>
   </Navbar>
   
   <section id="profile" class="mt-20 s-container">
      <div class="show-slide wallpaper">
         <div class="card-profile-wrapper">
            <div class="card-profile">
               <img class="rounded-full border border-gray-400 mx-auto" src="/avatar.jpg" alt="avatar-default" width="80">
               <p class="text-xl mt-3">Sandhika Galih</p>
            </div>
            
            <div class="show-slide flex justify-between mt-2 w-full mx-auto">
               <div class="box-info">
                  <strong>155</strong>
                  <p>Items</p>
               </div>
               <div class="box-info">
                  <strong>12</strong>
                  <p>Categorys</p>
               </div>
            </div>
            
            <div class="mt-5">
               <div class="btn-active-label mb-3 duration-300 flex items-center gap-3">
                  <span class="label bg-green-500">
                     <i class="fas fa-user-edit"></i>
                  </span>
                  <p class="text-xl">Change name</p>
               </div>
               <div @click="btnLogout()" class="btn-active-label duration-300 flex items-center gap-3">
                  <span class="label bg-red-500">
                     <i class="fas fa-sign-out-alt"></i>
                  </span>
                  <p class="text-xl">Log out</p>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<style>
   
   .wallpaper {
      @apply rounded-2xl shadow-xl w-full h-48;
      background-image: url('/wallpaper.jpeg');
   }
   
   .card-profile-wrapper {
      @apply left-2/4 w-9/12 top-16 absolute;
      transform: translateX(-50%);
   }
   
   .card-profile {
      @apply bg-gray-50 text-center border border-gray-400 w-full px-3 py-4 rounded-2xl;
   }
   
   .box-info {
      @apply rounded-2xl px-3 py-4 text-center bg-gray-50 border border-gray-400 shadow;
      min-width: 48%;
   }
   
   #profile .label {
      @apply w-2/12 text-gray-100 p-3 rounded-xl flex items-center justify-center;
   }
</style>

<script setup>
   
   import Navbar from '../components/Navbar.vue'
   import { useRouter } from 'vue-router'
   
   const router = useRouter()
   const btnLogout = () => {
      setTimeout(() => {
         router.push({ name: 'login' })
      }, 500)
   }
   
</script>