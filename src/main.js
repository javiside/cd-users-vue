import { createApp } from "vue";
import { Alert, Skeleton } from "ant-design-vue";

import mitt from "mitt";

import App from "./App.vue";
import router from "./router";

const emitter = mitt();
const app = createApp(App);

app.config.globalProperties.emitter = emitter;
app.use(router);
app.use(Alert);
app.use(Skeleton);
app.mount("#app");
