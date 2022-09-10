// JS
import './js/index'
// CSS
import './css/style.css'
// SCSS
import './scss/style.scss'

// Sprite
function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context('./icon', true, /\.svg$/));

// import 'vue'
// import Vue from 'vue'
// import store from './store'
window.Vue = require('vue')

// Components

import { Slide as MobileMenu } from 'vue-burger-menu'
// import VueCarousel from 'vue-carousel'
import VueCarousel from './components/Vue-Carousel/index'
Vue.use(VueCarousel)

Vue.component('MobileMenu', MobileMenu)
Vue.component('MobileMenu', MobileMenu)
Vue.component('TheModal', require('./components/TheModal.vue').default)
Vue.component('TheInput', require('./components/TheInput.vue').default)
Vue.component('TheInputNumber', require('./components/TheInputNumber.vue').default)
Vue.component('TheSelect', require('./components/TheSelect.vue').default)
Vue.component('TheDropDown', require('./components/TheDropDown.vue').default)
Vue.component('ProductDetail', require('./components/ProductDetail.vue').default)
Vue.component('ProductCard', require('./components/ProductCard.vue').default)



// Plugins
// VueInputMask
import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)
// VueScrollTo
import  VueScrollTo from  'vue-scroll-to'
Vue.use(VueScrollTo)
// VueLazyload
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {lazyComponent: true})
// Vue2Filters
import Vue2Filters from 'vue2-filters'
Vue.use(Vue2Filters)
// element-ui
import lang from 'element-ui/lib/locale/lang/ru-RU'
import locale from 'element-ui/lib/locale'
locale.use(lang)

import Input from 'element-ui/lib/input'
import InputNumber from 'element-ui/lib/input-number'
import Select from 'element-ui/lib/select'
import Option from 'element-ui/lib/option'
import Tabs from 'element-ui/lib/tabs'
import TabPane from 'element-ui/lib/tab-pane'

Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Select)
Vue.use(Option)
Vue.use(Tabs)
Vue.use(TabPane)

const app = new Vue({
  el: '#app',
  mixins: [Vue2Filters.mixin],
})
