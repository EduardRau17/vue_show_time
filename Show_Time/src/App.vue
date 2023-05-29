<script setup>
import { RouterView } from 'vue-router'
import Show_time_header from './components/show_time_header.vue';
</script>

<template>
  <Show_time_header/>
  <RouterView />
</template>

<style lang = "scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap');
*{
  font-family: "Rubik", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app{
  background-color: rgb(12, 2, 21);
}

.container {
  
  max-width: 1100px;
  margin: 0 auto;
}
</style>
