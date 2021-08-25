<template>
  <app-header />
  <router-view />
</template>

<script>
import Header from "./components/TheHeader.vue";

export default {
  components: {
    "app-header": Header,
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  transition: all 300ms;
}
</style>
