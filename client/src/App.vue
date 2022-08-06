<template>
  <div class="app">
    <appHeader/>
    <appBody/>
  </div>
</template>

<script>
import appHeader from '@/components/app-header/app-header.vue'
import appBody from '@/components/app-body/app-body.vue'

export default {
  name: 'App',

  components: {
    appHeader: appHeader,
    appBody: appBody
  },
}
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 10px 5vw;
}
</style>
