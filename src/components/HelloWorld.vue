<template>
  <div class="flex-container left padding10">
    <div style="width:100px;height:100px;" class="flex-container center bg-color1 margin10">
      <router-link to="/led" class="text-white"><i class="icon-led" style="font-size:40px;"></i></router-link>
    </div>
    <div style="width:100px;height:100px;" class="flex-container center bg-color1 margin10">
      <router-link to="/ScaleLinear" class="text-white"><i class="icon-nav_yhxwfx" style="font-size:40px;"></i></router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data() {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-color1{
  background: #554378;
}
</style>
