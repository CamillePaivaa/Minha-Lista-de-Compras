<template>
  <div class="page_container">
    <h2>Olá, Seja bem-vindo!</h2>
    <img class="img_cesta" src="../assets/login/cestaCompras.jpg" />

    <div class="inputs_container">
      <div class="input_label">
        <label>Nome de Usuário</label>
        <input type="text" placeholder="  Usuário" class="input" />
      </div>
      <div class="input_label">
        <label>Senha de Acesso</label>
        <input type="text" placeholder="  Senha" class="input" />
      </div>
      <button class="button">Entrar</button>
    </div>
  </div>
</template>

<script></script>

<style>
.page_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
}
.img_cesta {
  width: 290px;
  height: 250px;
  padding-bottom: 10px;
}
.inputs_container {
  display: flex;
  flex-direction: column;
  gap: 35px;
}

.input_label {
  display: flex;
  flex-direction: column;
  align-items: start;
  row-gap: 15px;

  input {
    width: 450px;
    height: 40px;
    border-radius: 10px;
  }
}

.button {
  width: 450px;
  height: 40px;
  border-radius: 10px;
  background-color: rgb(4, 162, 4);
  border: none;
  color: white;
}
</style>
