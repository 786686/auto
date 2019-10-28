<template>
  <div>
    <!-- 底部模块 -->
    <footer>
      <div class="footer-in">
        <div class="footer-tit">对接过平台</div>
        <div class="platform">
          <img src="../assets/icon-plat.png" alt />
        </div>
        <div class="footer-tit">友情链接</div>
        <div class="link-list">
          <ul>
            <li>
              <a href="https://www.qq.com">
                <img src="../assets/icon-link-tengxun.png" alt />
              </a>
            </li>
            <li>
              <a href="https://www.aliyun.com">
                <img src="../assets/icon-link-aliyun.png" alt />
              </a>
            </li>
            <li>
              <a href="https://www.huaweicloud.com/">
                <img src="../assets/icon-link-huaweiyun.png" alt />
              </a>
            </li>
            <li>
              <a href="https://www.iflytek.com/">
                <img src="../assets/icon-link-xunfei.png" alt />
              </a>
            </li>
          </ul>
        </div>
        <div class="copyright">COPYRIGHT © 2004-2019 广州腾信智联网络科技有限公司版权所有 All RIGHTS RESERVED</div>
        <div class="records">
          <img src="../assets/icon-police.png" alt />粤ICP备17015940号-1
        </div>
      </div>
    </footer>

    <div class="online" v-if="concatPop">
      <div class="online-in">
        <div class="online-l">
          <!-- <img src="" alt=""> -->
          联系我们
          <span class="icon-arrow"></span>
        </div>
        <div class="online-r">
          <a href="http://wpa.qq.com/msgrd?v=3&uin=597354724&site=qq&menu=yes">
            <div class="item-top">
              <img src="../assets/icon-qq.png" alt />QQ客服
            </div>
          </a>
          <div class="item-middle">
            <div class="item-dev">手机</div>15602383965
          </div>
          <div class="item-bottom">
            <div class="item-dev">微信</div>
            <img src="../assets/join-wechat.png" alt class="icon-wechat" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      concatPop:false
    }
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 800) {
        this.concatPop = true;
      } else {
        this.concatPop = false;
      }
    }
  }
};
</script>