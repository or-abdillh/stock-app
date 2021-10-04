<template>
	<HeaderHome></HeaderHome>
	<SearchBar></SearchBar>
	<Menu></Menu>
	<CategoryBar></CategoryBar>
	<Card v-on:btn-delete-item="showModalDelete = !showModalDelete" ></Card>
	<Modal v-on:closeModal="showModalDelete = !showModalDelete" :is-show-modal="showModalDelete" actions="deleteItems"></Modal>
</template>

<style scoped>
   
</style>

<script setup>
   
   import HeaderHome from '../components/HeaderHome.vue'
   import SearchBar from '../components/SearchBar.vue'
   import CategoryBar from '../components/CategoryBar.vue'
   import Menu from '../components/Menu.vue'
   import Card from '../components/Card.vue'
   import Modal from '../components/Modal.vue'
   import { useStore } from 'vuex'
   import { ref} from 'vue'
   
   const store = useStore()
   
   const showModalDelete = ref(false)
   
</script>
