<template>
  <div class="hello">
    <input type="text" v-model="value" @change="getcolor"><br/>
    当前数据: <span v-for="(item, index) in list" :key="index">{{item.title}}</span><br/>
    搜索数据: <span v-for="(item, index) in lists" :key="index+'1'"><span v-for="(items, indexs) in item" :key="indexs" :style="{color:items.type==1?'#0091ff':''}">{{items.content}}</span> </span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      value:"",
      list:[{title:'绝技进阶'},{title:'阿萨斯大所多'},{title:'啥都强微型车'},{title:'奥术大师多'}],
      lists:[]
    } 
  },
  methods:{
    getcolor(vals){
      var val = vals.target.value;
      this.lists = [];
      for(var i = 0;i<this.list.length;i++){
        var type = true;
        var index = 0;
        var arr = [];
        while(type){
          var a = this.list[i].title.indexOf(val,index);
          if(a!=-1){
              arr.push({
                  type:0,
                  content:this.list[i].title.slice(index,a)
              })
              arr.push({
                  type:1,
                  content:this.list[i].title.slice(a,a+val.length)
              })
              index = a+val.length;
          }else{
              arr.push({
                  type:0,
                  content:this.list[i].title.slice(index)
              })
              type = false;
          }
        }
        this.lists.push(arr);
      }
      console.log(this.lists);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
