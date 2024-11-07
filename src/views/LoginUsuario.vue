<template>
  <div class="page_container">
    <h2>Olá, Seja bem-vindo!</h2>
    <router-link to="/dashboard">
      <img class="img_cesta" src="../assets/login/cestaCompras.jpg" />
    </router-link>

    <div class="inputs_container">
      <div class="input_label">
        <label>Nome de Usuário</label>
        <input
          type="text"
          placeholder="  Usuário"
          class="input"
          v-model="usuario"
        />
      </div>
      <div class="input_label">
        <label>Senha de Acesso</label>
        <input
          type="text"
          placeholder="  Senha"
          class="input"
          v-model="senha"
        />
      </div>
      <p class="esqueci-senha">Esqueci minha senha</p>

      <div class="button_container">
        <button class="button" @click="verificarDadosAcesso">Entrar</button>
        <button class="button_criar" @click="irPaginaCriarConta">
          Criar Conta
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: "",
      senha: "",
    };
  },

  methods: {
    verificarDadosAcesso() {
      if (this.usuario === "camille" && this.senha === "123") {
        this.$router.push("/lista-produtos");
      } else {
        alert("Usuário ou senha inválidos");
      }
    },

    irPaginaCriarConta() {
      this.$router.push("/criar-conta");
    },
  },
};
</script>

<style>
.page_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
}
.img_cesta {
  width: 200px;
  height: 180px;
  padding-bottom: 10px;
}
.inputs_container {
  display: flex;
  flex-direction: column;
  gap: 25px;
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

.button_container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.button {
  width: 450px;
  height: 50px;
  border-radius: 10px;
  background-color: rgb(4, 162, 4);
  border: none;
  color: white;
  cursor: pointer;
}

.button_criar {
  width: 450px;
  height: 50px;
  border-radius: 10px;
  background-color: white;
  border: 1px solid rgb(4, 162, 4);
  color: rgb(4, 162, 4);
  cursor: pointer;
}

.esqueci-senha {
  margin-top: -15px;
  font-size: small;
  align-self: flex-end;
  cursor: pointer;
  color: rgb(4, 162, 4);
  margin-bottom: 30px;
}
</style>
