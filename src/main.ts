/*
 * @Description: 
 * @Author: zhengqi
 * @Date: 2022-01-27 15:49:00
 * @LastEditTime: 2022-01-27 16:03:05
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//  ttt
createApp(App).use(store).use(router).mount('#app')
