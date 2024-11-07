<template>
  <ListaProdutos />
</template>

<script>
import ListaProdutos from "./components/ListaProdutos.vue";

export default {
  name: "App",
  components: {
    ListaProdutos,
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
