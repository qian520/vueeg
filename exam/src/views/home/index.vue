<template>
	<div class="home">
	  	<div class="person">
			<div class="p">
            	<img src="../../imgs/home-title.png" alt="">
            </div>
	     	<router-link :to="{name:'question',params:{step:1},query:{type:1}}"><div class="f_like"></div></router-link>
	      	<router-link :to="{name:'question',params:{step:1},query:{type:0}}"><div class="f_wenke"></div></router-link>
	    </div>
		<div class="left-hand">
            <img src="../../imgs/home-left-hand.png" alt="">
        </div>
        <div class="right-hand">
            <img src="../../imgs/home-right-hand.png" alt="">
        </div>
        <div class="dui">
          <img src="../../imgs/home-icon-1.png" alt="">
        </div>
        <div class="cuo">
          <img src="../../imgs/home-icon-2.png" alt="">
        </div>
   </div>
</template>
<script>
	export default{
		data:function(){
			return{

			}
		}

	}
</script>


<style>
.home{
	width:100%;
	height:100%;
}
.person{
	width:80%;
	height:100%;
	background:url("../../imgs/home-pepole.png") no-repeat center top;
	background-size: 100% 432px;
	margin:0 auto;
	position: relative;
}
.p{
	position: absolute;
	left: 62px;
	top:50px;
	}
.p img{
	height: 30px;
	height: 65px;
}
.f_like,.f_wenke{
	position: absolute;
	width:30%;
	height:50px;
	top:250px;
}
.f_like{
	background:url("../../imgs/f-like.png") no-repeat center center;
	background-size:contain;
	left:10%;
}
.f_wenke{
	background:url("../../imgs/f-wenke.png") no-repeat center center;
	background-size:contain;
	right:10%;
}
.cuo{
	position: absolute;
	top: 80%;
	width: 50px;
	height: 50px;
	right: 15%;
}
.cuo img{
  	width: 100%;
}
.dui{
	position: absolute;
	top: 80%;
	width: 35px;
	height: 35px;
	left: 19%;
}
.dui img{
  	width: 100%;
}
.left-hand{
	position: absolute;
	top: 50%;
	left: 0;
}
.right-hand{
	position: absolute;
	top: 50%;
	right: -12%;
}
.left-hand img{
  	width:50%;
}
.right-hand img{
  	width:50%;
}

</style>