<template>
  <div>
    <h1 class="title">Weather forecast</h1>

    <h2 class="subtitle">This component demonstrates fetching data from the server.</h2>

    <div v-if="!forecasts" class="text-center">
      <p>
        <em>Loading...</em>
      </p>
      <h1>
        <icon icon="spinner" pulse/>
      </h1>
    </div>

    <template v-if="forecasts">
      <table class="table is-fullwidth is-striped is-hoverable">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(forecast, index) in forecasts" :key="index">
            <td>{{ forecast.dateFormatted }}</td>
            <td>{{ forecast.temperatureC }}</td>
            <td>{{ forecast.temperatureF }}</td>
            <td>{{ forecast.summary }}</td>
          </tr>
        </tbody>
      </table>

      <nav class="pagination is-centered" role="navigation" aria-label="pagination">
        <a class="pagination-previous">Previous</a>
        <a class="pagination-next">Next page</a>
        <ul class="pagination-list">
          <li
            :class="'page-item' + (n == currentPage ? ' active' : '')"
            v-for="(n, index) in totalPages"
            :key="index"
          >
            <a class="pagination-link" @click="loadPage(n)">{{n}}</a>
          </li>
        </ul>
      </nav>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    totalPages: function() {
      return Math.ceil(this.total / this.pageSize);
    }
  },

  data() {
    return {
      forecasts: null,
      total: 0,
      pageSize: 5,
      currentPage: 1
    };
  },

  methods: {
    async loadPage(page) {
      // ES2017 async/await syntax via babel-plugin-transform-async-to-generator
      // TypeScript can also transpile async/await down to ES5
      this.currentPage = page;

      try {
        var from = (page - 1) * this.pageSize;
        var to = from + this.pageSize;
        let response = await this.$http.get(
          `/api/weather/forecasts?from=${from}&to=${to}`
        );
        console.log(response.data.forecasts);
        this.forecasts = response.data.forecasts;
        this.total = response.data.total;
      } catch (err) {
        window.alert(err);
        console.log(err);
      }
      // Old promise-based approach
      // this.$http
      //    .get('/api/SampleData/WeatherForecasts')
      //    .then(response => {
      //        console.log(response.data)
      //        this.forecasts = response.data
      //    })
      //    .catch((error) => console.log(error))*/
    }
  },

  async created() {
    this.loadPage(1);
  }
};
</script>

<style>
</style>
