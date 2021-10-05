<template>
   <section class="mt-20 s-container">
      <slot name="caption-form"></slot>
      <pre>
         {{ isFormValid }}
      </pre>
      <div class="form-wrapper mt-10">
         <!-- Image of product -->
         <div class="mb-5 flex items-end gap-5">
            <img class="preview-item" :src="formUpdateCopy.imgProduct" width="100" alt="product" />
            <input class="bg-white border border-gray-400 py-3 px-4 rounded-xl" type="file"/>
         </div>
         <!-- Name of product -->
         <div class="form-input mb-5">
            <input v-model="formUpdateCopy.nameProduct" type="text" placeholder="Name product" />
         </div>
         <!-- Price of product -->
         <div class="form-group mb-3 gap-3">
            <span class="btn-item bg-prussian-blue">
               <strong>Rp</strong>
            </span>
            <input v-model="formUpdateCopy.priceProduct" class="w-10/12" type="number" placeholder="Price per unit" />
         </div>
         <!-- Category of product -->
         <div class="mb-3">
            <select v-model="formUpdateCopy.category" class="select-form">
               <option selected="" value="0">Chose the category</option>
               <option class="px-3" value="bags">bags</option>
            </select>
         </div>
         <!-- Stock of product -->
         <div class="form-input mb-3">
            <input v-model="formUpdateCopy.stockOfProduct" type="number" placeholder="Stocks" />
         </div>
         <!-- Unit per price product -->
         <div class="mb-3">
            <select v-model="formUpdateCopy.unitOfPrice" class="select-form">
               <option selected="" value="0">Chose the unit</option>
               <option class="px-3" value="pcs">pcs</option>
               <option class="px-3" value="dozen">dozen</option>
               <option class="px-3" value="rims">rims</option>
               <option class="px-3" value="pack">pack</option>
            </select>
         </div>
         <div class="btn-form mt-8 mb-3 text-xl">
            <button :disabled="isFormValid.length > 0" class="bg-prussian-blue" type="button">Submit</button>
         </div>
      </div>
   </section>
</template>

<script setup>
   
   import { ref, watch, toRef } from 'vue'
   
   //If this form use for update product
   //Get data from props
   const props = defineProps({
      formUpdate: {
         type: Object,
         default: {
            imgProduct: '/product.jpg',
            nameProduct: null,
            priceProduct: null,
            category: '0',
            stockOfProduct: null,
            unitOfPrice: '0'
         }
      }
   })
   
   //Save information about product here
   const formUpdateCopy = ref({
      imgProduct: props.formUpdate.imgProduct,
      nameProduct: props.formUpdate.nameProduct,
      priceProduct: props.formUpdate.priceProduct,
      category: props.formUpdate.category,
      stockOfProduct: props.formUpdate.stockOfProduct,
      unitOfPrice: props.formUpdate.unitOfPrice
   })
   
   //Form validation
   let isFormValid = ref([false])
   watch(formUpdateCopy.value, () => {
      isFormValid.value = Object.values(formUpdateCopy.value).filter(val => val === '' || val === null || val === '0')
   })
   
</script>

<style scoped>
   
   .preview-item {
      @apply rounded-xl border border-gray-400 ;
   }
   
</style>