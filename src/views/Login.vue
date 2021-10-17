<template>
   <section class="s-container login">
      <div class="logo-wrapper mt-16">
         <img class="show-slide" src="/icons/icon-144x144.png" alt="logo-stock-app" width="35" />
         <strong class="show-slide">STOCK</strong>
      </div>
      
      <div class="wellcome-wrapper show-slide">
         <p class="text-prussian-blue text-2xl">
            Manage your inventory with easy way 👏
         </p>
      </div>
      
      <!-- Form -->
      <form v-on:submit.prevent="submitForm()" class="form-wrapper">
         <!-- username -->
         <div class="form-input mb-5 show-slide">
            <input v-model="formLogin.username" type="text" placeholder="Username" />
         </div>
         
         <!-- password -->
         <div class="form-group mb-8 show-slide">
            <input class="mr-3" v-model="formLogin.password" :type="isShowPassword ? 'text' : 'password'" placeholder="Password"/>
            <span @click="isShowPassword = !isShowPassword" class="btn-item btn-active-icon  bg-prussian-blue">
               <i :class="isShowPassword ? 'fa-eye' : 'fa-eye-slash'" class="fa"></i>
            </span>
         </div>
         
         <div class="btn-form show-slide">
            <button class="bg-prussian-blue flex justify-center items-center" type="submit" :disabled="!isFormLoginValid">
               <p class="mr-2">LOGIN</p>
               <template v-if="!isLoad && !loadSuccess">
                  <i class="fas fa-sign-in-alt"></i>
               </template>
               <template v-else-if="isLoad && !loadSuccess">
                  <i class="spinner fas fa-spinner"></i>
               </template>
               <template v-else>
                  <i class="fa fa-check"></i>
               </template>
            </button>
         </div>
      </form>
      <!-- alert -->
      <div v-if="isFailedLogin" class="px-3 py-2 bg-gray-200 mt-4 rounded-xl text-gray-800">
         <p>Login failed, username or password is wrong !!</p>
      </div>
      
   </section>
</template>

<script setup >
   
   import { ref, reactive, computed } from 'vue'
   import { useStore } from 'vuex'
   import login from '../api/account/login.js'
   import router from '../router'
   
   //Init store
   const store = useStore()
   
   //Load animated
   const isLoad = ref(false)
   const loadSuccess = ref(false)
   
   //Btn show password
   const isShowPassword = ref(false)
   
   //V Model
   const formLogin = reactive({
      username: '',
      password: ''
   })
   
   //Validation handler
   const isFormLoginValid = computed(() => {
      let self = formLogin
      if ( self.username === '' || self.password === '' ) return false
      else return true
   })
   
   //Show alert if failed
   const isFailedLogin = ref(false)
   
   //Login handler
   const callback = res => {
      //animated
      isLoad.value = true
      //If success response
      if ( res.status === 200) {
         //Get TOKEN from response
         const TOKEN = res.results.TOKEN
         
         //Save token into localStorage
         localStorage.setItem('TOKEN', TOKEN)
         
         setTimeout(() => {
            router.push({ path: '/' })
         }, 1500)
         //router.push({ path: '/' })
      } else {
         setTimeout(() => {
            isFailedLogin.value = true
            isLoad.value = false
         }, 500)
      }
   }
   
   //Submit
   const submitForm = () => {
      setTimeout(() => {
         login(formLogin, callback)
      }, 500)
   }
</script>

<style>
   
   @import "../style/views/login-view.css";
   @import "../style/components/container.css";
   @import "../style/components/form.css";
   @import "../style/animation.css";
   @import "../style/var.css";
   
</style>