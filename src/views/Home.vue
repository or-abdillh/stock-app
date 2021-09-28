<template>
	<h1>Wellcome to Stock</h1>
	<pre>{{ userName }}</pre>
</template>

<script setup>
   
   import { computed } from 'vue'
   import { useStore } from 'vuex'

   const store = useStore()
   const userName = computed(() => {
      return store.getters.userName
   })
</script>
