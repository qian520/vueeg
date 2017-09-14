import Vue from 'vue'
import App from './App.vue'
import router from "./router/index.js"
import axios from "axios"
Vue.prototype.$http=axios
import store from "./store/index.js"

new Vue({
  el: '#app',
  store,
  beforeCreate:function(){
  	this.$http.get("./src/service/question.json").then((result)=>{
  		console.log(result.data)
  		this.$store.dispatch("get_question",result.data)
  	})
  },
  router:router,
  render: h => h(App)
})
 