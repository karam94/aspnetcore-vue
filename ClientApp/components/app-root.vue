<template>
  <div id="app" style="padding: 20px">
    <div class="columns">
      <div class="column is-3">
        <nav-menu params="route: route"></nav-menu>
      </div>

      <div class="column is-9">
        <router-view></router-view>
      </div>
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
