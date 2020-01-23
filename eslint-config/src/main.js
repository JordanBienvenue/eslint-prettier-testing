import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')

const sample = ['sdisd', 'sdfosdf']

var x = function(name) {
    return name
}

console.log(x)
