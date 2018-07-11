<template>
  <div class="scaleLinear scaleLinear_2 flex-container center" ref="linear_2">
    
  </div>
</template>

<script>
export default {
  name: 'ScaleLinear_2',
  data() {
    return {
      // screenWidth_2: document.body.clientWidth
    }
  },
  props: ['swidth'],
  watch: {
    swidth(val) {
      var linear_2 = window.getComputedStyle(this.$refs.linear_2).width.replace('px', '');
      this.scaleLinear(linear_2)
    }
  },
  mounted() {
    this.scaleLinear();
  },
  methods: {
    scaleLinear: function(w) {
      // var SvgWidth = w || window.getComputedStyle(this.$refs.linear_2).width.replace('px', '');
      var SvgWidth = 320;
      var width = 220;
      var height = 220;
      var testN = [0];
      var dataset = {
        data : [ 70 , 18 , 12 ],
        datacolor : [ "#846bb9" , "#ffc000" , "#ff1e6d"]
      };

      // var datacolor = [ "#846bb9" , "#ffc000" , "#ff1e6d"];
      var removed = d3.select(".scaleLinear_2").selectAll("svg").remove();
      var svg = d3.select(".scaleLinear_2")
            .append("svg")
            .attr("width", SvgWidth)
            .attr("height", height);
      
      var pie = d3.layout.pie();

      var piedata = pie(dataset.data);
      
      var outerRadius = 100;  //外半径
      var innerRadius = 50;  //内半径，为0则中间没有空白

      var arc = d3.svg.arc()  //弧生成器
            .innerRadius(innerRadius) //设置内半径
            .outerRadius(outerRadius);  //设置外半径
      var arc_2 = d3.svg.arc()  //弧生成器
            .innerRadius(innerRadius+10) //设置内半径
            .outerRadius(outerRadius+10);  //设置外半径
      
      // var color = d3.scale.category10();
      
      var arcs = svg.selectAll("g")
              .data(piedata)
              .enter()
              .append("g")
              .attr("transform","translate("+ (width/2) +","+ (width/2) +")");
              
      arcs.append("path")
        .attr("fill",function(d,i){
          // console.log(i)
          // return color(i);
          return dataset.datacolor[i]
        })
        .attr("d",function(d,i){
          // console.log(pie([30])[0])
          // console.log(d)
          return arc(d);
        })
        .on("mouseover",function(d,i){
            d3.select(this)
            .transition()
            .duration(300)
            .attr("d",function(d,i){
              return arc_2(d);
            });  
        })
        .on("mouseout",function(d,i){
          d3.select(this)
            .transition()
            .duration(300)
            .attr("fill", function(d) {
              return dataset.datacolor[i]
            })
            .attr("d",function(d,i){
              return arc(d);
            });  
        });
      // arcs.transition()
      //   .duration(300)
      //   .delay(function (d,i){
      //     return i * 200
      //   })
      //   .attr("d",function(d,i){
      //     return arc(d);
      //   });


      var gText = svg.append("g")
        .attr("transform",function(d,i){
          return "transform","translate(0,55)";
        })
      gText.selectAll("g")
        .data(dataset.data)
        .enter()
        .append("text")
        .attr("fill","white")
        .attr("class","fs-11")
        .attr("transform",function(d,i){
          return "transform","translate("+ (width+80) +","+ (17 + i * 40) +")";
        })
        .text(function(d){
          return d;
        });
      gText.selectAll("g")
        .data(dataset.datacolor)
        .enter()
        .append("rect")
        .attr("width", 26)
        .attr("height", 26)
        .attr("fill",function(d,i){
          return d
        })
        .attr("transform",function(d,i){
          return "transform","translate("+ (width+45) +","+ (0 + i * 40) +")";
        })
        .text(function(d){
          return d;
        });
      // console.log(dataset);
      // console.log(piedata);
    },
    widthCol: function() {
      var linear_2 = window.getComputedStyle(this.$refs.linear_2).width.replace('px', '');
      this.scaleLinear(linear_2)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.scaleLinear .axis path,.scaleLinear .axis line{
  fill:none;
  /*stroke:white;*/
  shape-rendering: crispEdges;
}
.scaleLinear .axis text{
  font-family: sens-serif;
  font-size:11px;
  fill:white;
}
</style>
