<template>
  <div>
    <div class="clearfix">
      <div class="box-span12">
        <emojiAdd class="margint20 marginh20" :swidth="screenWidth"></emojiAdd>
        <emojiShow class="margint20 marginh20" :swidth="screenWidth"></emojiShow>
        <!-- <ledNum :swidth="screenWidth"></ledNum> -->
      </div>
    </div>
  </div>
</template>

<script>
import emojiAdd from './emojiAdd.vue';
import emojiShow from './emojiShow.vue';
// import ledNum from './ledNum.vue';

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
    emojiAdd,
    emojiShow
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-color1{
  background: #554378;
}

</style>
