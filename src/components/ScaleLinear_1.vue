<template>
  <div class="scaleLinear scaleLinear_1 flex-container center" ref="linear_1">
    
  </div>
</template>

<script>
export default {
  name: 'ScaleLinear_1',
  data() {
    return {
      // screenWidth_1: document.body.clientWidth
    }
  },
  props: ['swidth'],
  watch: {
    swidth(val) {
      var linear_1 = window.getComputedStyle(this.$refs.linear_1).width.replace('px', '');
      this.scaleLinear(linear_1)
    }
  },
  mounted() {
    this.scaleLinear();
  },
  methods: {
    scaleLinear: function(w) {
      //画布大小
      var width = w || window.getComputedStyle(this.$refs.linear_1).width.replace('px', '');
      var padding = {
        left: 30,
        right: 30,
        top: 20,
        bottom: 20
      };
      width = width - 40;
      var height = 200;
      //在 body 里添加一个 SVG 画布 
      var removed = d3.select(".scaleLinear_1").selectAll("svg").remove();
      var svg = d3.select(".scaleLinear_1")
        .selectAll("svg")
        .data([1])
        .enter()
        .append("svg")
        .attr("width", width)
        .attr("height", height + 20);
      var g = svg.append("g")
        .attr("transform", "translate(0,20)");
      //画布周边的空白


      //定义一个数组
      var dataset = [{
        data: 90,
        color: "#846bb9"
      }, {
        data: 45,
        color: "#ae91ec"
      }, {
        data: 20,
        color: "#ffc000"
      }, {
        data: 5,
        color: "#ff1e6d"
      }];
      //x轴的比例尺
      var xScale = d3.scale.ordinal()
        .domain(d3.range(dataset.length))
        .rangeRoundBands([0, width - padding.left - padding.right]);

      //y轴的比例尺
      var yScale = d3.scale.linear()
        .domain([0, 100])
        .range([height - padding.top - padding.bottom, 0]);

      //定义x轴
      var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom")
        .tickFormat(function(d) {
          return d > 0 ? d + " Repeat" : "New";
        });

      //定义y轴
      var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left")
        .tickValues([0, 25, 50, 75, 100]);

      //矩形之间的空白
      var rectPadding = 20;

      //添加线形元素
      var lines = g.selectAll(".MyLine")
        .data([1, 2, 3, 4, 5])
        .enter()
        .append("line")
        .attr("class", "MyLine strokeFill")
        .attr("fill", "white")
        .attr("transform", "translate(0," + padding.top + ")")
        .attr("x1", function(d) {
          return 0;
        })
        .attr("y1", function(d, i) {
          return i * height / 5;
        })
        .attr("x2", function(d) {
          return width;
        })
        .attr("y2", function(d, i) {
          return i * height / 5;
        });

      //添加矩形元素
      var rects = g.selectAll(".MyRect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("class", "MyRect")
        .attr("fill", function(d, i) {
          return d.color
        })
        .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
        .attr("x", function(d, i) {
          return xScale(i) + rectPadding / 2;
        })
        .attr("y", function(d) {
          return (yScale(d.data) + height - padding.top - padding.bottom - yScale(d.data));
        })
        .attr("width", xScale.rangeBand() - rectPadding)
        .attr("height", 0)
        .on("mouseover",function(d,i){
            d3.select(this)
              .transition()
              .duration(200)
              .style("fill-opacity",0.7);
        })
        .on("mouseout",function(d,i){
            d3.select(this)
              .transition()
              .duration(200)
              .style("fill-opacity",1);
        });
      rects.transition()
        .duration(300)
        .delay(function (d,i){
          return i * 200
        })
        .attr("y", function(d) {
          return yScale(d.data);
        })
        .attr("height", function(d) {
          return height - padding.top - padding.bottom - yScale(d.data);
        })

      //添加文字元素
      // var texts = g.selectAll(".MyText")
      //   .data(dataset)
      //   .enter()
      //   .append("text")
      //   .attr("class","MyText")
      //   .attr("transform","translate(" + padding.left + "," + padding.top + ")")
      //   .attr("x", function(d,i){
      //     return xScale(i) + rectPadding/2;
      //   } )
      //   .attr("y",function(d){
      //     return yScale(d);
      //   })
      //   .attr("dx",function(){
      //     return (xScale.rangeBand() - rectPadding)/2;
      //   })
      //   .attr("dy",function(d){
      //     return 20;
      //   })
      //   .text(function(d){
      //     return d;
      //   });

      //添加x轴
      g.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(" + padding.left + "," + (height - padding.bottom) + ")")
        .call(xAxis);

      //添加y轴
      g.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(" + padding.left + ",0)")
        .call(yAxis);
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
