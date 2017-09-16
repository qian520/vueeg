Vue.component('dialogEl',{
    data:function(){
        return {
            index:NaN,
            show:false,
            list:[]
        }
    },
    template:`
    <transition name="fade">
        <div class="mark" v-show="show">
            <div class="warp" >
                <div class="title">转账记录</div>
                <div class="connter">
                    <ul>
                        <li v-for="(items,i) in list" @click="sel(i)" :class="{active:index==i}">
                            <p>{{items.name}}</p>
                            <span>{{items.number}}</span>
                        </li>
                    </ul>
                </div>
                <div class="btns">
                    <button class="qu" @click="close">取消</button>
                    <button class="que" @click="close">确定</button> 
                </div>
            </div>
        </div>
    </transition>
    `,
    methods:{
        close:function(){
            this.show = false;
        },
        sel:function(i){
            console.log(i)
            this.index = i; 
        }
    },
    created:function(){
        this.$http('js/list.json').then((res)=>{
            console.log(res.data);
            this.list=res.data;
            this.show = true;
        })
    }

})