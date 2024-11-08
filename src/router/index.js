import { createRouter, createWebHistory } from "vue-router";
import LoginUsuario from "../views/LoginUsuario.vue";
import ListaProdutos from "@/views/ListaProdutos.vue";
import VizualizarLista from "@/views/VisualizarLista.vue";
import CriarConta from "@/views/CriarConta.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: LoginUsuario,
  },

  {
    path: "/lista-produtos",
    name: "ListaProdutos",
    component: ListaProdutos,
  },

  {
    path: "/visualizar-lista",
    name: "VisualizarLista",
    component: VizualizarLista,
    props: true,
  },

  {
    path: "/criar-conta",
    name: "CriarConta",
    component: CriarConta,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
