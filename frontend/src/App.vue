<template>
  <div id="app" class="w-full mt-16 sm:mt-0 bg-gray-100">
    <Banner/>
    <div class="flex justify-center w-full">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'

export default {
  name: 'app',
  components: {
    Banner,
  },
  mounted() {
    if(localStorage.getItem('currentInitiativeTracker')) {
      this.$store.dispatch('setTrackerFromLocal', JSON.parse(localStorage.getItem('currentInitiativeTracker')));
    }
  },
}
</script>

<style>
  @tailwind base;

  @tailwind components;

  @tailwind utilities;
</style>
