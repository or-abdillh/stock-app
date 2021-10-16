<template>
   <section class="show-slide s-container">
      <div class="form-wrapper">
         <div class="form-group">
         <input v-model.lazy="keyword" type="text" class="form-input mr-2" placeholder="Type your product here" />
         <span @click="btnSearch()" class="btn-active-icon duration-300 bg-prussian-blue btn-item">
            <i class="fa fa-search duration-300"></i>
         </span>
      </div>
      </div>
   </section>
</template>

<script setup>
   
   import { useStore } from 'vuex'
   import { ref } from 'vue'
   
   //Init store
   const store = useStore()
   
   //Define emits
   const emits = defineEmits(['changeKeyword'])
   
   //Keyword
   const keyword = ref('')
   
   //Search action
   const btnSearch = () => {
      //Set to store
      store.commit('setKeyword', keyword.value)
      emits('changeKeyword')
   }
   
</script>