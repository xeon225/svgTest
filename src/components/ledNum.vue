<template>
  <div>    
    <div class="flex-container-col vfull bg-color1">
      <div class="flex-container center paddingv20 paddingh10 ledNum bg-black"></div>
      <div class="flex-container center padding10">
        <button class="numStart margint10 btn black small radius margin10">渐变</button>
        <button class="nonDU margint10 btn black small radius margin10">从下到上</button>
        <button class="nonUD margint10 btn black small radius margin10">从下到上</button>
      </div>
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
      // var dataNew = that.dataReturn(d3.set(that.datas[0].arrayNew));
      var width = 200;
      var num = this.num;
      var height = 200;
      // console.log(that.data_100)
      var allArray = that.datas.map(function(n,i){
        return that.dataReturn(d3.set(n.arrayNew))
      })
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
        .data(that.data_100)
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
        // .call(function(){
        //   that.show(svg,allArray,0)
        // })
      //数据渐变
      d3.select(".numStart").on("click",function(){
        that.show(svg,allArray,0)
      })
      //数据逐行切换
      var newDataDU = [].concat.apply([],allArray)  //数据从下到上 0-9
      var newDataUD = [].concat.apply([],allArray.reverse())  //数据从上到下 9-0
     
      var newDataLength = allArray.length
      //数据逐行从下到上
      d3.select(".nonDU").on("click",function(){
        that.nonDU(svg,newDataDU,0,newDataLength)
      })
      //数据逐行从上到下
      d3.select(".nonUD").on("click",function(){
        that.nonUD(svg,newDataUD,(newDataLength-1)*that.num,0)
      })
      
    },
    dataReturn: function(d){
      var that = this;
      var data = that.data_100.map(function(n,index){
        return d.has(index) ? 1 : 0;
      });
      return data
    },
    show: function(svg,datas,i){
      var that = this;
      var length = datas.length;
      if (length > i) {
        var an = svg.selectAll("rect")
          .data(datas[i])
          .transition()
          .delay(function(d,t){
            return i*1000+t*5
          })
          .duration(2000)
          // .ease("bounce")
          .attr("class", function(d){
            return d == 0 ? "MyRect" : "Selected"
          })
          .call(function(){
            that.show(svg,datas,i+1)
          })
      }
    },
    nonDU: function(svg,datas,i,length){
      var that = this;
      // console.log(datas.slice)
      console.log(i)
      if (i <= (length-1)*that.num) {
        var newData = datas.slice(i*that.num,i*that.num+that.num*that.num)
        var an = svg.selectAll("rect")
          .data(newData)
          .transition()
          .delay(100*i)
          .duration(2000)
          .attr("class", function(d){
            return d == 0 ? "MyRect" : "Selected"
          })
          .call(function(){
            that.nonDU(svg,datas,i+1,length)
          })
      }
    },
    nonUD: function(svg,datas,length,i){
      var that = this;
      console.log(i)
      if (0 <= length*that.num) {
        var newData = datas.slice(length*that.num,length*that.num+that.num*that.num)
        var an = svg.selectAll("rect")
          .data(newData)
          .transition()
          .delay(100*i)
          .duration(2000)
          .attr("class", function(d){
            return d == 0 ? "MyRect" : "Selected"
          })
          .call(function(){
            that.nonUD(svg,datas,length-1,i+1)
          })
      }
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