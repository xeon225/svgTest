<template>
  <div>
    <div class="clearfix">
      <div class="box-span12">
        <scaleLinear3 class="bg-color1" :swidth="screenWidth"></scaleLinear3>
      </div>
    </div>
    <div class="clearfix padding10">
      <div class="box-span6">
        <scaleLinear1 class="margin10 bg-color1 padding20 svgBox" :swidth="screenWidth"></scaleLinear1>
      </div>
      <div class="box-span6">
        <scaleLinear2 class="margin10 bg-color1 padding20 svgBox" :swidth="screenWidth"></scaleLinear2>
      </div>
      <!-- <router-link to="/ScaleLinear_1">123123123213</router-link> -->
    </div>
  </div>
</template>

<script>
import scaleLinear1 from './ScaleLinear_1.vue';
import scaleLinear2 from './ScaleLinear_2.vue';
import scaleLinear3 from './ScaleLinear_3.vue';

export default {
  name: 'HelloWorld',
  data() {
    return {
      screenWidth: document.body.clientWidth
    }
  },
  mounted() {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
      })()
    }
  },
  components: {
    scaleLinear1,
    scaleLinear2,
    scaleLinear3
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-color1{
  background: #554378;
}
</style>
