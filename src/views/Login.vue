<template>
   <section class="s-container login">
      <div class="logo-wrapper">
         <img class="show-slide" src="/icons/icon-144x144.png" alt="logo-stock-app" width="35" />
         <strong class="show-slide">STOCK</strong>
      </div>
      
      <div class="wellcome-wrapper show-slide">
         <p class="text-prussian-blue">Please login first by entering your username and password</p>
      </div>
      
      <div class="form-wrapper">
         <div class="form-input mb-5 show-slide">
            <input v-model="formLogin.username" type="text" placeholder="Username" />
         </div>
         <div class="form-group mb-8 show-slide">
            <input v-model="formLogin.password" :type="isShowPassword ? 'text' : 'password'" placeholder="Password"/>
            <span @click="isShowPassword = !isShowPassword" class="btn-item bg-prussian-blue">
               <i :class="isShowPassword ? 'fa-eye' : 'fa-eye-slash'" class="fa"></i>
            </span>
         </div>
         <div class="btn-form show-slide">
            <button class="bg-prussian-blue" type="button" :disabled="!isFormLoginValid">
               LOGIN
               <i class="fas fa-sign-in-alt"></i>
            </button>
         </div>
      </div>
   </section>
</template>

<script setup >
   
   import { ref, reactive, computed } from 'vue'
   
   const isShowPassword = ref(false)
   
   const formLogin = reactive({
      username: '',
      password: ''
   })
   
   const isFormLoginValid = computed(() => {
      let self = formLogin
      if ( self.username === '' || self.password === '' ) return false
      else return true
   })
   
</script>

<style>
   
   @import "../style/views/login-view.css";
   @import "../style/components/container.css";
   @import "../style/components/form.css";
   @import "../style/animation.css";
   @import "../style/var.css";
   
</style>