<template>
    <div class="mark" class="{'active':isActive}">
        <p>loadding...</p>
    </div>
    
</template>

<script>
export default {
//   name:'mark-view',
//   data:function(){
//       return {
//         isActive:false
//       }
//   },
//   mounted:function(){
//       setTimeout(()=>{
//           this.isActive = this.$store.state.mask_active;
//       },1500)
//   }
}
</script>

<style>
.mask{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .7);}
p{
    color: #ccc;
    font-size: .16rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.active{
    display: none;
}
</style>

