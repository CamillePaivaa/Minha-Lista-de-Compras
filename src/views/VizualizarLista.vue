<template>
  <div class="page_container">
    <div class="titulo_container">
      <h2>Minha Lista de Compras</h2>
      <button
        class="button_compartilhar"
        v-if="listaDeProdutos.length"
        @click="print"
      >
        Compartilhar no WhatsApp
      </button>
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

    <div v-else class="naoPossuiProduto">
      <img src="../assets/cestaCompras.png" style="width: 180px" />
      <p>
        Lista de compras está vazia. Clique no botão para adicionar novos
        produtos
      </p>
      <router-link to="/lista-produtos">
        <button class="button_Adicionar">Adicionar Produtos</button>
      </router-link>
    </div>
  </div>
</template>
<script>
//import { jsPDF } from "jspdf";

export default {
  computed: {
    listaDeProdutos() {
      return this.$store.getters.getListaDeProdutos;
    },
  },

  methods: {
    print() {
      //const doc = new jsPDF();

      //doc.text("Minha lista", 40, 10);

      //var pos = 20;

      var prodListWhatsapp = "*Lista de Compras*\n\n";
      prodListWhatsapp += "_Quantidade - Produto_ \n\n";

      for (var i = 0; i < this.listaDeProdutos.length; i++) {
        const nome = this.listaDeProdutos[i].nome;
        const qtd = this.listaDeProdutos[i].quantidade;

        //doc.text(`- ${nome} - ${qtd}`, 20, pos);
        prodListWhatsapp += "- " + qtd + " - " + nome + "\n";
        //pos += 5;
      }

      //doc.save("lista_de_compras.pdf");

      this.compartilharLista(prodListWhatsapp);
    },

    deletarProduto(produto) {
      this.$store.dispatch("removerProduto", produto);
    },

    compartilharLista(prodListWhatsapp) {
      const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(
        prodListWhatsapp
      )}`;

      window.open(whatsappURL, "_blank");
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
  margin-top: 40px;
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

.naoPossuiProduto {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  width: 100%;
  height: 100%;
}
.button_Adicionar {
  background-color: green;
  color: white;
  cursor: pointer;
  width: 300px;
  height: 40px;
  border: none;
  border-radius: 5px;
  margin-top: 40px;
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
