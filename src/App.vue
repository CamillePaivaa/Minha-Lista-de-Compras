<template>
  <div v-if="!['/', '/criar-conta'].includes($route.path)">
    <HeaderPrincipal />
  </div>

  <router-view />
</template>

<script>
import HeaderPrincipal from "./views/HeaderPrincipal.vue";

export default {
  data() {
    return {};
  },
  components: {
    HeaderPrincipal,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
