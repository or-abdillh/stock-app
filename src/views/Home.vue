<template>
	<HeaderHome :username="username"></HeaderHome>
	<SearchBar></SearchBar>
	<Menu></Menu>
	<CategoryBar></CategoryBar>
	<Card v-on:btn-delete-item="showModalDelete = !showModalDelete" ></Card>
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
   const username = computed(() => {
      return store.getters.username
   })
   
   //If user not authenticated
   const isAuthenticated = res => {
      
      //code response , true if === 200
      if ( res.status !== 200 ) {
         console.log('push to login')
         router.push({ name: 'login' });
      } else {
         console.log('push to home')
         router.push({ name: 'home' })
      }
   }
   
   //Validation 
   onMounted(() => {
      //get TOKEN
      const body = {
         TOKEN: localStorage.getItem('TOKEN')
      }
      
      //IF token undefined
      if ( body.TOKEN === undefined ) body.TOKEN = 'false'
      
      checkToken(body, isAuthenticated)
   })
   
</script>