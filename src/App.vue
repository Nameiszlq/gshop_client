<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <Footer />
  </div>
</template>

<script>

import Footer from "./components/Footer/Footer.vue";
export default {
  name: "App",
  components: {
    Footer
  }
};
</script>

<style>
</style>
