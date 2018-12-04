<!-- 店铺详情 -->
<template>
  <div class="dianpu">
    <div class="title lh-90 theme-bg text-center color-white fs-18 of-hidden">
      <a class="ml-30 fl-l" href="javascript:history.back(-1)">
        <i class="iconfont">&#xe65b;</i>
      </a>
      <p class="pr-50">店铺详情</p>
    </div>
    <div class="basic-info pd-30 bg-white box-sh mb-20 d-fl">
      <img src="../../../static/images/shangpin/shushi.png" class="gray-border">
      <div class="fl-1 ml-24">
        <div class="d-fl">
          <span class="fl-1 fs-18">李三熟食</span>
          <div class="d-fl al-center pd-10">
            <span class="iconfont icon-star theme-color"></span>
          </div>
          <div class="pr pd-10">
            <span class="iconfont icon-bianji color-blue fs-12"></span>
          </div>
        </div>
        <div class="d-fl mb-10">
          <span class="fl-1 d-fl al-center">信用评级：
            <span class="theme-color">
              <span class="iconfont fs-14 icon-stars"></span>
              <span class="iconfont fs-14 icon-stars"></span>
              <span class="iconfont fs-14 icon-stars"></span>
              <span class="iconfont fs-14 icon-stars"></span>
              <span class="iconfont fs-14 icon-xingxingxianmiao"></span>
            </span>
          </span>
          <router-link class="pr text-center color-666" to>
            <span class="iconfont icon-dangan"></span>
            <div>
              <span class="fs-12">信用档案</span>
            </div>
          </router-link>
        </div>
        <div class="d-fl fs-12 mb-10">
          <div class="fl-1 d-fl al-center">
            营业时间：
            <span>09:00-20:00</span>
          </div>
          <div class>
            <span>营业中</span>
          </div>
        </div>
        <div class="d-fl fs-12">
          <div class="fl-1 mr-10">
            <span class="iconfont icon-dingweiweizhi theme-color fs-24"></span>
            <span>商丘市睢阳区雪苑农贸市场2楼301</span>
          </div>
          <div
            class="text-center color-blue ml-24 pr"
            data-other-index="2"
            hover-class="block-active"
            bindtap="otherChange"
          >
            <span class="iconfont icon-daohang fs-24"></span>
            <div class="fs-20">去店里</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 默认 其他信息 -->
    <div class="other-default">
      <div class="zhizhao-box bg-white box-sh pd-lr-30 mb-20">
        <div class="text-center lh-90 theme-color fs-16">资质牌照</div>
        <div class="d-fl">
          <div class="fl-1 text-center pd-tb-20">
            <img src="../../../static/images/shangpin/zhizhao2.png" class="zhizhao-pic gray-border">
            <div class="fs-12">个体户工商营业执照</div>
          </div>
          <div class="fl-1 text-center pd-tb-20">
            <img src="../../../static/images/shangpin/zhizhao1.png" class="zhizhao-pic gray-border">
            <div class="fs-12">食品流通许可证</div>
          </div>
        </div>
      </div>
      <div class="intro bg-white box-sh pd-lr-30 of-hidden mb-20">
        <div class="lh-90 theme-color text-center fs-16">简介</div>
        <div class="content mb-40 theme-border mohu-bg-img">
          <div
            class="mb-20"
          >本公司从2018年02月05日开始在商丘市雪苑农贸市场经营蔬菜销售生意本公司从2018年02月05日开始在商丘市雪苑农贸市=开始在商丘市雪苑农贸市场经营蔬菜销售生意</div>
          <div>经营范围：蔬菜，果品、菌类、禽蛋</div>
        </div>
      </div>
      <div class="product-recom bg-white of-hidden box-sh">
        <div class="nav lh-52 pb-20">
          <span class="theme-color">推荐</span>
          <span>蔬菜</span>
          <span>果品</span>
          <span>菌类</span>
          <span>禽蛋</span>
        </div>
        <div class="product-list">
          <router-link
            to='/shangpinIntro'
            class="item d-fl pd-tb-20 gray-b-b pr"
            v-for="(item,index) in productList"
            :key="index"
          >
            <img :src="picHost + item.picUrl" class="item-pic gray-border">
            <div class="fl-1 ml-24">
              <div class="d-fl mb-10">
                <span class="fl-1">{{item.name}}</span>
                <span class="theme-color">{{item.jiage}}元/斤</span>
              </div>
              <div class="d-fl mb-10 fs-12">
                <span class="fl-1">分类：{{item.type}}</span>
                <span class="color-blue">产地：{{item.chandi}}</span>
              </div>
              <div class="d-fl fs-12">
                <span class="fl-1">
                  <span class="iconfont icon-shijian color-orange"></span>
                  <span>进货日期：{{item.jinhuo}}</span>
                </span>
                <span>保存方式：{{item.baocun}}</span>
              </div>
            </div>
          </router-link>
          <!-- <router-link to='' class='item d-fl pd-tb-20 gray-b-b pr'>
            <img src='../../../static/images/shangpin/kugua.png' class='item-pic gray-border'/>
            <div class='fl-1 ml-24'>
              <div class='d-fl mb-10'>
                <span class='fl-1'>印度苦瓜</span>
                <span class='theme-color'>2.5元/斤</span>
              </div>
              <div class='d-fl mb-10 fs-12'>
                <span class='fl-1'>分类：蔬菜</span>
                <span class='color-blue'>产地：商丘蔬菜瓜果基地</span>
              </div>
              <div class='d-fl fs-12'>
                <span class='fl-1'>
                  <span class='iconfont icon-shijian color-orange'></span>
                <span>进货日期：2018/11/26</span>
                </span>
                <span>保存方式：冷鲜</span>
              </div>
            </div>
          </router-link>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // picHost:'./static/images/',
      picHost:'../../../static/images/',
      productList: [
        {
          picUrl: "shangpin/kugua.png",
          name: "印度苦瓜",
          jiage: "2.5",
          type: "蔬菜",
          chandi: "商丘瓜果基地",
          jinhuo: "2018-11-29",
          baocun: "冷藏"
        },
        {
          picUrl: "shangpin/xiaobaicai.png",
          name: "商丘小白菜",
          jiage: "2.2",
          type: "蔬菜",
          chandi: "商丘瓜果基地",
          jinhuo: "2018-11-29",
          baocun: "冷藏"
        },
        {
          picUrl: "shangpin/shucai.png",
          name: "生菜",
          jiage: "2.1",
          type: "蔬菜",
          chandi: "商丘瓜果基地",
          jinhuo: "2018-11-29",
          baocun: "冷藏"
        },
        {
          picUrl: "shangpin/nangua.png",
          name: "南瓜",
          jiage: "2.0",
          type: "蔬菜",
          chandi: "商丘瓜果基地",
          jinhuo: "2018-11-29",
          baocun: "冷藏"
        }
      ]
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>

<style scoped>
.basic-info > img {
  width: 2.4rem;
  height: 3rem;
}
.zhizhao-pic {
  width: 2.56rem;
  height: 1.65rem;
}
.intro .content {
  padding: 0.26rem 0.5rem;
}
.product-recom {
  padding: 0.3rem 0.3rem 0.8rem;
}
.product-recom .nav > span:first-child {
  border-left: 2px solid #fa595e;
}
.product-recom .nav > span {
  padding: 0 0.2rem;
}
.product-recom .product-list {
  border-top: 1px solid #bdc5cb;
}
.product-recom .product-list .item > img {
  width: 1.7rem;
  height: 1.46rem;
}
</style>