<template>
   <Navbar>
      <template v-slot:title-page>
         <h1 class="nav-title">Category</h1>
      </template>
   </Navbar>
   
   <section class="mt-24 s-container">
      <p class="text-xl w-full text-prussian-blue">
         Categories are used to organize each item you have
      </p>
      
      <!-- List of categorys -->
      <div class="mt-5">
         <div class="mt-3 mb-5 text-xl flex justify-between items-center">
            <p class="font-semibold">All category</p>
            <i class="fa fa-chevron-down"></i>
         </div>
         <!-- List -->
         <template v-for="(item, index) in categoryArr" :key="index">
            <div class="flex gap-3 justify-between mb-3">
               <span class="bg-gray-300 text-prussian-blue text-xl w-10/12 px-4 rounded-xl  py-3">{{ item }}</span>
               <button class="bg-celuican w-2/12 rounded-xl text-gray-100" type="button">
                  <i class="fa fa-trash"></i>
               </button>
            </div>
         </template>
      </div>
      
      <!-- Create new category -->
      <div class="mt-10">
         <div class="mt-3 mb-5 text-xl flex justify-between items-center">
            <p class="font-semibold">Create new</p>
            <i class="fa fa-chevron-down"></i>
         </div>
         <div class="">
            <input class="bg-white px-4 w-8/12 rounded-xl border border-gray-400 py-3" type="text" placeholder="New category" />
            <button class="w-5/12 bg-celuican rounded-xl py-2 mt-3 text-gray-100 " type="button">Submit</button>
         </div>
      </div>
      
   </section>
</template>

<style>
   
   @import "../style/components/form.css"
   
</style>

<script setup>
   
   import { reactive } from 'vue'
   import Navbar from '../components/Navbar.vue'
   
   const categoryArr = reactive(['Shoes', 'Bags', 'Socks'])
   
</script>