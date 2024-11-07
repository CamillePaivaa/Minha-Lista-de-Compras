<template>
  <div class="page_container">
    <h2>Para Criar Sua Conta, Preencha os Campos Abaixo!</h2>
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
      <button class="button" @click="criarConta">Criar Conta</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: "",
      senha: "",
      contasCadastradas: [
        { nome: "user1", senha: "123" },
        { nome: "user2", senha: "123" },
        { nome: "user3", senha: "123" },
      ],
    };
  },

  methods: {
    criarConta() {
      // Verifica se os campos não estão vazios
      if (this.usuario && this.senha) {
        // Verifica se o nome de usuário já está cadastrado
        const usuarioExistente = this.contasCadastradas.find(
          (conta) => conta.nome === this.usuario
        );

        if (usuarioExistente) {
          console.log("Usuário já existe. Tente outro nome.");
        } else {
          const novaConta = { nome: this.usuario, senha: this.senha };
          this.contasCadastradas.push(novaConta);

          alert("Conta criada com sucesso!");
          console.log(this.contasCadastradas);
          this.usuario = "";
          this.senha = "";

          this.$router.push("/");
        }
      } else {
        alert("Por favor, preencha todos os campos.");
      }
    },
  },
};
</script>

<style scoped>
/* Adicione seu CSS aqui */
</style>
