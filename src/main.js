import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//全局引入字体图标在线链接
import "./assets/icon/iconfont.css";
// 常规样式
import "./assets/normal/normal.css";
// 中文时间
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
