import { createApp } from 'vue';
//import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import './assets/font/iconfont.css' //引入字体图标


// import VueCompositionApi from '@vue/composition-api'
// Vue.use(VueCompositionApi)

createApp(App).use(router).use(store).mount('#app')
