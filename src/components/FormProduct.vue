<template>
   <section class="mt-20 s-container">
      <slot name="caption-form"></slot>
      
      <!-- alert -->
      <div v-if="isFailed" class="px-2 py-3 bg-red-300 mb-4 rounded-xl text-gray-50">
         <p>Action failed !!</p>
      </div>
      
      <!-- Form -->
      <form v-on:submit.prevent="submitForm()" class="form-wrapper mt-10" enctype="multipart/form-data">
         <!-- Image of product -->
         <div class="show-slide mb-5 flex items-end gap-5">
            <img class="preview-item" :src="previewImg" width="100" alt="product" />
            <input ref="file" class="bg-white border border-gray-400 py-3 px-4 rounded-xl" @change="showPreview" name="file" type="file"/>
         </div>
         <!-- Name of product -->
         <div class="show-slide form-input mb-5">
            <input v-model="form.name_product" type="text" placeholder="Name product" />
         </div>
         <!-- Price of product -->
         <div class="show-slide form-group mb-3 gap-3">
            <span class="btn-item bg-prussian-blue">
               <strong>Rp</strong>
            </span>
            <input v-model="form.price_product" class="w-10/12" type="number" placeholder="Price per unit" />
         </div>
         <!-- Category of product -->
         <div class="show-slide mb-3">
            <select v-model="form.category_product" class="select-form">
               <option selected="true" value="0">Chose the category</option>
               <option class="px-3" value="bags">bags</option>
            </select>
         </div>
         <!-- Stock of product -->
         <div class="show-slide form-input mb-3">
            <input v-model="form.stock_product" type="number" placeholder="Stocks" />
         </div>
         <!-- Unit per price product -->
         <div class="show-slide mb-3">
            <select v-model="form.stock_unit" class="select-form">
               <option selected="" value="0">Chose the unit</option>
               <option class="px-3" value="pcs">pcs</option>
               <option class="px-3" value="dozen">dozen</option>
               <option class="px-3" value="rims">rims</option>
               <option class="px-3" value="pack">pack</option>
            </select>
         </div>
         <!-- Form action -->
         <div class="show-slide btn-form mt-8 mb-3 text-xl">
            <button :disabled="isFormValid.length > 0" class="bg-prussian-blue" type="submit">
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
   
   import { ref, watch, reactive, computed, onMounted } from 'vue'
   import { useRoute } from 'vue-router'
   import { useStore } from 'vuex'
   import upload from '../api/products/upload.js'
   import createProduct from '../api/products/create.js'
   import update from '../api/products/update.js'
   import removeFile from '../api/products/removeFile.js'
   
   //Init router
   const route = useRoute()
   
   //Init store
   const store = useStore()
   
   //get current route name
   const currentRoute = computed(() => {
      return route.name
   })
   
   //Get state updateProduct
   const body = computed(() => {
      return store.getters.updateProduct
   })
   
   //indicator 
   const isForUpdate = ref(false)
   
   onMounted(() => {
      
      //If currentRoute === 'update' , binding form with state
      if (currentRoute.value === 'update') { 
         isForUpdate.value = true
         previewImg.value = body.value.image_product
         form.value.name_product = body.value.name_product
         form.value.price_product = body.value.price_product
         form.value.stock_product = body.value.stock_product
         form.value.image_product = body.value.image_product
         form.value.category_product = body.value.category_product
         form.value.stock_unit = body.value.stock_unit
      }
      console.log(isForUpdate.value, currentRoute.value, form.valu)
   })
   
   //Variabel for animated
   const isLoad = ref(false)
   const loadSuccess = ref(false)
   const isFailed = ref(false)
   
   //form use for create product
   const form = ref({
      name_product: '',
      price_product: null,
      stock_product: null,
      image_product: '',
      category_product: '0',
      stock_unit: '0',
      TOKEN: localStorage.getItem('TOKEN'),
   })
   
   //Form validation
   let isFormValid = ref([false])
   watch(form.value, () => {
      isFormValid.value = Object.values(form.value).filter(val => val === '' || val === null || val === '0')
   })
   
   //Get file
   let file = ref(null)
   
   //Image preview
   let previewImg = ref('/product.jpg')
   
   const showPreview = event => {
      
      form.value.image_product = 'true'
      
      //Init reader
      const reader = new FileReader()
      reader.onload = () => {
         previewImg.value = reader.result  
      }
      
      reader.readAsDataURL(event.target.files[0])
   }
   
   // Form actions 
   const submitForm = () => {
      
      isLoad.value = false
      loadSuccess.value = false
      setTimeout(() => {
         
         //Init FormData
         const formData = new FormData()
         formData.append('file', file.value.files[0])
         isLoad.value = true
         
         const successLoad = res => {
            if (res.data.status === 200) {
               setTimeout(() => {
                  loadSuccess.value = true   
               }, 500)
            } else {
               setTimeout(() => {
                  isFailed.value = true
               }, 300)
            }
         }
         
         //Create
         const product = res => {
            
            //If upload success
            if ( res.data.status === 200 ) {
               form.value.image_product = res.data.results.path
               //Create product
               createProduct(form.value, successLoad)
            }
         }
         
         //Update
         const updateProduct = res => {
            //
            if (res.data.status === 200) {
               form.value.image_product = res.data.results.path
               form.value.id_product = body.value.id_product
               update(form.value, successLoad)
               
               //Remove old file
               removeFile({
                  TOKEN: localStorage.getItem('TOKEN'),
                  image_product: body.value.image_product
               })
            }
         }
         
         //upload file
         if ( !isForUpdate.value ) upload(formData ,product)
         else {
            if ( form.value.image_product === 'true' ) {
               //If user upload new file
               upload(formData, updateProduct)
            } else {
               form.value.id_product = body.value.id_product
               update(form.value, successLoad)
            }
         }
      
      }, 500)
   }
   
</script>

<style scoped>
   
   .preview-item {
      @apply rounded-xl border border-gray-400 ;
   }
   
</style>