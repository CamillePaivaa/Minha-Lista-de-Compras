import { createStore } from "vuex";

export default createStore({
  state: {
    listaDeProdutos: [],
  },
  mutations: {
    setListaDeProdutos(state, produtos) {
      state.listaDeProdutos = produtos;
    },
    removerProduto(state, produto) {
      state.listaDeProdutos = state.listaDeProdutos.filter(
        (p) => p.nome !== produto.nome
      );
    },
  },
  getters: {
    getListaDeProdutos(state) {
      return state.listaDeProdutos;
    },
  },

  actions: {
    removerProduto({ commit }, produto) {
      commit("removerProduto", produto);
    },
  },
});
