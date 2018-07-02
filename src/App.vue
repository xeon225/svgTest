<template>
  <div id="app" class="flex-container vfull">
    <div class="appLeft text-white">
      <div class="logo flex-container center borderb">
        <i class="icon-logo" style="font-size:40px;"></i>
      </div>
    </div>
    <div class="appRight flex1">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  height:100%;
}
.appLeft{
  width:130px;
  background: #7762a4;
}
.logo{
  width:130px;
  height:130px;
}
</style>
