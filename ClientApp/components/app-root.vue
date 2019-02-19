<template>
  <div id="app">
    <nav-menu params="route: route"></nav-menu>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavMenu from "./nav-menu";

export default {
  components: {
    "nav-menu": NavMenu
  },

  data() {
    return {};
  }
};
</script>

<style>
</style>
