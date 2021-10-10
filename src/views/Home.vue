<template>
	<HeaderHome :fullname="fullname"></HeaderHome>
	<SearchBar></SearchBar>
	<Menu></Menu>
	<CategoryBar></CategoryBar>
	<Card :cards="products" v-on:btn-delete-item="showModalDelete = !showModalDelete" ></Card>
	<Modal v-on:closeModal="showModalDelete = !showModalDelete" :is-show-modal="showModalDelete" actions="deleteItems"></Modal>
</template>

<script setup>
   
   import { useStore } from 'vuex'
   import { ref, onMounted, computed } from 'vue'
   import { useRouter } from 'vue-router'
   import cookie from 'js-cookie'
   
   import checkToken from '../api/account/checkToken.js'
   import HeaderHome from '../components/HeaderHome.vue'
   import SearchBar from '../components/SearchBar.vue'
   import CategoryBar from '../components/CategoryBar.vue'
   import Menu from '../components/Menu.vue'
   import Card from '../components/Card.vue'
   import Modal from '../components/Modal.vue'
   
   //Home variabel
   const store = useStore()
   const router = useRouter()
   const showModalDelete = ref(false)
   
   //Get username
   const fullname = computed(() => {
      return store.getters.fullname
   })
   
   //Get all products
   const products = computed(() => {
      return store.getters.products
   })
   
   //If user not authenticated
   const isAuthenticated = res => {
      
      console.log(res)
      //code response , true if === 200
      if ( res.status !== 200 ) {
         console.log('not 200')
         router.push({ name: 'login' });
      } else {
         router.push({ name: 'home' })
      }
   }
   
   //Validation 
   onMounted(() => {
      //Set fullname from server
      store.dispatch('getProfile')
      
      //Get All products from server
      store.dispatch('getProducts')
      
      //The body
      const body = {
         TOKEN: null
      }
      
      console.log('on mounted home')
      
      //get TOKEN
      //From local storage if exist
      if ( localStorage.getItem('TOKEN') ) {
         body.TOKEN = localStorage.getItem('TOKEN')
      }
      
      checkToken(body, isAuthenticated)
   })
   
</script>