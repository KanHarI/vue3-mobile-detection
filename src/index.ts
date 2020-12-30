import type { App } from "vue";
const is_mobile_func = require("is-mobile");

export default {
  install: function(app: App, options: any) {
    app.config.globalProperties.$isMobile = is_mobile_func;
  }
}
