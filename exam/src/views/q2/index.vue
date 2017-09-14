<template>
	<div class="q1">
		<div class="header">
			<p class="title">化学题 1题/4题</p>
			<p class="question">{{question_name}}</p>
			<div class="answers">
				<ul>
					<li class="answer_item" @click="change_bg(0)" :class="{'selected_answer':bg_list[0]}">
						<span class="answer_alpha a"></span>
						{{an1}}
					</li>
					<li class="answer_item" @click="change_bg(1)" :class="{'selected_answer':bg_list[1]}">
						<span class="answer_alpha b"></span>
						{{an2}}
					</li>
					<li class="answer_item" @click="change_bg(2)" :class="{'selected_answer':bg_list[2]}">
						<span class="answer_alpha c"></span>
						{{an3}}
					</li>
				</ul>
			</div>
		</div>
		<div class="split_line">

		</div>

	</div>
</template>


<script>

export default{
	created:function(){
		if(this.$route.query.type==1){
			this.data=this.$store.commit('set_selected_querstion',"science") 
			console.log(this.$store.state)   
		}
		if(this.$route.query.type==0){
			this.data=this.$store.commit('set_selected_querstion',"liberal")
		}
		
		let {title,answers}=this.$store.state.selected_question[1]
		this.question_name=title
		this.an1=answers[0]
		this.an2=answers[1]
		this.an3=answers[2]

	}, 
	data:function(){
		return {
			bg_list:[false,false,!1],
			question_name:"",
			an1:"sdf",
			an2:"sdfs",
			an3:"sdfsdf",
			data:null

		}
	},
	methods:{
		change_bg:function(index){
			this.bg_list=[!1,!1,!1]
			this.bg_list[index]=!0

			setTimeout(()=>{
				this.$router.push("/q2")
			},2000)
			
			
		}

	}
} 

</script>


<style>
li{
	list-style:none;
}
	.header{	
		width:90%;
		margin:30px auto;	
	}
	.title{
		height:58px;
		line-height:33px;
		text-align: center;
		background:url("../../imgs/bg-qustion-top.png")no-repeat top center;
		background-size:100% auto;
	}
	.question{
		line-height:25px;
		text-align:left;
		text-indent: 30px;
		background:url("../../imgs/bg-question-center.png")no-repeat center top;
		background-size:100% 100%;
		padding:5px 30px;
	}
	.answers{
		padding: 8px 20px ;
		background:url("../../imgs/bg-question-bottom.png")no-repeat center bottom;
		background-size:100% auto;
		height:381px;
	}
	.answer_item{
		background:url("../../imgs/btn-bg-select.png")no-repeat center top;
		height:51px;
		width:91%;
		background-size:304px 102px;
		line-height:51px;
		margin:22px 0;
	}
	.answer_alpha{
		float:left;
		height:48px;
		width:48px;
		

	}
	.a{
		background:url("../../imgs/a.png")no-repeat center center;
		background-size:60% auto;
	}
	.b{
		background:url("../../imgs/b.png")no-repeat center center;
		background-size:60% auto;
	}
	.c{
		background:url("../../imgs/c.png")no-repeat center center;
		background-size:60% auto;
	}
	.selected_answer{
		background-position: 0 -52px;
	}
	.answer_item{
		font-size:12px;
	}
</style>