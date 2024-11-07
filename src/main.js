import { createApp } from "vue"; // Importa a função createApp do Vue
import App from "./App.vue"; // Importa o componente App
import router from "./router"; // Importa o Vue Router

createApp(App)
  .use(router) // Configura o Vue Router no aplicativo
  .mount("#app"); // Monta o app na div com id 'app'
