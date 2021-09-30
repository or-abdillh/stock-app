<template>
   <section class="s-container login">
      <div class="logo-wrapper">
         <img src="/icons/icon-144x144.png" alt="logo-stock-app" width="35" />
         <strong>STOCK</strong>
      </div>
      
      <div class="wellcome-wrapper">
         <p>Please login first before use our services</p>
      </div>
      
      <div class="form-wrapper">
         <div class="form-input mb-5">
            <input type="text" placeholder="Username" />
         </div>
         <div class="form-group mb-8">
            <input type="password" placeholder="Password"/>
            <span class="btn-item">
               <i class="fa fa-eye"></i>
            </span>
         </div>
         <div class="btn-form">
            <button type="button mr-2">
               LOGIN
               <i class="fas fa-sign-in-alt"></i>
            </button>
         </div>
      </div>
   </section>
</template>

<script setup >
   
   
   
</script>

<style>
   
   @import "../style/views/login-view.css";
   @import "../style/components/container.css";
   @import "../style/components/form.css";
   @import "../style/components/heading.css";
   
</style>