/* eslint-disable camelcase */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let instance = null
function render () {
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount('#vueapp')
}
if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}
if (!window.__POWERED_BY_QIANKUN__) { render() }
export async function bootstrap () {}
export async function mount () { render() }
export async function unmount () { instance.$destroy() }
