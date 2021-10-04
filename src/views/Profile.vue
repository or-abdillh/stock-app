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
            <!-- Info box wrapper -->
            <div class="show-slide flex justify-between mt-2 w-full mx-auto">
               <!-- Items info -->
               <div class="box-info">
                  <strong>155</strong>
                  <p>Items</p>
               </div>
               <!-- Categorys info -->
               <div class="box-info">
                  <strong>12</strong>
                  <p>Categorys</p>
               </div>
            </div>
            
            <div class="mt-10">
               <!-- Button change name -->
               <div @click="btnPromptChangeName()" class="btn-active-label mb-3 duration-300 flex items-center gap-3">
                  <span class="label bg-prussian-blue">
                     <i class="fas fa-user-edit"></i>
                  </span>
                  <p class="text-xl">Change name</p>
               </div>
               <!-- Button change password -->
               <div @click="btnPromptChangePassword()" class="btn-active-label mb-3 duration-300 flex items-center gap-3">
                  <span class="label bg-prussian-blue">
                     <i class="fas fa-edit"></i>
                  </span>
                  <p class="text-xl">Change password</p>
               </div>
               <!-- Button Log out -->
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
   <!-- Modal for change name or change password -->
   <PromptChangeName v-on:close-prompt="btnPromptChangeName()" :show-prompt="showPromptChangeName" ></PromptChangeName>
   <PromptChangePassword v-on:close-prompt="btnPromptChangePassword" :show-prompt="showPromptChangePassword" ></PromptChangePassword>
   <Modal :is-show-modal="showModalLogout" v-on:closeModal="showModalLogout = !showModalLogout" actions="logout"></Modal>
</template>

<style>
   
   @import "../style/views/profile-view.css"
   
</style>

<script setup>
   
   import Navbar from '../components/Navbar.vue'
   import PromptChangeName from '../components/PromptChangeName.vue'
   import PromptChangePassword from '../components/PromptChangePassword.vue'
   import Modal from '../components/Modal.vue'
   import { useRouter } from 'vue-router'
   import { ref } from 'vue'
   
   const router = useRouter()
   
   //Handler for log out button
   const showModalLogout = ref(false) 
   const btnLogout = () => {
      setTimeout(() => {
         showModalLogout.value =!showModalLogout.value
      }, 500)
   }
   
   //Handler for change name button
   const btnPromptChangeName = () => {
      setTimeout(() => {
         showPromptChangeName.value = !showPromptChangeName.value
      }, 300)
   }
   
   //Handler for show prompt change name
   const showPromptChangeName = ref(false)
   
   //Handler for show prompt change password
   const showPromptChangePassword = ref(false)
   
   //Handler for change name button
   const btnPromptChangePassword = () => {
      setTimeout(() => {
         showPromptChangePassword.value = !showPromptChangePassword.value
      }, 300)
   }
   
</script>