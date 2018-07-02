<template>
  <div class="clearfix padding20">
    <scaleLinear1 class="box-span6 margin10 bg-color1 padding10"></scaleLinear1>
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
.bg-color1{
  background: #554378;
}
</style>
