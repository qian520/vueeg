import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

let store=new Vuex.Store({
	state:{
		question:null,
		selected_question:[]
	},
	mutations:{
		set_question:function(state,data){
			state.question=data
		},
		set_selected_querstion:function(state,type){
			let arr=[];
			let {question}=state
			function get4from(arr){
				let tmp_arr=[]
				for( let i=0;i<4;i++){
				let tmp=random(0,arr.length)
					if(tmp_arr.indexOf(tmp)==-1){
						tmp_arr.push(tmp)

					}else{
						i--
					}
				}
				return [arr[tmp_arr[0]],arr[tmp_arr[1]],arr[tmp_arr[2]],arr[tmp_arr[3]]]
			}
				function random(min,max){
					return Math.floor(Math.random()*max-min)
				}

				if(type="liberal"){
					Object.values(question).forEach((val)=>{
						if(val.type!==1){
							arr.push(val)
						}
					})
				}
				if(type="science"){  
					Object.values(question).forEach((val)=>{
						if(val.type==1 || val.type==2){
							arr.push(val)
						}
					})
				}
				
				state.selected_question=[...get4from(arr)]
			}
		},
	actions:{
		get_question:function({commit},data){
			commit("set_question",data)
		}
	}
})

export default store
