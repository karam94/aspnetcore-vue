<template>
    <div>
        <h1 class="title">Counter</h1>

        <h2 class="subtitle">This is a simple example of a Vue.js component & Vuex!</h2>

        <p>
            Current count (Vuex): <strong>{{ currentCount }}</strong>
        </p>
        <p>
            Auto count: <strong>{{ autoCount }}</strong>
        </p>

        <br/>
        <button type="button" class="button" @click="incrementCounter()">Increment</button>
        <button type="button" class="button is-primary" @click="resetCounter()">Reset</button>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex'

    export default {
      data () {
        return {
          autoCount: 0
        }
      },

      computed: {
        ...mapState({
          currentCount: state => state.counter
        })
      },

      methods: {
        ...mapActions(['setCounter']),

        incrementCounter: function () {
          var counter = this.currentCount + 1
          this.setCounter({counter: counter})
        },

        resetCounter: function () {
          this.setCounter({counter: 0})
          this.autoCount = 0
        }
      },

      created () {
        setInterval(() => {
          this.autoCount += 1
        }, 1000)
      }
    }
</script>

<style>
</style>
