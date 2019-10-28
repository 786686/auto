<template>
  <div class="info-page">
    <top />
    
    <!-- 服务 -->
    <div class="service">
        <div class="item">
            <img src="../assets/icon-app.png" alt="" class="icon-service">
            <h1>APP定制开发</h1>
            <p>成熟的团队，原生APP开发，功能全客制化。覆盖多个行业数十个成功案例。提供开发架设维护一站式的服务，兼容性强，运行稳定。</p>
        </div>
        <div class="item">
            <img src="../assets/banner.jpg" alt="">
        </div>

        <div class="item">
            <img src="../assets/banner.jpg" alt="">
        </div>
        <div class="item">
            <img src="../assets/icon-wechat.png" alt="" class="icon-service">
            <h1>公众号&小程序定制开发</h1>
            <p>微信小程序、公众号（服务号、订阅号）开发。微信商城可自定义分销，微信与APP功能跨平台同步开发。</p>
        </div>

        <div class="item">
            <img src="../assets/icon-company.png" alt="" class="icon-service">
            <h1>企业官网设计</h1>
            <p>官网定制开发，全方位树立企业品牌形象，提升企业信誉，提高品牌效应功能，持续传播企业文化，不断扩展销售渠道。</p>
        </div>
        <div class="item">
            <img src="../assets/banner.jpg" alt="">
        </div>

        <div class="item">
            <img src="../assets/banner.jpg" alt="">
        </div>
        <div class="item">
            <img src="../assets/icon-sass.png" alt="" class="icon-service">
            <h1>Saas平台</h1>
            <p>使用Saas模板平台，能快速，高效的为企业搭建信息化所需要的所有网络基础设施，减低企业的试错成本。</p>
        </div>

        <div class="item">
            <img src="../assets/icon-service.png" alt="" class="icon-service">
            <h1>企业转型咨询服务</h1>
            <p>应用行业成功案例的经验，结合互联网工具，帮助企业制定符合企业发展的营运方案。提供高级别保障，助企业稳健上云。</p>
        </div>
        <div class="item">
            <img src="../assets/banner.jpg" alt="">
        </div>
    </div>

    <!-- 项目需求 -->
    <div class="inps-request">
        <h2>填写您的项目需求给我们</h2>
        <div class="inps">
            <input type="text" placeholder="称呼姓名" class="inp-name" v-model="name">
            <input type="text" placeholder="联系电话" class="inp-mobile" v-model="telephone ">
            <input type="text" placeholder="描述您的需求，如APP开发、微信开发、网站建设等" class="inp-con" v-model="demand">
            <div class="btn-submit" @click="submit">提交项目需求</div>
        </div>
        <div class="inps-request-tips">
            *请认真填写需求信息，我们会在24小时内与您取得联系。
        </div>
    </div>

    <!-- 合作流程 -->
    <!-- <div class="cooperation">
        <div class="cooperation-mask"></div>
        <div class="cooperation-in">
            <h1>合作流程</h1>
            <ul>
                <li>
                    <div class="item-l">1</div>
                    <div class="item-r">
                        <div class="item-tit">联系项目负责人</div>
                        <div class="item-intro">为你解惑</div>
                    </div>
                </li>
                <li>
                    <div class="item-l">2</div>
                    <div class="item-r">
                        <div class="item-tit">双方达成一致</div>
                        <div class="item-intro">注册小程序（申请微信支付）</div>
                    </div>
                </li>
                <li>
                    <div class="item-l">3</div>
                    <div class="item-r">
                        <div class="item-tit">把小程序一键授权给腾信智联</div>
                        <div class="item-intro">我们迅速为您设计,定制，开发</div>
                    </div>
                </li>
                <li>
                    <div class="item-l">4</div>
                    <div class="item-r">
                        <div class="item-tit">微信小程序验收</div>
                        <div class="item-intro">微信核审，小程序上线</div>
                    </div>
                </li>
            </ul>
            <div class="item-phone">电话咨询：15602383965</div>
        </div>
    </div> -->

    <bottom />
  </div>
</template>

<script>
import top from "./header";
import bottom from "./footer";
export default {
  components: {
    top,
    bottom
  },
  data() {
    return {
        name:'',
        telephone:'',
        demand:''
    };
  },
  methods: {
    async submit() {
      const vm = this;
      const url = `/api/myservice/sumbitDemandInfo.json`;
      let formData = new FormData();
      formData.append("name", this.name);
      formData.append("telephone", this.telephone);
      formData.append("demand", this.demand);
      await vm.axios.post(url, formData).then(res => {
          console.log(res)
      });
    },
  },
  mounted() {

  }
};
</script>