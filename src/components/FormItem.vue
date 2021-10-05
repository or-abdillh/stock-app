<template>
   <section class="mt-20 s-container">
      <h1 class="text-xl w-10/12 text-prussian-blue">You can update information about your item here</h1>
      <div class="form-wrapper mt-10">
         <!-- Image of product -->
         <div class="mb-5 flex items-end gap-5">
            <img class="preview-item" src="/product.jpg" width="100" alt="product" />
            <input class="bg-white border border-gray-400 py-3 px-4 rounded-xl" type="file"/>
         </div>
         <!-- Name of product -->
         <div class="form-input mb-5">
            <input type="text" placeholder="Name product" />
         </div>
         <!-- Price of product -->
         <div class="form-group mb-3 gap-3">
            <span class="btn-item bg-prussian-blue">
               <strong>Rp</strong>
            </span>
            <input class="w-10/12" type="number" placeholder="Price per unit" />
         </div>
         <!-- Category of product -->
         <div class="mb-3">
            <select class="select-form">
               <option selected="" value="0">Chose the category</option>
               <option class="px-3" value="bags">bags</option>
            </select>
         </div>
         <!-- Stock of product -->
         <div class="form-input mb-3">
            <input class="" type="text" placeholder="Stocks" />
         </div>
         <!-- Unit per price product -->
         <div class="mb-3">
            <select class="select-form">
               <option selected="" value="0">Chose the unit</option>
               <option class="px-3" value="pcs">pcs</option>
            </select>
         </div>
         <div class="btn-form mt-8 mb-3 text-xl">
            <button class="bg-prussian-blue" type="button">Submit</button>
         </div>
      </div>
   </section>
</template>

<style scoped>
   
   .preview-item {
      @apply rounded-xl border border-gray-400 ;
   }
   
</style>