var is_mobile_func = require("is-mobile");
export default {
    install: function (app, options) {
        app.config.globalProperties.$isMobile = is_mobile_func;
    }
};
function useMobileDetection() {
    var isMobile = is_mobile_func;
    return { isMobile: isMobile };
}
export { useMobileDetection };
