<template>
  <div class="info-page" @scroll="onScroll($event)">
    <top />
    <!-- 轮播图 -->
    <div class="banner">
      <div class="swiper-container banner-swiper-container info-swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="swiper-slide-in"></div>
            <img src="../assets/banner.jpg" alt class="item-cover" />
            <div class="slide-bottom">
              <h2>硅谷早知道第三季丨S3E30无人车，陷入泥淖还是光明在即？</h2>
              <div class="slide-bottom-in">
                <div class="slide-l">蔡鹏程 • 2019-10-18 15:51</div>
                <!-- <div class="slide-r"><img src="" alt=""> 投资 ， 宏观 ， VC ， 投融资</div> -->
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiper-slide-in"></div>
            <img src="../assets/banner.jpg" alt class="item-cover" />
            <div class="slide-bottom">
              <h2>硅谷早知道第三季丨S3E30无人车，陷入泥淖还是光明在即？</h2>
              <div class="slide-bottom-in">
                <div class="slide-l">蔡鹏程 • 2019-10-18 15:51</div>
                <!-- <div class="slide-r"><img src="" alt=""> 投资 ， 宏观 ， VC ， 投融资</div> -->
              </div>
            </div>
          </div>
        </div>
        <!-- Add Arrows -->
        <div class="btns-info">
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    </div>

    <!-- 资讯 -->
    <div class="info">
      <div class="info-l">
        <div class="top-nav">
          <ul :style="{ marginLeft: -navIndex * 95 + 'px'}">
            <li
              v-for="(item,index) in classList"
              :key="index"
              @click="infoType(item.id)"
              :class="{cur:feedId == item.id}"
            >{{item.name}}</li>
          </ul>
          <div class="info-arrows" v-if="classList.length">
            <span
              class="icon-arrow-left"
              :class="{'icon-arrow-prevest':navIndex == 0}"
              @click="navArrow('left')"
            ></span>
            <span
              class="icon-arrow-right"
              :class="{'icon-arrow-lastest':navIndex == classList.length - 7}"
              @click="navArrow('right')"
            ></span>
          </div>
        </div>
        <div class="info-list" ref="scrollTopList">
          <ul>
            <li v-for="(item,index) in infoList" :key="index">
              <a :href="item.url" target="_blank">
                <img :src="item.cover" alt class="icon-cover" />
                <div class="item">
                  <div class="item-top">
                    <div class="item-title">{{item.title}}</div>
                    <div class="item-intro">这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍</div>
                  </div>
                  <div class="item-bottom">
                    <!-- <div class="item-source">神盾局</div>
                    <div class="item-time"> -->
                      <!-- <img src="" alt="时钟icon"> -->
                      <!-- 46分钟前
                    </div> -->
                  </div>
                </div>
              </a>
            </li>
          </ul>
          <div class="loading-more" @click="loadMore">加载更多</div>
        </div>
      </div>
      <div class="info-r">
        <div class="info-r-top" v-if="hotList.length">
          <h2>
            <span>//</span>最新资讯
          </h2>
          <ul>
            <li v-for="(item,index) in hotList" :key="index">
              <a :href="item.url" target="_blank">
                <i></i>
                {{item.title}}
              </a>
            </li>
          </ul>
        </div>
        <div class="info-r-in" v-if="hotList.length">
          <h2><img src="../assets/hot.png" alt="">热门文章</h2>
          <ul class="hot-info-list">
            <li v-for="(item,index) in hotList" :key="index">
              <a :href="item.url" target="_blank">{{item.title}}</a>
            </li>
          </ul>
          <div class="hot-arrows" @click="hotMore"></div>
        </div>
      </div>
    </div>
    <bottom />
  </div>
