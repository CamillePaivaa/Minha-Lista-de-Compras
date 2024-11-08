<template>
  <div class="page_container">
    <h2>Olá, Seja bem-vindo!</h2>

    <img class="img_cesta" src="../assets/login/cestaCompras.jpg" />

    <div class="inputs_container">
      <div class="input_label">
        <label>Email</label>
        <input
          type="email"
          placeholder=" Email"
          class="input"
          v-model="email"
        />
      </div>
      <div class="input_label">
        <label>Senha de Acesso</label>
        <input
          type="password"
          placeholder="  Senha"
          class="input"
          v-model="senha"
        />
      </div>
      <!-- <p class="esqueci-senha">Esqueci minha senha</p> -->

      <div class="button_container">
        <button class="button" @click="login">Entrar</button>
        <button class="button_criar" @click="irPaginaCriarConta">
          Criar Conta
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { auth, db, signInWithEmailAndPassword } from "../firebase.js";
import { collection, query, where, getDocs } from "firebase/firestore";

export default {
  data() {
    return {
      email: "testevue@gmail.com",
      senha: "123456",
    };
  },

  methods: {
    async login() {
      try {
        await signInWithEmailAndPassword(auth, this.email, this.senha);

        const usersRef = collection(db, "users");
        const q = query(usersRef, where("email", "==", this.email));

        const querySnapshot = await getDocs(q);
        const usuarioDados = querySnapshot.docs[0].data();

        console.log(usuarioDados.nome);
        this.$router.push("/lista-produtos");
      } catch (error) {
        alert("Dados de acesso inválidos!");
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
