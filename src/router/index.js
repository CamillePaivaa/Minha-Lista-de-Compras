import { createRouter, createWebHistory } from "vue-router";
import LoginUsuario from "../components/LoginUsuario.vue";
import ListaProdutos from "@/components/ListaProdutos.vue";
import VizualizarLista from "@/components/VizualizarLista.vue";
import CriarConta from "@/components/CriarConta.vue";

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
    path: "/vizualizar-lista",
    name: "VizualizarLista",
    component: VizualizarLista,
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
