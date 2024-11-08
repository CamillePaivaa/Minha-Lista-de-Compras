<template>
  <div class="header">
    <ul class="opcoes_header">
      <router-link to="/">Sair</router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HeaderPrincipal",
};
</script>
<style scooped>
.header {
  height: 70px;
  background-color: rgb(4, 162, 4);
}

.opcoes_header {
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  margin-left: 20%;
  column-gap: 60px;
  width: 60%;
  height: 50px;
  margin-top: -5px;
  a {
    text-decoration: none;
    color: white;
    padding-top: 10px;
  }
}
</style>
