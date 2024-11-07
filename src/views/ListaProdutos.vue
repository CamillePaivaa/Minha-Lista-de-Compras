<template>
  <div class="page_container">
    <div class="titulo_img_container">
      <h3 class="titulo">
        <span v-if="!listaDeProdutos.length">
          Selecione os Produtos que deseja adicionar a sua lista de compras!
        </span>

        <span v-if="listaDeProdutos.length" class="titulo_imgLista">
          Clique para visualizar a lista
        </span>
      </h3>

      <router-link to="/vizualizar-lista">
        <img
          class="imgLista"
          v-if="listaDeProdutos.length"
          src="../assets/listaCompras.png"
          @click="storeListaProdutos"
        />
      </router-link>
    </div>

    <div v-if="loading">Carregando produtos...</div>
    <div v-else>
      <div class="input-dropdown-container" v-click-outside="esconderDropdown">
        <input
          v-model="categoriaSelecionadaInput"
          @focus="mostrarDropdown = true"
          class="categoria-input"
          placeholder="Escolha uma categoria"
          :readonly="true"
        />
        <div v-if="mostrarDropdown" class="dropdown">
          <ul>
            <li
              v-for="(categoria, index) in produtosCategorias"
              :key="index"
              @click="selecionarCategoria(categoria)"
              class="dropdown-item"
            >
              {{ categoria.nome }}
            </li>
          </ul>
        </div>
      </div>

      <div v-if="categoriaSelecionada">
        <div class="subcategorias_container">
          <div
            v-for="(
              subCategoria, subIndex
            ) in categoriaSelecionada.subCategorias"
            :key="subIndex"
            class="subcategory"
          >
            <h4>{{ subCategoria.nome }}</h4>

            <div
              v-for="(produto, productIndex) in subCategoria.produtos"
              :key="productIndex"
              class="produto_item"
            >
              <input
                type="checkbox"
                v-model="listaDeProdutos"
                @click="produto.quantidade = 1"
                :value="produto"
              />
              {{ produto.nome }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { produtosCategorias } from "../produtos.js";

export default {
  data() {
    return {
      listaDeProdutos: [],
      produtosCategorias,
      categoriaSelecionada: null,
      categoriaSelecionadaInput: "",
      mostrarDropdown: false,
      loading: false,
      produtoSelecionado: false,
    };
  },

  directives: {
    clickOutside: {
      mounted(el, binding) {
        el.clickOutsideHandler = (event) => {
          if (!el.contains(event.target)) {
            binding.value();
          }
        };
        document.addEventListener("mousedown", el.clickOutsideHandler);
      },
      unmounted(el) {
        document.removeEventListener("mousedown", el.clickOutsideHandler);
      },
    },
  },
  methods: {
    selecionarCategoria(categoria) {
      this.categoriaSelecionada = categoria;
      this.categoriaSelecionadaInput = categoria.nome;
      this.mostrarDropdown = false;
    },
    esconderDropdown() {
      this.mostrarDropdown = false;
    },

    storeListaProdutos() {
      console.log("listaDeProdutos:", this.listaDeProdutos);
      this.$store.commit("setListaDeProdutos", this.listaDeProdutos);
    },
  },
};
</script>

<style scoped>
.page_container {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10%;
  row-gap: 40px;
}
.titulo {
  font-family: Georgia, "Times New Roman", Times, serif;
  margin-top: 3%;
  color: rgb(0, 5, 35);
  font-size: 20px;
  height: 90px;
  border-radius: 20px;
  display: flex;
  align-items: center;
}
.titulo_img_container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-width: 450px;
}

.imgLista {
  width: 60px;
  height: 60px;
}

.input-dropdown-container {
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
}

.categoria-input {
  width: 500px;
  padding: 8px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 40px;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-height: 200px;
  width: 500px;
  overflow-y: auto;
  z-index: 100;
}

.dropdown-item {
  padding: 8px;
  cursor: pointer;
  list-style: none;
}

.dropdown-item:hover {
  background-color: rgb(4, 162, 4);
}

.subcategorias_container {
  display: flex;
  flex-direction: row;
  justify-content: start;
  column-gap: 50px;
  row-gap: 20px;
  flex-wrap: wrap;
  width: 1000px;
}

.produto_item {
  padding: 5px;
  background-color: #f0f0f0;
  width: 290px;
}

.subcategory h4 {
  font-size: 1.1em;
  color: rgb(4, 162, 4);
  text-align: center;
  padding: 5px;
  background-color: #f0f0f0;
  margin-bottom: 10px;
}
</style>
