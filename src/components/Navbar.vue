<template>
   <section style="z-index: 999" class="bg-prussian-blue fixed-navbar-wrapper">
      <div class="s-container dynamic-navbar-wrapper">
         <div @click="btnBackNav()" class="btn-active-label duration-300 text-gray-100 flex items-center text-xl">
            <i class="fa fa-chevron-left mr-3" ></i>
            <p>Back</p>
         </div>
         <slot name="title-page"></slot>
      </div>
   </section>
</template>

<style>
   
   @import "../style/components/navbar.css"
   
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