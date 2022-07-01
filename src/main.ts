import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

console.log('🚀【测试配置】', 'prettier') //测试prettier是否生效

createApp(App).use(store).use(router).mount('#app')
