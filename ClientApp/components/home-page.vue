<template>
  <div class="content">
    <h1 class="title">Hello, world!</h1>
    <h2 class="subtitle">Welcome to your new single-page application, built with:</h2>
    <ul style="list-style: disc">
      <li>
        <a href="https://get.asp.net/">ASP.NET Core</a> and
        <a href="https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx">C#</a> for cross-platform server-side code
      </li>
      <li>
        <a href="https://vuejs.org/">Vue.js</a> for client-side code with
        <a href="https://vuex.vuejs.org/">Vuex</a> for state management
      </li>
      <li>
        <a href="https://webpack.js.org/">Webpack</a> for building and bundling client-side resources
      </li>
      <li>
        <a href="https://bulma.io/">Bulma</a> for layout and styling
      </li>
      <li>
        <a href="https://fontawesome.com">Font Awesome</a> (Free) for the icons
      </li>
      <li>
        <a href="api/weather/forecasts">API sample data</a> from the .NET Core controller
      </li>
    </ul>

    <p>To help you get started, we've also set up:</p>

    <ul style="list-style: disc">
      <li>
        <strong>Client-side navigation:</strong> For example, use the examples on the menu to navigate around the application.
      </li>
      <li>
        <strong>Webpack dev middleware:</strong> In development mode, there's no need to run the
        <code>webpack</code> build tool. Your client-side resources are dynamically built on demand. Updates are available as soon
        as you modify any file.
      </li>
      <li>
        <strong>Hot module replacement:</strong> In development mode, you don't even need to reload the page after
        making most changes. Within seconds of saving changes to files, your Vue.js app will be rebuilt and
        a new instance injected is into the page.
      </li>
      <li>
        <strong>Code splitting and lazy loading:</strong> Vue.js components may optionally be bundled individually and
        loaded on demand. For example, the code and template for 'Counter' is not loaded until you navigate to
        it.
      </li>
      <li>
        <strong>Efficient production builds:</strong> In production mode, development-time features are disabled,
        and the
        <code>webpack</code> build tool produces minified static CSS and JavaScript files.
      </li>
      <li>
        <strong>Vuex state management:</strong> Vue.js is already configured to use Vuex as its state management pattern for the client-side.
        This allows easy out of the box state sharing between front-end components.
      </li>
    </ul>

    <p>Things still to do:</p>

    <ul style="list-style: disc">
      <li>
        <strong>Install Vuex-Persist:</strong> This will allow the optional out of the box ability to persist your Vuex state to Cookies or LocalStorage.
      </li>
      <li>
        <strong>Have a suggestion?:</strong> Feel free to create a pull request on GitHub
        <a href="https://github.com/karam94/aspnetcore-vue/pulls">here</a>.
      </li>
    </ul>

    <p>
      This template can be found
      <a href="https://github.com/karam94/aspnetcore-vue">here</a> and has been modified by
      <a href="https://Karam.io">Karam Kabbara</a>.
      <br>The original base template can be found
      <a
        href="https://github.com/MarkPieszak/aspnetcore-Vue-starter"
      >here</a> by
      <a href="https://github.com/MarkPieszak/aspnetcore-Vue-starter">DevHelp.Online</a>.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
</style>
