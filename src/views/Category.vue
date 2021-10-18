<template>
   <Navbar>
      <template v-slot:title-page>
         <h1 class="nav-title">Category</h1>
      </template>
   </Navbar>
   
   <section class="show-slide mt-20 s-container">
      <p class="text-xl w-full text-prussian-blue">
         Categories are used to organize each item you have 👏
      </p>
      
      <!-- List of categorys -->
      <div class="mt-5">
         <div class="mt-3 mb-5 text-xl flex justify-between items-center">
            <p class="font-semibold">All category</p>
            <i class="fa fa-chevron-down"></i>
         </div>
         <!-- List -->
         <template v-for="(item, index) in categoryArr" :key="index">
            <div class="show-slide flex gap-3 justify-between mb-3">
               <span class="bg-gray-300 text-prussian-blue text-xl w-10/12 px-4 rounded-xl  py-3">{{ item.category }}</span>
               <button @click="btnDeleteCategory(item.category, item.id_category)" class="btn-active-icon duration-300 bg-gray-500 text-gray-100 w-2/12 rounded-xl justify-center items-center" type="button">
                  <i class="fa fa-trash"></i>
               </button>
            </div>
         </template>
         <p class="show-slide">*If you delete a category, then your products in that category will go into uncategorys</p>
      </div>
      
      <!-- Update category -->
      <div class="mt-10 show-slide">
         <div class="mt-3 mb-5 text-xl flex justify-between items-center">
            <p class="font-semibold">Update</p>
            <i class="fa fa-chevron-down"></i>
         </div>
         <div class="form-wrapper">
            <select v-model="formUpdate.oldCategory" class="select-form mb-3">
               <option value="0">Current category active</option>
               <template v-for="(item, index) in categoryArr" :key="index">
                  <option :value="item.id_category">{{ item.category }}</option>
               </template>
            </select>
            <div class="flex gap-3 justify-between">
               <input v-model="formUpdate.newCategory" class="form-input bg-gray-200 px-4 w-8/12 rounded-xl border border-gray-400 py-3" type="text" placeholder="Rename to " />
               <button @click="btnUpdateCategory" :disabled="emptyFormUpdate.length > 0" class=" btn-form w-4/12 duration-300 bg-prussian-blue rounded-xl py-2 text-gray-100 " type="button">Update</button>
            </div>
         </div>
      </div>
      
      <!-- Create new category -->
      <div class="mt-10 mb-16 show-slide">
         <div class="mt-3 mb-5 text-xl flex justify-between items-center">
            <p class="font-semibold">Create new</p>
            <i class="fa fa-chevron-down"></i>
         </div>
         <div class="form-wrapper flex gap-3 justify-between">
            <input v-model="newCategory" class="form-input bg-gray-200 px-4 w-8/12 rounded-xl border border-gray-400 py-3" type="text" placeholder="New category" />
            <button @click="btnCreateCategory()" :disabled="newCategory === ''" class="btn-active-label btn-form w-4/12 bg-prussian-blue duration-300 rounded-xl py-2 text-gray-100 " type="button">Create</button>
         </div>
      </div>
      
   </section>
</template>

<style scoped>
   
   .form-wrapper .btn-form:active {
      letter-spacing: 1.5px;
   }
   
   .form-wrapper .btn-form:disabled {
      opacity: .5;
   }
   
   .btn-active-label:active {
      transform: scale(.);
      letter-spacing: 1px;
   }
   
   .btn-active-icon:active {
      transform: scale(.85);
   }
   
</style>

<script setup>
   
   import { reactive, onMounted, ref, watch } from 'vue'
   import Navbar from '../components/Navbar.vue'
   import categorys from '../api/category/categorys.js'
   import deleteCategory from '../api/category/delete.js'
   import createCategory from '../api/category/create.js'
   import updateCategory from '../api/category/update.js'
   
   const categoryArr = ref('')
   const getCategory = (status, res)  => {
      if ( status ) {
         categoryArr.value = res.data.results
      }
   }
   
   onMounted(() => {
      //Get category from server
      categorys(getCategory)
   })
   
   //Update category
   const emptyFormUpdate = ref(['null'])
   const formUpdate = ref({
      oldCategory: '0',
      newCategory: ''
   })
   
   const btnUpdateCategory = () => {
      setTimeout(() => {
         updateCategory(formUpdate.value.oldCategory, formUpdate.value.newCategory, categorys, getCategory)
         formUpdate.value.newCategory = ''
      }, 500)
   }
   
   //Form update validation
   watch(formUpdate.value, () => {
      emptyFormUpdate.value = Object.values(formUpdate.value).filter(val => val === '0' || val === '')
   })
   
   //Form create new category
   const newCategory = ref('')
   const btnCreateCategory = () => {
      setTimeout(() => {
         createCategory(newCategory.value, categorys, getCategory)
         newCategory.value = ''
      }, 500)
   }
   
   //Button delete
   const btnDeleteCategory = (category, key) => {
      setTimeout(() => {
         deleteCategory(category, key, categorys, getCategory)
      }, 500)
   }
   
</script>