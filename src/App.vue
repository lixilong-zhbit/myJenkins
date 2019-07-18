<template>
  <div id="app">
    <myMenu></myMenu>
    <router-view></router-view> 
  </div>
</template>

<script>
import myMenu from '@/components/menu.vue'
export default {
  name: 'App',
  components:{ myMenu }
}
</script>

<style>
 body{
   margin: 0
 }
</style>
