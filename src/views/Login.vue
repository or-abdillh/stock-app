<template>
   <section class="s-container login">
      <div class="logo-wrapper">
         <img class="show-slide" src="/icons/icon-144x144.png" alt="logo-stock-app" width="35" />
         <strong class="show-slide">STOCK</strong>
      </div>
      
      <div class="wellcome-wrapper show-slide">
         <p class="text-prussian-blue text-2xl">
            Manage your inventory with easy way 👏
         </p>
      </div>
      
      <!-- alert -->
      <div v-if="isFailedLogin" class="px-2 py-3 bg-red-300 mb-4 rounded-xl text-gray-50">
         <p>Login failed, username or password is wrong !!</p>
      </div>
      
      <div class="form-wrapper">
         <div class="form-input mb-5 show-slide">
            <input v-model="formLogin.username" type="text" placeholder="Username" />
         </div>
         <div class="form-group mb-8 show-slide">
            <input class="mr-3" v-model="formLogin.password" :type="isShowPassword ? 'text' : 'password'" placeholder="Password"/>
            <span @click="isShowPassword = !isShowPassword" class="btn-item btn-active-icon  bg-prussian-blue">
               <i :class="isShowPassword ? 'fa-eye' : 'fa-eye-slash'" class="fa"></i>
            </span>
         </div>
         <div class="btn-form show-slide">
            <button @click="btnLogin()" class="bg-prussian-blue flex justify-center items-center" type="button" :disabled="!isFormLoginValid">
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
      </div>
   </section>
</template>

<script setup >
   
   import { ref, reactive, computed, onMounted, onUpdated } from 'vue'
   import login from '../api/account/login.js'
   import cookie from 'js-cookie'
   import router from '../router'
   
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
         const TOKEN = res.results
         //Save token into local storage
         localStorage.setItem('TOKEN', TOKEN)
         //
         console.log( 'new token :' + TOKEN)
         setTimeout(() => {
            router.push({ path: '/' })
         }, 1500)
         //router.push({ path: '/' })
      } else {
         setTimeout(() => {
            console.log('auth failed')
            isFailedLogin.value = true
            isLoad.value = false
         }, 500)
      }
   }
   
   //Btn login
   const btnLogin = () => {
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