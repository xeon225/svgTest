<template>
  <div>
    <div class="flex-container bg-color1">
      <div class="flex-container center ledAdd bg-black paddingv50 flex1">
      </div>
      <div class="clearfix margint20" style="max-width:240px;">
        <div class="array float-left text-center" :style="'width:'+num+'%'" v-for="item in ledArray" v-text="item ? 1 : 0">
        </div>
      </div>
    </div>
    
    <div class="clearfix bg-black margint20 paddingv20 paddingh10">
      <div class="float-left marginh10" :class="'ledTest'+$index" v-for="(item,$index) in datas.svg">{{ledShow(item.array,$index)}}</div>
    </div>
  </div>
  
</template>

<script>
import Vue from 'vue';
import ledData from '../json/ledData.json';

export default {
  name: 'ledAdd',
  data() {
    return {
      // screenWidth_1: document.body.clientWidth;
      datas:ledData,
      ledArray:'',
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
          d3.select(this)
            .transition()
            .duration(200)
            .attr("class", function(d){
              that.ledArray[i] = !that.ledArray[i];
              // that.ledArray = d3.select("svg").selectAll("rect")[0];
              Vue.set(that.ledArray, i, that.ledArray[i]);
              console.log(that.ledArray.map(function(num){ return num ? 1 : 0}))
              return that.ledArray[i] ? "Selected" : "MyRect"
            });
        })
        // console.log(data)
        that.ledArray = data;
    },
    ledShow: function(data,index) {
      var that = this;
      var width = 100;
      var num = this.num;
      var height = 100;
      //在 body 里添加一个 SVG 画布 
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
