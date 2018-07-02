<template>
  <div class="scaleLinear">
    
  </div>
</template>

<script>
export default {
  name: 'ScaleLinear',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.scaleLinear();
  },
  methods: {
    scaleLinear:function(){
      var width = 600;
      var height = 600;
      var svg = d3.select(".scaleLinear").append("svg")
                .attr("width",width)
                .attr("height",height)
      var rects = svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr({
          "x":function(d,i){
            return 20+i*160/dataset.length;
          },
          "y":function(d,i){
            return 20
          },
          "width":20,
          "height":100,
          "fill":"none"
        })
      rects.style({
        "stroke-width":5,
        "stroke":function(d,i){
          return "rgb("+10*d+","+10*(25-(d*3))+","+d*2+")";
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
