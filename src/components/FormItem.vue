<template>
   <section class="mt-20 s-container">
      <slot name="caption-form"></slot>
      
      <!-- Form -->
      <form v-on:submit.prevent="submitForm()" class="form-wrapper mt-10" enctype="multipart/form-data">
         <!-- Image of product -->
         <div class="show-slide mb-5 flex items-end gap-5">
            <img class="preview-item" :src="formUpdateCopy.imgProduct" width="100" alt="product" />
            <input ref="file" class="bg-white border border-gray-400 py-3 px-4 rounded-xl" @change="getFile" name="file" type="file"/>
         </div>
         <!-- Name of product -->
         <div class="show-slide form-input mb-5">
            <input v-model="formUpdateCopy.nameProduct" type="text" placeholder="Name product" />
         </div>
         <!-- Price of product -->
         <div class="show-slide form-group mb-3 gap-3">
            <span class="btn-item bg-prussian-blue">
               <strong>Rp</strong>
            </span>
            <input v-model="formUpdateCopy.priceProduct" class="w-10/12" type="number" placeholder="Price per unit" />
         </div>
         <!-- Category of product -->
         <div class="show-slide mb-3">
            <select v-model="formUpdateCopy.category" class="select-form">
               <option selected="true" value="0">Chose the category</option>
               <option class="px-3" value="bags">bags</option>
            </select>
         </div>
         <!-- Stock of product -->
         <div class="show-slide form-input mb-3">
            <input v-model="formUpdateCopy.stockOfProduct" type="number" placeholder="Stocks" />
         </div>
         <!-- Unit per price product -->
         <div class="show-slide mb-3">
            <select v-model="formUpdateCopy.unitOfPrice" class="select-form">
               <option selected="" value="0">Chose the unit</option>
               <option class="px-3" value="pcs">pcs</option>
               <option class="px-3" value="dozen">dozen</option>
               <option class="px-3" value="rims">rims</option>
               <option class="px-3" value="pack">pack</option>
            </select>
         </div>
         <!-- Form action -->
         <div class="show-slide btn-form mt-8 mb-3 text-xl">
            <button class="bg-prussian-blue" type="submit">
               <span class="btn-active-label bg-prussian-blue duration-300 text-center rounded text-gray-100 w-5/12  px-2 py-1">
                  <template v-if="!isLoad && !loadSuccess">
                     Submit
                  </template>
                  <template v-else-if="isLoad && !loadSuccess">
                     <i class="spinner fas fa-spinner"></i>
                  </template>
                  <template v-else>
                     <i class="fa fa-check"></i>
                  </template>
            </span>
            </button>
         </div>
      </form>
   </section>
</template>

<script setup>
   
   import { ref, watch, reactive } from 'vue'
   import updateItem from '../api/updateItem.js'
   import upload from '../api/products/upload.js'
   
   //Variabel for animated
   const isLoad = ref(false)
   const loadSuccess = ref(false)
   
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
   
   //Get file
   let file = ref(null)
   
   // Form actions 
   const submitForm = () => {
      
      //Init FormData
      const formData = new FormData()
      formData.append('file', file.value.files[0])
      
      //console.log(formData,  files.value ,files.value.size)
      for (var key of formData.entries()) {
        console.log(key[0] + ', ' + key[1]);
      }
      
      upload(formData)
      /*
      setTimeout(() => {
         isLoad.value = true
         updateItem(isLoad, loadSuccess, formUpdateCopy)
      }, 500)
      */
      
   }
   
</script>

<style scoped>
   
   .preview-item {
      @apply rounded-xl border border-gray-400 ;
   }
   
</style>