<template>
  <div class="clearfix bg-black margint20 paddingv20 paddingh10">
    <div class="float-left marginh10" :class="'emojiTest'+$index" v-for="(item,$index) in datas">{{emojiShow(item,$index)}}</div>
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
      dataAdd:emojiData.svg.number[0],
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
      console.log(this.dataAdd.arrayNew)
      var dataNew = d3.set(data.arrayNew);
      var that = this;
      var width = 100;
      var num = this.num;
      var height = 100;
      // console.log(that.data_400)
      var data = that.data_400.map(function(n,index){
        return dataNew.has(index) ? 1 : 0;
      });
      Vue.nextTick(function() {
        var svg = d3.select(".emojiTest"+index)
        .selectAll("svg")
        .data([1])
        .enter()
        .append("svg")
        .style("background","#000")
        .attr("viewBox", "0 0 "+width+" "+height)
        .attr("width", width)
        .attr("height", height);
      var g = svg.append("g")
        .attr("transform", "translate(0,0)");
      var rects = g.selectAll(".MyRect")
        .data(that.dataAdd.arrayNew)
        .enter()
        .append("rect")
        .attr("class", function(d){
          return d == 0 ? "MyRect" : "Selected"
        })
        // .attr("transform", "translate(0," + padding.top + ")")
        .attr("x", function(d, i) {
          return d%num * width / num;
        })
        .attr("y", function(d, i) {
          return parseInt(d/num) * height / num;
        })
        .attr("rx", num*2)
        .attr("ry", num*2)
        .attr("stroke-width", 1)
        .attr("stroke", '#000')
        .attr("fill", '#846bb9')
        .attr("width", width/num)
        .attr("height", height/num)
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
