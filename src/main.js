import { createApp } from "vue";
import { Alert, Skeleton } from "ant-design-vue";

import App from "./App.vue";
import router from "./router";
import store from "./store/index";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(Alert);
app.use(Skeleton);
app.mount("#app");
