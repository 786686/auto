<template>
  <div>
    <top />

    <!-- 轮播图 -->
    <div class="banner">
      <div class="swiper-container banner-swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"></div>
          <div class="swiper-slide"></div>
          <div class="swiper-slide"></div>
          <div class="swiper-slide"></div>
        </div>
      </div>
      <!-- <div class="index-bottom"></div> -->
    </div>
    <!-- 服务模块 -->
    <div class="module-service">
      <h1 class="module-tit">OUR SERVICES-我们的服务</h1>
      <div class="service-list">
        <ul>
          <li>
            <img src="../assets/icon-app.png" alt />
            <h2>APP定制开发</h2>
            <p>成熟的团队，原生APP开发，功能全客制化。覆盖多个行业数十个成功案例。提供开发架设维护一站式的服务，兼容性强，运行稳定。</p>
          </li>
          <li>
            <img src="../assets/icon-wechat.png" alt />
            <h2>公众号&小程序定制开发</h2>
            <p>微信小程序、公众号（服务号、订阅号）开发。微信商城可自定义分销，微信与APP功能跨平台同步开发。</p>
          </li>
          <li>
            <img src="../assets/icon-company.png" alt />
            <h2>企业官网设计</h2>
            <p>官网定制开发，全方位树立企业品牌形象，提升企业信誉，提高品牌效应功能，持续传播企业文化，不断扩展销售渠道。</p>
          </li>
          <li>
            <img src="../assets/icon-sass.png" alt />
            <h2>Saas平台</h2>
            <p>使用Saas模板平台，能快速，高效的为企业搭建信息化所需要的所有网络基础设施，减低企业的试错成本。</p>
          </li>
          <li>
            <img src="../assets/icon-service.png" alt />
            <h2>企业转型咨询服务</h2>
            <p>应用行业成功案例的经验，结合互联网工具，帮助企业制定符合企业发展的营运方案。提供高级别保障，助企业稳健上云。</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 资讯模块 -->
    <div class="module-info">
      <h1 class="module-tit">Information-资讯</h1>

      <div class="index-info-list">
        <div class="swiper-container index-info-swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in infoList" :key="index">
              <ul>
                <li v-for="(childItem,i) in item" :key="i">
                  <a :href="childItem.url" target="_blank">
                    <img :src="childItem.cover" alt />
                    <p>{{childItem.title}}</p>
                  </a>
                </li>
              </ul>
              
              <!-- Add Arrows -->
              <div class="btns-index-info-top">
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
              </div>
              <!-- <img src="../assets/top_bottom.png" alt="" class="icon-change">
              <img src="../assets/top_bottom.png" alt="" class="icon-change"> -->
            </div>
          </div>
        </div>
      </div>

      <div class="info-sec-list">
        <ul>
          <li v-for="(item,index) in moreList" :key="index">
            <h2>
              {{item.name}}
              <a
                href="javascript:void(0);"
                @click="handleRouter('info')"
                class="item-more"
              >更多>></a>
            </h2>
            <dl>
              <dd v-for="(childItem,i) in item.list" :key="i">
                <a target="_blank" :href="childItem.url">{{childItem.title}}</a>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
    <!-- 产品模块 -->
    <div class="module-product">
      <h1 class="module-tit">CASE WORKS-成功案例</h1>
      <!-- <div class="product-nav">
            <ul>
                <li class="cur">全部</li>
                <li>电商</li>
                <li>资讯</li>
                <li>电商</li>
                <li>资讯</li>
                <li>电商</li>
                <li>资讯</li>
            </ul>
      </div>-->
      <div class="product-list">
        <div class="swiper-container product-swiper-container">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              :style="{backgroundImage: 'url('+server+item.projectImage+')'}"
              v-for="(item,index) in projectList"
              :key="index"
            >
              <div class="swiper-slide-in"></div>
              <div class="swiper-slide-in-in">
                <h2>{{item.name}}</h2>
                <img :src="server+item.qrCode" alt class="product-code" />
              </div>
            </div>
          </div>
        </div>
        <!-- Add Arrows -->
        <div class="btns-index-info">
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    </div>
    <!-- 合作模块 -->
    <div class="module-cooperation">
      <h1 class="module-tit">COOPERATIVE INCUBATION PROJECT-合作孵化项目</h1>
      <div class="cooperation-info">
        <div class="cooperation-product">
          <img src="../assets/product1.png" alt />
        </div>
        <div class="cooperation-product-m">
          <img src="../assets/product2.png" alt />
        </div>
        <div class="cooperation-product-info">
          <h2>
            <img src="../assets/product-code.png" alt />找找茶
          </h2>
          <div class="cooperation-product-intro">
            <p>找找茶服务平台是专门为普洱茶行业量身定制的终端服务咨询的服务管理平台，专注于普洱茶的行情走势、利用大数据动态感知市场</p>
            <div class="cooperation-product-intro-in">
              <div class="cooperation-product-intro-l">
                <p style="text-indent: 0;">对新老普洱茶的选择。</p>
                <p>能为商家提供一站式的信息共享服务，使用平台数据化采集和专业性的分析，制定出符合市场的商业模式。</p>
                <p>对于用户，平台能提供单品价格相对透明化，不同时间段的价格波动线路图，结合平台价格走向，做出贴切自身的计划。</p>
              </div>
              <img src="../assets/product-code.png" alt />
            </div>
          </div>
          <div class="cooperation-second-tit">找找茶优势</div>
          <div class="cooperation-second-list">
            <ul>
              <li>
                <img src="../assets/icon-cooperation1.png" alt />
                实时大数据分析
              </li>
              <li>
                <img src="../assets/icon-cooperation2.png" alt />
                精准定位服务
              </li>
              <li>
                <img src="../assets/icon-cooperation3.png" alt />
                互联网+传统行业整合
              </li>
              <li>
                <img src="../assets/icon-cooperation4.png" alt />
                行业沉淀
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 关于模块 -->
    <div class="module-about">
      <h1 class="module-tit">ABOUT US-关于我们</h1>
      <div class="about-info">
        <div class="about-l">
          <p>广州腾信智联网络科技有限公司（以下简称”腾信智联”）坐落在广州市新港西路135号中山大学科技园A座A1310A，是一家专业从事移动互联网软件研发、信息系统集成，以及提供企业转型咨询解决方案的技术性企业，同时也是中山大学科技园高新技术企业孵化的入园企业。</p>
          <p>
            腾信智联由一支热爱并理解移动互联网的技术骨干团队所组成。对互联网有自己和行业的独特认识，我们打造的产品和服务不仅仅重在考量技术先进性和创新性，更重在把
            技术和市场完美的结合在一起，具备充分去考虑客户所在行业的新需要、新趋势，寻找把技术和行业实际完美结合的点，做到对行业发展有前瞻性。
          </p>
          <p>一直以来，我们将公司的市场口碑视为企业的生命。我们的目的不仅仅只是做好某一项业务，而是要通过一项项业务去打动客户，去建立市场口碑，去打造品牌，去和客户建立长久稳定的合作关系，因此，我们的客户群里，大多数都是经人引荐过来的，或是合作过多次的老客户，更有客户跟我们建立战略伙伴合作关系，做到技术和资源的整合，达到共赢的局面。</p>
        </div>
        <div class="about-r">
          <!-- <el-amap vid="amap"></el-amap> -->
          <!-- <el-amap class="amap-box" :vid="'amap-vue'"></el-amap> -->
          <!-- <div id="container" tabindex="0"></div> -->

          <!-- <el-amap
          :vid="'amap-vue'"
            
            :center="center"
            :amap-manager="amapManager"
            :zoom="zoom"
            class="amap-demo"
          ></el-amap> -->
          
            <!-- :marker="marker" -->
        </div>
      </div>
    </div>
    <bottom />
  </div>
