<template>
   <Navbar>
      <template v-slot:title-page>
         <h1 class="nav-title">Update</h1>
      </template>
   </Navbar>
   
   <FormItem>
      <template v-slot:caption-form>
         <h1 class="show-slide  text-xl w-full text-prussian-blue">
            You can update information 
            <br />
            about your item here 👏
         </h1>
      </template>
   </FormItem>
</template>

<script setup>
   
   import Navbar from '../components/Navbar.vue'
   import FormItem from '../components/FormItem.vue'
   
</script>