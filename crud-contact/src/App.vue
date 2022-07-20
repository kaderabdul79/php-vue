<template>
  <div class="">
    <NavBar class="" />
    <!-- <Spinner /> -->
    <router-view class="px-5" />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Spinner from './components/Spinner.vue';
export default {
    components: { NavBar, Spinner }
}
</script>

<style>

</style>