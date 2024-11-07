<template>
  <div class="page_container">
    <div class="titulo_container">
      <h2>Minha Lista de Compras</h2>
      <button class="button_compartilhar">Compartilhar no WhatsApp</button>
    </div>

    <table
      border="1"
      class="tabela"
      v-if="listaDeProdutos && listaDeProdutos.length"
    >
      <thead class="header_tabela">
        <tr>
          <th>Quantidade</th>
          <th>Produto</th>
          <th>Remover</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="produto in listaDeProdutos" :key="produto.id">
          <td>
            <div class="quantidade_container">
              <button
                class="button"
                @click="produto.quantidade -= 1"
                :disabled="produto.quantidade <= 1"
                :style="{
                  borderColor: produto.quantidade <= 1 ? 'gray' : 'green',
                }"
              >
                -</button
              >{{ produto.quantidade
              }}<button class="button" @click="produto.quantidade += 1">
                +
              </button>
            </div>
          </td>
          <td>{{ produto.nome }}</td>
          <td>
            <img
              src="@/assets/delete.png"
              @click="deletarProduto(produto)"
              style="cursor: pointer"
            />
          </td>
        </tr>
      </tbody>
    </table>

    <div v-else>
      <p>Lista de compras está vazia.</p>
      <router-link to="/lista-produtos">
        <button>Adicionar novo produto</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    listaDeProdutos() {
      return this.$store.getters.getListaDeProdutos;
    },
  },

  methods: {
    deletarProduto(produto) {
      this.$store.dispatch("removerProduto", produto);
    },
  },
};
</script>

<style scoped>
.page_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 50px;
  height: 100vh;
  background-color: rgb(251, 253, 247);
}

.titulo_container {
  display: flex;
  justify-content: center;
  column-gap: 30px;
  align-items: center;
  width: 50%;
}

.tabela {
  width: 50%;
  border-collapse: collapse;
  text-align: center;
  border-color: green;

  th,
  td {
    padding: 10px;
  }
}

.header_tabela {
  background-color: rgb(168, 168, 168);
}

.quantidade_container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  column-gap: 15px;
}

.button {
  background-color: white;
  color: green;
  border: 2px solid green;
  cursor: pointer;
  width: 30px;
  height: 25px;
  border-radius: 5px;
}

.button_compartilhar {
  background-color: white;
  color: green;
  border: 1px solid green;
  cursor: pointer;
  width: 200px;
  height: 40px;
  border-radius: 5px;
}
</style>
