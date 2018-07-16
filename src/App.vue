<template>
  <div id="app" class="flex-container vfull">
    <div class="appLeft text-white">
      <div class="logo flex-container center borderb">
        <img :src="weather[Math.floor(Math.random()*7)]" alt="">
        <!-- <img src="./assets/sun.svg" alt=""> -->
        <!-- <i class="icon-logo" style="font-size:40px;"></i> -->
      </div>
      <div class="text-white">
        <div>
          <div style="height:100px;" class="flex-container center">
            <router-link to="/led" class="text-white"><i class="icon-led" style="font-size:40px;"></i></router-link>
          </div>
          <div style="height:100px;" class="flex-container center">
            <router-link to="/ScaleLinear" class="text-white"><i class="icon-nav_yhxwfx" style="font-size:40px;"></i></router-link>
          </div>
        </div>
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
  data(){
    return {
      weather:[
       require("./assets/sun.svg")
      ,require("./assets/cloudy.svg")
      ,require("./assets/fog.svg")
      ,require("./assets/snow.svg")
      ,require("./assets/thundert.svg")
      ,require("./assets/wind.svg")]
    }
  },
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
