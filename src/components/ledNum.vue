<template>
  <div>    
    <div class="clearfix bg-black margint20 paddingv20 paddingh10">
      <div class="float-left marginh10 ledNum"></div>
    </div>
  </div>
  
</template>

<script>
import Vue from 'vue';
import ledData from '../json/ledData.json';

export default {
  name: 'ledNum',
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
    this.ledNum();
  },
  methods: {
    ledNum: function() {
      var that = this;
      var dataNew = that.dataReturn(d3.set(that.datas[0].arrayNew));
      var width = 100;
      var num = this.num;
      var height = 100;
      // console.log(that.data_100)
      
      Vue.nextTick(function() {
        var svg = d3.select(".ledNum")
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
        .data(dataNew)
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
      // console.log(that.dataReturn(d3.set(that.datas[1].arrayNew)))
      var an = svg.selectAll("rect")
        .data(that.dataReturn(d3.set(that.datas[1].arrayNew)))
        .transition()
        .delay(2000)
        .duration(2000)
        // .ease("bounce")
        .attr("class", function(d){
          return d == 0 ? "MyRect" : "Selected"
        })
        .call(that.test);
        // console.log(an)
      });
      
    },
    dataReturn: function(d){
      var that = this;
      var data = that.data_100.map(function(n,index){
        return d.has(index) ? 1 : 0;
      });
      return data
    },
    test: function(){
      console.log(123123)
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