</template>

<script>
// 商桥
// var _hmt = _hmt || [];
// (function() {
//   var hm = document.createElement("script");
//   hm.src = "https://hm.baidu.com/hm.js?5cf66bf81c1011e1db5f342cd6eb51f7";
//   var s = document.getElementsByTagName("script")[0];
//   s.parentNode.insertBefore(hm, s);
// })();

import Swiper from "swiper";
import top from "./header";
import bottom from "./footer";
import VueAMap from "vue-amap";

    import { amapManager } from 'vue-amap';

VueAMap.initAMapApiLoader({
  key: '1d44abe3e9b2069616df93fab7f6d4e2',
  // plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType'],
    plugin: ['Autocomplete', 'PlaceSearch', 'Scale', 'OverView', 'ToolBar', 'MapType', 'PolyEditor', 'AMap.CircleEditor'],
  uiVersion: '1.0.11' // 版本号
});

// let amapManager = new VueAMap.AMapManager();
// import { AMap } from "http://webapi.amap.com/maps?v=1.3&key=1d44abe3e9b2069616df93fab7f6d4e2&plugin=AMap.Autocomplete";
export default {
  components: {
    top,
    bottom
  },
  data() {
    return {
      zoom: 5,
      center: [22.5233400000,113.3778610000],
      amapManager,
      // marker:new VueAMap.Marker({
      //   map : VueAMap,
      //   bubble : true
      // }),
      // events: {
      //   init(map) {
      //     AMapUI.loadUI(["overlay/SimpleMarker"], function(SimpleMarker) {
      //       new SimpleMarker({
      //         iconLabel: "A",
      //         iconStyle: "red",
      //         map: map,
      //         position: map.getCenter()
      //       });
      //     });
      //   }
      // },
      server: "http://47.112.217.67:20005/",
      infoList: [],
      classList: [],
      moreInfo: [],
      projectList: [],
      moreList: []
    };
  },
  methods: {
    // 获取等多资讯信息
    getMoreInfo() {
      const vm = this;
      const url = `/api/information/feedList.json`;
      let formData = new FormData();
      formData.append("pageSize", 10);
      formData.append("pageNumber", 1);
      vm.axios.post(url, formData).then(res => {
        for (let i in res.data.data.feedDTOList) {
          if (i < 3) {
            let id = res.data.data.feedDTOList[i].id;
            let name = res.data.data.feedDTOList[i].name;
            vm.getSecList(id, name);
          } else {
            break;
          }
        }
      });
    },
    async getSecList(id, name) {
      const vm = this;
      const url = `/api/information/informationList.json`;
      let formData = new FormData();
      formData.append("pageNumber", 1);
      formData.append("pageSize", 10);
      formData.append("feedId", id);
      await vm.axios.post(url, formData).then(res => {
        let data = res.data.data.crawlDataDTOList;
        let obj = {};
        obj.name = name;
        obj.list = [];
        for (let i in data) {
          if (i < 5) {
            obj.list.push(data[i]);
          } else {
            break;
          }
        }
        vm.moreList.push(obj);
      });
    },
    // 资讯列表
    getInfoList() {
      const vm = this;
      const url = `/api/information/informationList.json`;
      let formData = new FormData();
      formData.append("pageNumber", 1);
      formData.append("pageSize", 25);
      vm.axios.post(url, formData).then(res => {
        let data = res.data.data.crawlDataDTOList;
        let arr = [];
        let index = 1;

        if (data.length % 5 != 0) {
          let len = parseInt(data.length / 5);
          if (len > 0) {
            for (let i in data) {
              arr.push(data[i]);
              if (i == index * 5 - 1) {
                vm.infoList.push(arr);
                arr = [];
                index++;
              }
              //   当加载完所有的5的数据后，余下的再全部一次性加载
              if (len == index - 1) {
                if (i == (index - 1) * 5 + (data.length % 5) - 1) {
                  vm.infoList.push(arr);
                }
              }
            }
          } else {
            //   数量不到5的情况；
            for (let i in data) {
              arr.push(data[i]);
              if (i == (data.length % 5) - 1) {
                vm.infoList.push(arr);
              }
            }
          }
        } else {
          for (let i in data) {
            arr.push(data[i]);
            if (i == index * 5 - 1) {
              vm.infoList.push(arr);
              arr = [];
              index++;
            }
          }
        }

        setTimeout(function() {
          new Swiper(".index-info-swiper-container", {
            direction: "vertical",
            loop: true, //形成环路（即：可以从最后一张图跳转到第一张图
            autoplay: {
              delay: 3000 /*每隔3秒自动播放*/,
              disableOnInteraction: false
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            }
          });
        }, 200);
      });
    },

    getProjectList() {
      const vm = this;
      const url = `/api/index/projectExampleList.json`;
      let formData = new FormData();
      formData.append("classificationId", 0);
      vm.axios.post(url, formData).then(res => {
        vm.projectList = res.data.data.projectExampleListDTO;
        setTimeout(function() {
          new Swiper(".product-swiper-container", {
            slidesPerView: 5,
            spaceBetween: 25,
            loop: true, //形成环路（即：可以从最后一张图跳转到第一张图
            autoplay: {
              delay: 3000 /*每隔3秒自动播放*/,
              disableOnInteraction: false
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            }
          });
        }, 200);
      });
    },
    getClassList() {
      const vm = this;
      const url = `/api/index/classificationList.json`;
      let formData = new FormData();
      formData.append("classificationId", 0);
      vm.axios.post(url, formData).then(res => {
        vm.classList = res.data.data.classificationListDTOList;
        console.log(vm.classList);
      });
    }
  },
  mounted() {
    this.getInfoList();
    this.getProjectList();
    // this.getClassList();
    this.getMoreInfo();
    var that = this;
    that.$nextTick(function() {
      new Swiper(".banner-swiper-container", {
        loop: true, //形成环路（即：可以从最后一张图跳转到第一张图
        autoplay: {
          delay: 3000 /*每隔3秒自动播放*/,
          disableOnInteraction: false
        }
      });
    });

    // var map = new AMap.Map("container", {
    //   zoom: 14,
    //   resizeEnable: true
    // });

    //为地图注册click事件获取鼠标点击出的经纬度坐标
    // var clickEventListener = map.on("click", function(e) {
    //   document.getElementById("locLng").value = e.lnglat.getLng();
    //   document.getElementById("locLat").value = e.lnglat.getLat();
    // });

    // AMap.plugin("AMap.Geocoder", function() {
    //   var geocoder = new AMap.Geocoder({
    //     city: "010" //城市，默认：“全国”
    //   });
    //   var marker = new AMap.Marker({
    //     map: map,
    //     bubble: true
    //   });
    //   var addlocation = document.getElementById("addlocation");
    //   var message = document.getElementById("message");
    //   map.on("click", function(e) {
    //     marker.setPosition(e.lnglat);
    //     geocoder.getAddress(e.lnglat, function(status, result) {
    //       if (status == "complete") {
    //         addlocation.value = result.regeocode.formattedAddress;
    //         message.innerHTML = "";
    //       } else {
    //         message.innerHTML = "无法获取地址";
    //       }
    //     });
    //   });

    //   addlocation.onchange = function(e) {
    //     var address = addlocation.value;
    //     geocoder.getLocation(address, function(status, result) {
    //       if (status == "complete" && result.geocodes.length) {
    //         marker.setPosition(result.geocodes[0].location);
    //         map.setCenter(marker.getPosition());
    //         message.innerHTML = "";
    //       } else {
    //         message.innerHTML = "无法获取位置";
    //       }
    //     });
    //   };

    //   var auto = new AMap.Autocomplete({
    //     input: "addlocation"
    //   });
    //   AMap.event.addListener(auto, "select", select); //注册监听，当选中某条记录时会触发
    //   function select(e) {
    //     if (e.poi && e.poi.location) {
    //       map.setZoom(15);
    //       map.setCenter(e.poi.location);
    //       //添加marker
    //       marker = new AMap.Marker({
    //         map: map,
    //         position: e.poi.location
    //       });
    //       map.setCenter(marker.getPosition());
    //     }
    //   }
    // });
  }
};
</script>