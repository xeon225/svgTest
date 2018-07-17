<template>
  <div>    
    <div class="clearfix bg-black margint20 paddingv20 paddingh10">
      <div class="float-left marginh10" :class="'ledTest'+$index" v-for="(item,$index) in datas">{{ledShow(item,$index)}}</div>
    </div>
  </div>
  
</template>

<script>
import Vue from 'vue';
import ledData from '../json/ledData.json';

export default {
  name: 'ledShow',
  data() {
    return {
      // screenWidth_1: document.body.clientWidth;
      datas:ledData.svg.number,
      data_100:Object.keys(Array.apply(null, {length:100})).map(function(item){return 0;}),
      num:10
    }
  },
  watch: {
    
  },
  mounted() {
    // this.ledShow();
  },
  methods: {
    ledShow: function(data,index) {
      var dataNew = d3.set(data.arrayNew);
      var that = this;
      var width = 100;
      var num = this.num;
      var height = 100;
      // console.log(that.data_100)
      var data = that.data_100.map(function(n,index){
        return dataNew.has(index) ? 1 : 0;
      });
      Vue.nextTick(function() {
        var svg = d3.select(".ledTest"+index)
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
        .data(data)
        .enter()
        .append("rect")
        .attr("class", function(d){
          return d == 0 ? "MyRect" : "Selected"
        })
        // .attr("transform", "translate(0," + padding.top + ")")
        .attr("x", function(d, i) {
          return i%num * width / num;
        })
        .attr("y", function(d, i) {
          return parseInt(i/num) * height / num;
        })
        .attr("rx", num*2)
        .attr("ry", num*2)
        .attr("stroke-width", num/5)
        .attr("stroke", '#000')
        .attr("fill", '#846bb9')
        .attr("width", width/num)
        .attr("height", height/num)
      });
      
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
