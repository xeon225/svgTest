<template>
  <div class="clearfix padding20">
    <div class="box-span6">
      <scaleLinear1 class="margin10 bg-color1 padding20 svgBox"></scaleLinear1>
    </div>
    <div class="box-span6">
      <scaleLinear2 class="margin10 bg-color1 padding20 svgBox"></scaleLinear2>
    </div>
    <!-- <router-link to="/ScaleLinear_1">123123123213</router-link> -->
  </div>
</template>

<script>
import scaleLinear1 from './ScaleLinear_1.vue';
import scaleLinear2 from './ScaleLinear_2.vue';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    scaleLinear1,
    scaleLinear2
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-color1{
  background: #554378;
}
</style>
