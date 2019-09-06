import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
// import 'vant/lib/index.css'
import '@/core/use.js'
import '@/core/filters.js'

import '@/styles/index.less';

Vue.config.productionTip = false;
Vue.directive('click-outside', {
    // 初始化指令
    bind(el, binding) {
        function clickHandler(e) {
            if (el.contains(e.target)) {
                return false;
            }
            if (binding.expression) {
                binding.value(e);
            }
            return null;
        }
        el.vueClickOutside = clickHandler;
        document.addEventListener('click', clickHandler);
    },
    update() { },
    unbind(el) {
        document.removeEventListener('click', el.vueClickOutside);
        delete el.vueClickOutside;
    },
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
