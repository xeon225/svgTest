<template>
  <div>
    <div class="clearfix">
      <div class="box-span12">
        <ledAdd class="margint20 marginh20" :swidth="screenWidth"></ledAdd>
        <ledShow :swidth="screenWidth"></ledShow>
        <ledNum :swidth="screenWidth"></ledNum>
      </div>
    </div>
  </div>
</template>

<script>
import ledAdd from './ledAdd.vue';
import ledShow from './ledShow.vue';
import ledNum from './ledNum.vue';

export default {
  name: 'led',
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
    ledAdd,
    ledShow,
    ledNum
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-color1{
  background: #554378;
}

</style>
