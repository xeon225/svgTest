<template>
  <div class="flex-container-col vfull center bg-color1">
    <div class="flex-container center emojiAdd bg-black paddingv50 flex1">
      <!-- <div class="clearfix paddingv20">
        <div class="array float-left text-center" :style="'width:'+num+'%'" v-for="item in ledArray" v-text="item ? 1 : 0">
        </div>
      </div> -->
    </div>
    <div class="flex-container center">
      <button class="empty margint10 btn black small radius margin10">清空</button>
    </div>
    <div class="text-white text-center paddingv20">{{outD}}</div>
  </div>
  
</template>

<script>
import Vue from 'vue';
import emojiData from '../json/emojiData.json';

export default {
  name: 'emojiAdd',
  data() {
    return {
      // screenWidth_1: document.body.clientWidth;
      ledArray:'',
      num:20,
      dataAdd:emojiData.svg.number[2],
      datas:emojiData.svg.number,
      data_400:Object.keys(Array.apply(null, {length:400})).map(function(item){return 0;}),
      outD:''
    }
  },
  watch: {
    
  },
  mounted() {
    this.emojiAdd();
  },
  methods: {
    emojiAdd: function() {
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
      // var data = Object.keys(Array.apply(null, {length:num*num})).map(function(item,i){
      //   return false;
      // });
      var data = that.dataReturn(d3.set(that.dataAdd.arrayNew))
      //在 body 里添加一个 SVG 画布 
      var removed = d3.select(".emojiAdd").selectAll("svg").remove();
      var svg = d3.select(".emojiAdd")
        .selectAll("svg")
        .data([1])
        .enter()
        .append("svg")
        // .style("background","#000")
        .attr("viewBox", "0 0 "+width+" "+height)
        .attr("width", width)
        .attr("height", height);
      var g = svg.append("g")
        .attr("transform", "translate(0,0)");
      var rects = g.selectAll(".MyRect")
        .data(data)
        .enter()
        .append("rect",function(d,i){
          return false
        })
        .attr("class", function(d){
          return d == 0 ? 'MyRect' : 'Selected'
        })
        .attr("fill", function(d){
          return d == 0 ? '#846bb9' : '#ff1e6d'
        })
        // .attr("transform", "translate(0," + padding.top + ")")
        .attr("x", function(d, i) {
          return (i%num * width / num)+2;
        })
        .attr("y", function(d, i) {
          return (parseInt(i/num) * height / num)+2;
        })
        .attr("rx", num/5)
        .attr("ry", num/5)
        .attr("stroke-width", num/5)
        .attr("width", (width/num)-4)
        .attr("height", (height/num)-4)
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

      //清空
      d3.select(".empty").on("click",function(){
        that.empty(svg)
      })
    },
    empty: function(svg){
      var that = this;
      var an = svg.selectAll("rect")
        .attr("class", 'MyRect')
        .attr("style", '')
        .attr("fill",'#846bb9')
      that.ledArray = []
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
