<template >
  <div class = "scaleLinear scaleLinear_3 flex-container center" ref = "linear_3">
  </div> 
</template>

  <script>
  export default {
    name: 'ScaleLinear_3',
    data() {
      return {
        // screenWidth_1: document.body.clientWidth
      }
    },
    props: ['swidth'],
    watch: {
      swidth(val) {
        var linear_3 = window.getComputedStyle(this.$refs.linear_3).width.replace('px', '');
        this.scaleLinear(linear_3)
      }
    },
    mounted() {
      this.scaleLinear();
    },
    methods: {
      scaleLinear: function(w) {
        console.log(w)
        //画布大小

        var width = w || window.getComputedStyle(this.$refs.linear_3).width.replace('px', '');
        var height = 370;

        var dataset = [{
          country: "a",
          gdp: [
            [1, 260],
            [2, 420],
            [3, 265],
            [4, 450],
            [5, 580],
            [6, 280],
            [7, 295],
            [8, 265],
            [9, 255],
            [10, 330],
            [11, 260],
            [12, 495],
            [13, 535],
            [14, 270]
          ]
        }, {
          country: "b",
          gdp: [
            [1, 200],
            [2, 210],
            [3, 420],
            [4, 350],
            [5, 180],
            [6, 250],
            [7, 185],
            [8, 200],
            [9, 255],
            [10, 245],
            [11, 500],
            [12, 290],
            [13, 195],
            [14, 255]
          ]
        }];

        var padding = {
          top: 0,
          right: 50,
          bottom: 50,
          left: 50
        };
        var gdpmax = 0;
        //找出两组GDP中的最大值
        for (var i = 0; i < dataset.length; i++) {
          var currGdp = d3.max(dataset[i].gdp, function(d) {
            return d[1];
          });
          if (currGdp > gdpmax)
            gdpmax = currGdp;
        }
        //定义x、y轴的比例尺
        var xScale = d3.scale.linear()
          .domain([1, 14])
          .range([0, width - padding.left - padding.right]);

        var yScale = d3.scale.linear()
          .domain([0, 1000])
          .range([height - padding.bottom - padding.top, 0]);

        var linePath = d3.svg.line() //创建一个直线生成器
          .x(function(d) {
            return xScale(d[0]);
          })
          .y(function(d) {
            return yScale(d[1]);
          })
          .interpolate("basic") //插值模式,让线段变得更加圆滑
        ;

        //定义两个颜色
        var colors = [d3.rgb(255, 30, 109), d3.rgb(255, 192, 0)];
        var removed = d3.select(".scaleLinear_3").selectAll("svg").remove();
        var svg = d3.select(".scaleLinear_3")
          .append("svg")
          .attr("width", width)
          .attr("height", height);
        //添加线形元素
        var lines = svg.selectAll(".MyLine")
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
            return i * (height - padding.top - padding.bottom) / 4;
          })
          .attr("x2", function(d) {
            return width;
          })
          .attr("y2", function(d, i) {
            return i * (height - padding.top - padding.bottom) / 4;
          });
        var liness = svg.selectAll(".MyLines")
          .data([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])
          .enter()
          .append("line")
          .attr("class", "MyLine strokeFill")
          .attr("fill", "white")
          .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
          .attr("x1", function(d, i) {
            return i * ((width - (padding.left + padding.left)) / 13);

          })
          .attr("y1", function(d) {
            return 0;
          })
          .attr("x2", function(d, i) {
            return i * ((width - (padding.left + padding.left)) / 13);
          })
          .attr("y2", function(d) {
            return height;
          });

        svg.selectAll("path")
          .data(dataset)
          .enter()
          .append("path")
          .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
          .attr("class", "line")
          .attr("fill", "none")
          .attr("stroke-width", 1)
          .attr("stroke", function(d, i) {
            return colors[i];
          })
          .attr("d", function(d) {
            return linePath(d.gdp);
          });


        var dataset1 = [];
        for (var i = 0; i < dataset.length; i++) {
          for (var j = 0; j < dataset[i].gdp.length; j++) {
            dataset1.push(dataset[i].gdp[j]);
          }
        }
        svg.selectAll("circle")
          .data(dataset1)
          .enter()
          .append("circle")
          .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
          .style('fill', function(d, i) {
            return colors[dataset1.length / 2 > i ? 0 : 1]
          })
          .style("stroke", function(d, i) {
            return colors[dataset1.length / 2 > i ? 0 : 1]
          })
          .style("stroke-width", "1px")
          .attr("cx", function(d, i) {
            return xScale(d[0]);
          })
          .attr("cy", function(d, i) {
            return yScale(d[1]);
          })
          .attr('r', function() {
            return 3;
          });



        var xAxis = d3.svg.axis()
          .scale(xScale)
          // .ticks(5)
          .tickFormat(function(d) {
            return "Jun " + d
          })
          .orient("bottom");

        var yAxis = d3.svg.axis()
          .scale(yScale)
          .tickValues([0, 250, 500, 750])
          .tickFormat(function(d) {
            return d > 0 ? d + "k" : d
          })
          .orient("left");

        //添加一个g用于放x轴
        svg.append("g")
          .attr("class", "axis")
          .attr("transform", "translate(" + (padding.left + 20) + "," + (height - padding.top - padding.bottom) + ")")
          .call(xAxis);

        svg.append("g")
          .attr("class", "axis")
          .attr("transform", "translate(" + padding.left + ",-20)")
          .call(yAxis);


        svg.append('g').selectAll('text')
          .data(dataset)
          .enter()
          .append('text')
          .style('fill', function(d, i) {
            return colors[i];
          })
          .style('font-size', "1.3em")
          .attr('x', function(d, i) {
            return xScale(2013) + 10;
          })
          .attr("y", function(d, i) {
            return yScale(d.gdp[13][1]);
          })
          .attr('dy', '.3em')
          .text(function(d, i) {
            return d.country;
          })
          .attr('transform', "translate(" + padding.left + "," + padding.top + ")");

        //在不知道折线的具体长度的时候可以动态添加动画属性。
        var path = document.getElementsByClassName('line');  
        //获取class标签为line的元素
        var length = path[0].getTotalLength(); 
        var length_2 = path[1].getTotalLength();       
        //获取第一个折线的总共的长度
        var aaa = d3.selectAll('.line')
        .data([length, length_2])
        .style('stroke-dasharray', function(d, i){
          return d
        })         
        //根据上面获取的值来设置stroke-dasharray值
        .style('stroke-dashoffset', function(d, i){
          return d
        })         

        var rule = "@keyframes dash {0%{stroke-dashoffset:" + length + ";}100%{ stroke-dashoffset: 0;}  }  @keyframes dash_2 {0%{stroke-dashoffset:" + length_2 + ";}100%{ stroke-dashoffset: 0;}  }";
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = rule;
        document.getElementsByTagName('head')[0].appendChild(style);
        path[0].style.animation = "dash 5s 1 linear forwards";
        path[1].style.animation = "dash_2 5s 1 linear forwards";

      }
    }
  } 
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

  .scaleLinear.axis path, .scaleLinear.axis line {
    fill: none;
    /*stroke:white;*/
    shape - rendering: crispEdges;
  }
  .scaleLinear.scaleLinear_3 {
    background: #6a5595;
    height:370px;
  }
  .scaleLinear.scaleLinear_3 svg{
    position:absolute;
    top:0;
    left:0;
  }
  .scaleLinear .axis text{
    font-family: sens-serif;
    font-size:11px;
    fill:white;
  }
</style>