<template>
  <aside class="menu">
    <p class="menu-label">Menu</p>

    <ul class="menu-list">
      <li>
        <router-link to="/">
          <i class="fab fa-vuejs"></i> ASP.NET Core with Vue.js 2
        </router-link>
      </li>

      <li>
        <router-link to="counter">
          <i class="fas fa-sort-numeric-up"></i> Counter
        </router-link>
      </li>

      <li>
        <router-link to="fetch-data">
          <i class="fas fa-wifi"></i> API
        </router-link>
      </li>
    </ul>
  </aside>
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