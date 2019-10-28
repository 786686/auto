import Vue from 'vue'
import App from './App.vue'
import VueAMap from 'vue-amap';
// import { lazyAMapApiLoaderInstance } from 'vue-amap';
import { router } from './router';

import Axios from 'axios'
import VueAxios from 'vue-axios'

import Mixins from './mixins'
// import "";
// import "http://webapi.amap.com/demos/js/liteToolbar.js";

Vue.config.productionTip = false
Vue.use(VueAxios, Axios);
Vue.use(VueAMap);
Vue.mixin(Mixins);

// VueAMap.initAMapApiLoader({
//   key: 'YOUR_KEY',
//   plugin: ['Autocomplete', 'PlaceSearch', 'Scale', 'OverView', 'ToolBar', 'MapType', 'PolyEditor', 'AMap.CircleEditor'],
//   // 默认高德 sdk 版本为 1.4.4
//   v: '1.4.4'
// });


VueAMap.initAMapApiLoader({
  key: '1d44abe3e9b2069616df93fab7f6d4e2',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  uiVersion: '1.0', // ui库版本，不配置不加载,
  v: '1.4.4'
});

// lazyAMapApiLoaderInstance.load().then(() => {
//     this.map = new VueAMap.Map('amapContainer', {
//     center: new VueAMap.LngLat(22.5233400000,113.3778610000)
//   });
// });


  // center: new VueAMap.centerAndZoom("中大科技园A座",15)
  // center: new VueAMap.LngLat(121.59996, 31.197646)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')