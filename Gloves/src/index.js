// JS - ./js/index.js
import './js/index'
// CSS
import './css/main.css'
// SCSS
import './scss/main.scss'

// Sprite
function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context('./icon', true, /\.svg$/));

// import 'vue'
// import Vue from 'vue'
import Store from './store'
window.Vue = require('vue')

// Components
import { Slide as MobileMenu } from 'vue-burger-menu'
Vue.component('MobileMenu', MobileMenu)
import VueCarousel from 'vue-carousel'
Vue.use(VueCarousel)
Vue.component('TheModal', require('./components/TheModal.vue').default)
Vue.component('TheCounter', require('./components/TheCounter.vue').default)
Vue.component('TheSelect', require('./components/TheSelect.vue').default)
Vue.component('TheInput', require('./components/TheInput.vue').default)
Vue.component('ProductMetaData', require('./components/ProductMetaData.vue').default)
Vue.component('ButtonBuyProduct', require('./components/ButtonBuyProduct.vue').default)


// Plugins
// VueLazyload
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {lazyComponent: true})
// VueTheMask
import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)
// VueScrollTo
import vueScrollTo from 'vue-scroll-to';
Vue.use(vueScrollTo);
// element-ui
import lang from 'element-ui/lib/locale/lang/ru-RU'
import locale from 'element-ui/lib/locale'
locale.use(lang)
import Input from 'element-ui/lib/input'
import InputNumber from 'element-ui/lib/input-number'
import Select from 'element-ui/lib/select'
import Option from 'element-ui/lib/option'
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Select)
Vue.use(Option)




const app = new Vue({
  el: '#app',
  store: Store
})
