<template>
	<HeaderHome></HeaderHome>
	<SearchBar></SearchBar>
	<Menu></Menu>
	<CategoryBar></CategoryBar>
	<Card v-on:btn-delete-item="showModalDelete = !showModalDelete" ></Card>
	<Modal v-on:closeModal="showModalDelete = !showModalDelete" :is-show-modal="showModalDelete" actions="deleteItems"></Modal>
</template>

<script setup>
   
   import HeaderHome from '../components/HeaderHome.vue'
   import SearchBar from '../components/SearchBar.vue'
   import CategoryBar from '../components/CategoryBar.vue'
   import Menu from '../components/Menu.vue'
   import Card from '../components/Card.vue'
   import Modal from '../components/Modal.vue'
   import { useStore } from 'vuex'
   import { ref, onMounted } from 'vue'
   import { useRouter } from 'vue-router'
   import cookie from 'js-cookie'
   import checkToken from '../api/account/checkToken.js'
   
   const router = useRouter()
   
   //If user not authenticated
   const isAuthenticated = res => {
      
      //code response , true if === 200
      if ( res.status !== 200 ) {
         router.push({ name: 'login' });
      } else {
         router.push({ name: 'home' })
      }
   }
   
   //Validation 
   onMounted(() => {
      //get TOKEN
      const body = {
         TOKEN: cookie.get('TOKEN')
      }
      
      //IF token undefined
      if ( body.TOKEN === undefined ) body.TOKEN = 'false'
      
      checkToken(body, isAuthenticated)
   })
   
</script>