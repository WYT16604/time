import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//ȫ����������ͼ����������
import "./assets/icon/iconfont.css";
// ������ʽ
import "./assets/normal/normal.css";
// ����ʱ��
import ElementPlus from "element-plus";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";

const app = createApp(App);
app
  .use(ElementPlus, {
    locale: zhCn,
  })
  .use(store)
  .use(router)
  .mount("#app");
