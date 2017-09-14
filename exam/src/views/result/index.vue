<template>
	<div class="result">
        <div class="aside"><img src="../../imgs/seal.png" alt=""></div>
        <h2>{{res.name}}</h2>
        <div class="subject"><b>主修课程 : </b><span>{{res.majors}}</span></div>
        <div class="special"><b>课程特色 : </b><span>{{res.character}}</span></div>
        <div class="btn">
            <a href="javascript:;"><img src="../../imgs/btn-intr.png" alt=""></a href="javascript:;">
            <a href="javascript:;"><img src="../../imgs/btn-share.png" alt=""></a href="javascript:;">
        </div>
    </div>
</template>

<script>
	export default{
		data:function(){
			return {
				res:""
			}
		},
		created:function(){
			this.$http.get("./src/service/school_list.json").then((res)=>{
					this.res=res.data[this.random(0,11)]
					console.log(this.res)
				})
		},
		methods:{
			random(min,max){
				let num=Math.floor(Math.random()*max-min)
				if(num<10){
					num="0"+num
				}
				return 'school'+num
			}
		}
	}
</script>
 
<style scoped>
	.result{
		width: 100%;
		height: 100%;
		margin: auto;
		background: url('../../imgs/bg-matriculate.png') center 42px no-repeat;
		background-size: 328px 385px;
		padding-top: 170px;
		position: relative;
		box-sizing: border-box;}
		.aside{
			position: absolute;
			top: 42px;
			right: 13px;}
			img{
				width: 130px;
				height: 130px;
			}
		
		h2{
			font-size: 22px;
			color: #333;
			font-weight: 400;
			width: 100%;
			text-align: center;   
		}
		.subject{
			width: 254px;
			margin: 6px auto 0;}
			b{
				font-size: 14px;
				color: #333;
			}
			span{
				color: #393939;
				font-size: 14px;
			}
		
		.special{
			width: 254px;
			margin: 6px auto 0;}
			b{
				font-size: 14px;
				color: #333;
			}
			span{
				color: #393939;
				font-size: 14px;
			}
		
		.btn{
			width: 305px;
			margin: 50px auto 0;
			display: flex;
			justify-content: space-between;}
			img{
				width: 140px;
				height: 60px;
			}    
		
	
</style>
