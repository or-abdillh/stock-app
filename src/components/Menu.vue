<template>
   <section id="menu" class="s-container mb-6">
      <div class="btn-active-icon label-wrapper mb-4">
         <span class="bg-celuican label">
            <i class="fa fa-plus"></i>
         </span>
         <p class="text-xl">New item</p>
      </div>
      <div class="btn-active-icon label-wrapper">
         <span class="bg-celuican label">
            <i class="fas fa-tasks"></i>
         </span>
         <p class="text-xl">Manage category</p>
      </div>
   </section>
   <hr />
</template>

<style>
   
   @import "../style/reset.css";
   @import "../style/var.css";
   @import "../style/components/container.css";
   @import "../style/animation.css";
   
   #menu .label {
      @apply text-gray-100 px-3 py-2 rounded-xl;
   }
   
   #menu .label-wrapper {
      @apply flex items-center gap-3 duration-300;
   }
   
</style>