</template>
<script>
import Swiper from "swiper";
import top from "./header";
import bottom from "./footer";
export default {
  components: {
    top,
    bottom
  },
  data() {
    return {
      classList: [],
      infoList: [],
      server: "http://47.112.217.67:20005/",
      hotList: [],
      feedId: "",
      navIndex: 0,
      hotPageNumber:1,
      hotPageSize:20,
      pageNumber: 1,
      pageSize: 15
    };
  },
  methods: {
    loadMore(){
      if(this.pageNumber == 1){
        this.pageNumber = 4;
      }else{
        this.pageNumber++;
      }      
      this.pageSize = 5;
      this.getInfoList();
    },
    onScroll(e) {
      console.log(1);
      console.log(2);
      console.log(e.target.scrollTop);
      return;
      // let listHeight = this.myScrollList.offsetHeight; //列表总高度
      // let listScrollTop = e.target.scrollTop + this.myScroll.offsetHeight; //当前滚动条位置

      // if (this.state == 0 && listHeight - listScrollTop < 100) {
      //   this.bottomCallback();
      // }

      // if (this.getScrollTop) this.getScrollTop(e.target.scrollTop); //返回X，Y
    },
    hotMore(){
      if(this.hotPageNumber == 1){
        this.hotPageNumber = 5;
      }else{
        this.hotPageNumber++;
      }      
      this.hotPageSize = 5;
      this.getHotList();
    },
    // 导航箭头
    navArrow(direction) {
      if (direction == "left") {
        if (this.navIndex != 0) {
          this.navIndex--;
        } else {
          this.navIndex = 0;
        }
      } else {
        if (this.navIndex != this.classList.length - 7) {
          this.navIndex++;
        } else {
          this.navIndex = this.classList.length - 7;
        }
      }
    },
    infoType(id) {
      this.feedId = id;
      this.infoList = [];
      this.getInfoList();
    },
    async getClassList() {
      const vm = this;
      const url = `/api/information/feedList.json`;
      let formData = new FormData();
      formData.append("pageSize", 10);
      formData.append("pageNumber", 1);
      await vm.axios.post(url, formData).then(res => {
        vm.classList = res.data.data.feedDTOList;
        if (vm.classList.length > 0) {
          vm.feedId = vm.classList[0].id;
          vm.getInfoList();
        }
      });
    },
    // 资讯列表
    async getInfoList() {
      const vm = this;
      const url = `/api/information/informationList.json`;
      let formData = new FormData();
      formData.append("pageNumber", this.pageNumber);
      formData.append("pageSize", this.pageSize);
      formData.append("feedId", vm.feedId);
      await vm.axios.post(url, formData).then(res => {
        vm.infoList = vm.infoList.concat(res.data.data.crawlDataDTOList);
      });
    },
    getHotList() {
      const vm = this;
      const url = `/api/information/hotArticleList.json`;
      let formData = new FormData();
      formData.append("pageSize", this.hotPageSize);
      formData.append("pageNumber", this.hotPageNumber);
      vm.axios.post(url, formData).then(res => {
        vm.hotList = vm.hotList.concat(res.data.data.hotArticleDTOList);
      });
    },
    handleScroll() {

      console.log(1);
      // let scrollTop = this.$refs.scrollTopList.scrollTop,
      //   clientHeight = this.$refs.scrollTopList.clientHeight,
      //   scrollHeight = this.$refs.scrollTopList.scrollHeight,
      //   height = 50; //根据项目实际定义
      // if (scrollTop + clientHeight >= scrollHeight - height) {
      //   if (this.pageSize > this.total) {
      //     return false;
      //   } else {
      //     this.pageSize = this.pageSize + 10; //显示条数新增
      //     this.getpageList(); //请求列表list 接口方法
      //   }
      // } else {
      //   return false;
      // }
    },
    throttle(func, wait) {
      let lastTime = null;
      let timeout;
      return () => {
        let context = this;
        let now = new Date();
        let arg = arguments;
        if (now - lastTime - wait > 0) {
          if (timeout) {
            clearTimeout(timeout);
            timeout = null;
          }
          func.apply(context, arg);
          lastTime = now;
        } else if (!timeout) {
          timeout = setTimeout(() => {
            func.apply(context, arg);
          }, wait);
        }
      };
    }
  },
  mounted() {
    this.$refs.scrollTopList.addEventListener(
      "scroll",
      this.throttle(this.handleScroll, 500),
      true
    );
    this.getClassList();
    // this.getInfoList();
    this.getHotList();
    let that = this;
    that.$nextTick(function() {
      new Swiper(".info-swiper-container", {
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
    });
  }
};
</script>
