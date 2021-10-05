<template>
   <Navbar>
      <template v-slot:title-page>
         <h1 class="nav-title">New</h1>
      </template>
   </Navbar>
   
   <FormItem>
      <template v-slot:caption-form>
         <h1 class="text-xl w-full text-prussian-blue">
            You can add new product here 👏
         </h1>
      </template>
   </FormItem>
</template>

<script setup>
   
   import Navbar from '../components/Navbar.vue'
   import FormItem from '../components/FormItem.vue'
   
</script>