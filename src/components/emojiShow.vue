<template>
  <div>
    <div class="clearfix bg-black margint20 paddingv20 paddingh10">
      <div class="float-left marginh10" :class="'emojiTest'+$index" v-for="(item,$index) in datas">{{emojiShow(item,$index)}}</div>
    </div>
    <div class="clearfix bg-color1 margint20 paddingv20 paddingh10">
      <div class="float-left marginh10">
        <img src="../assets/emoji/smile.svg" width="100" alt="">
      </div>
      <div class="float-left marginh10">
        <img src="../assets/emoji/stare.svg" width="100" alt="">
      </div>
      <div class="float-left marginh10">
        <img src="../assets/emoji/laugh.svg" width="100" alt="">
      </div>
    </div>
  </div>
  
</template>

<script>
import Vue from 'vue';
import emojiData from '../json/emojiData.json';

export default {
  name: 'emojiShow',
  data() {
    return {
      // screenWidth_1: document.body.clientWidth;
      ledArray:'',
      num:20,
      datas:emojiData.svg.number,
      data_400:Object.keys(Array.apply(null, {length:400})).map(function(item){return 0;}),
      outD:''
    }
  },
  watch: {
    
  },
  mounted() {
    // this.emojiShow();
  },
  methods: {
    emojiShow: function(data,index) {
      console.log(data.arrayNew)
      var dataNew = d3.set(data.arrayNew);
      var that = this;
      var width = 100;
      var num = this.num;
      var height = 100;
      // console.log(that.data_400)
      var data = data.arrayNew;
      Vue.nextTick(function() {
        var svg = d3.select(".emojiTest"+index)
        .selectAll("svg")
        .data([1])
        .enter()
        .append("svg")
        .attr("viewBox", "0 0 "+width+" "+height)
        .attr("width", width)
        .attr("height", height);
      var g = svg.append("g")
        .attr("transform", "translate(0,0)");
      var rects = g.selectAll(".MyRect")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", function(d, i){
          return d == 0 ? "MyRect" : "Selected num"+(i+1)
        })
        // .attr("transform", "translate(0," + padding.top + ")")
        .attr("x", function(d) {
          return (d%num * width / num);
        })
        .attr("y", function(d) {
          return (parseInt(d/num) * height / num);
        })
        .attr("rx", num/10)
        .attr("ry", num/10)
        .attr("width", (width/num))
        .attr("height", (height/num))
      });
      
    },
    dataReturn: function(d){
      var that = this;
      var data = that.data_400.map(function(n,index){
        return d.has(index) ? 1 : 0;
      });
      return data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
rect.Selected{
  fill:#ff1e6d;
}
.bg-color1{
  background: #554378;
}
</style>
