<template>
  <div class="navbar-menu">
    <div class="navbar-start">
      <div class="navbar-item">
        <i class="fab fa-vuejs"></i> &nbsp; .NET Core w/ Vue.js 2 & Bulma
      </div>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">Examples</a>

        <div class="navbar-dropdown">
          <router-link class="navbar-item" to="/">
            <i class="fas fa-home"></i> &nbsp; Home
          </router-link>

          <router-link class="navbar-item" to="counter">
            <i class="fas fa-sort-numeric-up"></i> &nbsp; Counter
          </router-link>

          <router-link class="navbar-item" to="fetch-data">
            <i class="fas fa-wifi"></i> &nbsp; API
          </router-link>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">Log in</a>
        </div>
      </div>
    </div>
  </div>
  <!-- </nav> -->
</template>

<script>
import { routes } from "../router/routes";

export default {
  data() {
    return {
      routes
    };
  }
};
</script>