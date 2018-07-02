<template>
  <div class="hello">
    <scaleLinear1></scaleLinear1>
    <!-- <router-link to="/ScaleLinear_1">123123123213</router-link> -->
  </div>
</template>

<script>
import scaleLinear1 from './ScaleLinear_1.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    scaleLinear1
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
