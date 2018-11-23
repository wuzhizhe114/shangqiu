<!-- 首页 -->
<template>
  <div class="index">
    <!-- 定位市场 -->
    <section class="position-market bg-white mb-20">
      <p class="market-title mb-26">
        <i class="iconfont theme-color">&#xe62e;</i>
        <span>当前：</span>
        <a href="#" class="theme-color theme-b-b">雪苑农资批发市场</a>
      </p>
      <!-- <div class="market-info pr mb-26">
        <img src="../assets/images/index/market.png" alt="">
        <p class="credit-rating pd-lr-20">
          <span class="color-white">市场信用评级：</span>
          <span class="theme-color">
            <i class="iconfont">&#xe6ae;</i>
            <i class="iconfont">&#xe6ae;</i>
            <i class="iconfont">&#xe6ae;</i>
            <i class="iconfont">&#xe6ae;</i>
            <i class="iconfont">&#xe60c;</i>
          </span>
        </p>
      </div> -->
      <credit-rating class="market-info mb-26" :params="{imgUrl:'/assets/images/index/market.png'}"></credit-rating>
      <p class="market-addr text-ell"><span>地址：</span> 河南省商丘市梁园区货场商丘市长征医院东北</p>
    </section>
    <!-- 信用公告 -->
    <section class="bulletin bg-white pd-lr-30 mb-20">
      <p class="module-title theme-color text-center">信用公告</p>
      <div class="bulletin-carousel">
        <mu-carousel hide-controls :active="active" @change="changeActive" interval="3000" transition="fade">
          <template slot="indicator">
            <mu-button icon class="mu-carousel-indicator-button" :class="{'mu-carousel-indicator-button__active': active}" slot-scope="{ index, active }">
              <span class="rect-indicator"></span>
            </mu-button>
          </template>
          <p class="carousel-tips text-ell">
            <span v-if="active == 0">市场部门开展食品安全整治</span>
            <span v-else-if="active == 1">2</span>
            <span v-else-if="active == 2">3</span>
            <span v-else-if="active == 3">4</span>
            <span v-else>无</span>
          </p>
          <mu-carousel-item>
            <img src="../assets/images/index/carousel1.png">
          </mu-carousel-item>
          <mu-carousel-item>
            <img src="../assets/images/index/carousel1.png">
          </mu-carousel-item>
          <mu-carousel-item>
            <img src="../assets/images/index/carousel1.png">
          </mu-carousel-item>
          <mu-carousel-item>
            <img src="../assets/images/index/carousel1.png">
          </mu-carousel-item>
        </mu-carousel>
      </div>
    </section>
    <!-- 信用排行榜 -->
    <section class="credit-ranking bg-white pd-lr-30">
      <p class="module-title theme-color text-center">本期信用之星</p>
    </section>
  </div>
</template>

<script>
import pHeader from "@/components/pHeader";
import pFooter from "@/components/pFooter";
import creditRating from "@/components/index/creditRating"
export default {
  data() {
    return {
      active: 0
    };
  },

  components: {
    pHeader,
    pFooter,
    creditRating
  },

  computed: {},

  mounted() {},

  methods: {
    changeActive (index) {
      this.active = index;
    }
  }
};
</script>

<style scoped>
.index {
  background-color: #f3f3f3;
}
/* 市场定位 */
.position-market {
  padding: 0.3rem;
}
.position-market .market-info {
  height: 2.48rem;
}
.credit-rating {
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 0.54rem;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
/* 信用公告 */
.bulletin {
  overflow: hidden;
}
.module-title {
  line-height: 0.74rem;
}
.bulletin .bulletin-carousel {
  height: 2.72rem;
  margin-bottom: 0.46rem;
}
.bulletin .bulletin-carousel .carousel-tips {
  position: absolute;
  bottom: 0.06rem;
  left: 0.1rem;
  width: 78%;
  color: #fff;
  z-index: 10;
}
</style>