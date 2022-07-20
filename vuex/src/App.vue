<template>
  <div>
    <NavBar/>
    <router-view></router-view>
  </div>
</template>

<script>
import HomeView from './views/HomeView.vue';
import NavBar from './components/NavBar.vue';
export default {
    components: { HomeView, NavBar }
}
</script>

<style>

</style>