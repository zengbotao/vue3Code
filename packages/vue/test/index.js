/*
 * @Description:
 * @Autor: zengbotao@myhexin.com
 * @Date: 2024-05-17 18:44:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-05-19 09:26:47
 */
import { createApp, ref } from '../dist/vue.runtime.esm-bundler.js'

createApp({
  setup() {
    const message = ref('Hello Vue!')
    return {
      message,
    }
  },
}).mount('#app')
