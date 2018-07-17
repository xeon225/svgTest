<template>
  <div class="flex-container-col vfull center bg-color1">
    <div class="flex-container center ledAdd bg-black paddingv50 flex1">
      <!-- <div class="clearfix paddingv20">
        <div class="array float-left text-center" :style="'width:'+num+'%'" v-for="item in ledArray" v-text="item ? 1 : 0">
        </div>
      </div> -->
    </div>
    <div class="text-white text-center paddingv20">{{outD}}</div>
  </div>
  
</template>

<script>
import Vue from 'vue';

export default {
  name: 'ledAdd',
  data() {
    return {
      // screenWidth_1: document.body.clientWidth;
      ledArray:'',
      outD:'',
      num:10
    }
  },
  watch: {
    
  },
  mounted() {
    this.ledAdd();
  },
  methods: {
    ledAdd: function() {
      var that = this;
      var width = 400;
      var num = this.num;
      var outD = [];
      var padding = {
        left: 30,
        right: 30,
        top: 20,
        bottom: 20
      };
      var height = 400;
      var data = Object.keys(Array.apply(null, {length:100})).map(function(item){
          return false;
        });
      //在 body 里添加一个 SVG 画布 
      var removed = d3.select(".ledAdd").selectAll("svg").remove();
      var svg = d3.select(".ledAdd")
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
        .attr("class", 'MyRect')
        // .attr("transform", "translate(0," + padding.top + ")")
        .attr("x", function(d, i) {
          return i%num * width / num;
        })
        .attr("y", function(d, i) {
          return parseInt(i/num) * height / num;
        })
        .attr("rx", num*2)
        .attr("ry", num*2)
        .attr("stroke-width", num/2)
        .attr("stroke", '#000')
        .attr("fill", '#846bb9')
        .attr("width", width/num)
        .attr("height", height/num)
        .on("click",function(d,i){
          that.outD = [];
          d3.select(this)
            .transition()
            .duration(200)
            .attr("class", function(d){
              that.ledArray[i] = !that.ledArray[i];
              // that.ledArray = d3.select("svg").selectAll("rect")[0];
              Vue.set(that.ledArray, i, that.ledArray[i]);
              that.ledArray.map(
                function(n,index){
                  return n && that.outD.push(index);
                }
              )
              return that.ledArray[i] ? "Selected" : "MyRect"
            })
            .style("fill", function(d){
              return that.ledArray[i] ? "#ff1e6d" : "#846bb9"
            });
        })
        // console.log(data)
        that.ledArray = data;
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
