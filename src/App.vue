<template>
  <div id="app">
    <div class="appLeft text-white pos-f left0 top0 bottom0">
      <div class="logo flex-container center borderb paddingh20">
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
            <router-link to="/emoji" class="text-white"><img src="./assets/emoji/smile.svg" width="40" alt=""><!-- <i class="icon-led" style="font-size:40px;"></i> --></router-link>
          </div>
          <div style="height:100px;" class="flex-container center">
            <router-link to="/ScaleLinear" class="text-white"><i class="icon-table" style="font-size:40px;"></i></router-link>
          </div>
          <div style="height:100px;" class="flex-container center">
            <a href="/css/index.html" class="text-white"><i class="icon-css3" style="font-size:40px;"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="appRight" style="padding-left:130px;">
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
body{
  font-family: "Segoe UI","Lucida Grande",Helvetica,Arial,"Microsoft YaHei",FreeSans,Arimo,"Droid Sans","wenquanyi micro hei","Hiragino Sans GB","Hiragino Sans GB W3",FontAwesome,sans-serif;
}
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
