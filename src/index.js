var is_mobile_func = require("is-mobile");
export default {
    install: function (app, options) {
        app.config.globalProperties.$isMobile = is_mobile_func;
    }
};
