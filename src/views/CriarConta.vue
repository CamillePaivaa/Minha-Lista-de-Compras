<template>
  <div class="page_container">
    <h2>Para Criar Sua Conta, Preencha os Campos Abaixo!</h2>
    <div class="inputs_container">
      <div class="input_label">
        <label>Nome</label>
        <input type="text" placeholder="   Nome" class="input" v-model="nome" />

        <label>Email</label>
        <input
          type="email"
          placeholder="  Email"
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
      <button class="button" @click="criarConta">Criar Conta</button>
    </div>
  </div>
</template>

<script>
import { auth, createUserWithEmailAndPassword } from "../firebase.js";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";

export default {
  data() {
    return {
      email: "",
      senha: "",
      nome: "",
    };
  },

  methods: {
    async criarConta() {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.senha
        );

        const uid = userCredential.user.uid;

        await setDoc(doc(db, "users", uid), {
          nome: this.nome,
          email: this.email,
          dataDeCriacao: new Date().toISOString(),
        });

        alert("Conta criada com sucesso!");
        this.$router.push("/");
      } catch (error) {
        alert("Erro ao criar conta: " + error.message);
      }
    },
  },
};
</script>

<style scoped></style>
