<template>
   <section id="card" class="s-container">
      <div class="mt-3 text-xl flex justify-between items-center">
         <p class="font-medium">Items by 'All'</p>
         <i class="fa fa-chevron-down"></i>
      </div>
      <div class="w-full flex flex-wrap justify-between gap-1 mt-4">
         <template v-for="card in 8" :key="card">
            <div class="show-slide overflow-hidden rounded-xl mb-3 border border-gray-300 shadow" style="max-width: 48%">
               <img class="w-full" src="/product.jpg" alt="product" />
               <div class="py-3 px-3 mb-3">
                  <strong>Name product</strong>
                  <div class="flex mt-2">
                     <span>
                        <i class="fas fa-dollar-sign"></i>
                        <small>25000</small>
                     </span>
                     <span>
                        <i class="fas fa-cubes ml-3"></i>
                        <small>25pcs</small>
                     </span>
                  </div>
                  <div class="mt-4 flex justify-between">
                     <span class="btn-active-label duration-300 block w-8/12 rounded bg-prussian-blue text-center text-sm py-1 text-gray-100">Update</span>
                     <span class="btn-active-icon duration-300 block w-3/12 rounded bg-gray-500 text-gray-100 flex justify-center items-center">
                        <i class="fa fa-trash text-sm"></i>
                     </span>
                  </div>
               </div>
            </div>
         </template>
      </div>
   </section>
</template>

<style>
   
   @import "../style/reset.css";
   @import "../style/var.css";
   @import "../style/components/container.css";
   @import "../style/animation.css";
   
</style>