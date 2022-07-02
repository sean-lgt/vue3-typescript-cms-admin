import { createApp } from 'vue'
import App from './App.vue'
import router from './router' //引入路由
import store from './store' // 引入vuex

console.log('🚀【测试配置】', 'prettier') //测试prettier是否生效
// const testHusky = 'test' //测试husky
createApp(App).use(store).use(router).mount('#app')
