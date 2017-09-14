<template>
  <div id="app"> 
    <router-view></router-view>
    <!-- <mark-view></mark-view>   -->
  </div>
 
</template>


<script>


//import markview from "./components/glocal_mack.vue"
export default {  
  name: 'app',
  // components:{
  //  'mark-view':markview
  // }

}
</script>

<style>


*{
  margin:0;
  padding:0;
}
html,body{
  width:100%;
  height:100%;
}
body{
  background:url("imgs/bg.jpg") no-repeat;
  background-size: cover !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   height:100%;
  
}

</style>
