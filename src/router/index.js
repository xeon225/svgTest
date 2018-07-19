import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import ScaleLinear from '@/components/ScaleLinear';
import ScaleLinear_1 from '@/components/ScaleLinear_1';
import ScaleLinear_2 from '@/components/ScaleLinear_2';
import ScaleLinear_3 from '@/components/ScaleLinear_3';
import Led from '@/components/led';
import Emoji from '@/components/emoji';

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/ScaleLinear',
    name: 'ScaleLinear',
    component: ScaleLinear
  }, {
    path: '/ScaleLinear_1',
    name: 'ScaleLinear_1',
    component: ScaleLinear_1
  }, {
    path: '/ScaleLinear_2',
    name: 'ScaleLinear_2',
    component: ScaleLinear_2
  }, {
    path: '/ScaleLinear_3',
    name: 'ScaleLinear_3',
    component: ScaleLinear_3
  }, {
    path: '/Led',
    name: 'Led',
    component: Led
  }, {
    path: '/Emoji',
    name: 'Emoji',
    component: Emoji
  }]
})