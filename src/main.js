import { createApp } from "vue";
import App from "./App.vue";
import { Breadcrumb, Select, Input, List, Avatar } from "ant-design-vue";

import router from "./router";
import Header from "./components/Header.vue";
import User from "./components/User.vue";
import Card from "./components/Card.vue";

const app = createApp(App);
app.use(Breadcrumb);
app.use(Select);
app.use(Input);
app.use(List);
app.use(Avatar);
app.use(router);
app.component("app-header", Header);
app.component("user", User);
app.component("card", Card);
app.mount("#app");
