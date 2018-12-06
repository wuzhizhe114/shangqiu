<!-- 排行榜 -->
<template>
  <div class="paihang">
    <div class="title lh-90 theme-bg text-center color-white fs-18 of-hidden top_col">
      <a class="ml-30 fl-l" href="javascript:history.back(-1)">
        <i class="iconfont">&#xe65b;</i>
      </a>
      <p class="pr-50">信用排行</p>
    </div>
    <div class="top d-fl theme-bg color-white">
      <img src="../../static/images/index/qianmama.png" class="pic" alt>
      <div class="fl-1 ml-24">
        <span class="fs-it fs-18">3</span>
        <img src="../../static/images/index/shangshen.png" class="paiming" alt srcset>
        <p>我的排名</p>
      </div>
      <div class="qushi text-center" @click="showAlert(true)">
        <i class="iconfont fs-18 icon-benzhoutongji"></i>
        <p>查看趋势</p>
      </div>
    </div>
    <div>
      <img src="../../static/images/index/paihang.png" class="top-pic" alt>
    </div>
    <div class="bg-white">
      <div class="item d-fl al-center gray-b-b2">
        <span class="fs-18">4</span>
        <img src="../../static/images/index/first_pic.png" class="br-half ml-24" alt>
        <p class="ml-24 fl-1">转角爱咖啡店</p>
        <span>信用分：85</span>
      </div>
      <div class="item d-fl al-center gray-b-b2">
        <span class="fs-18">5</span>
        <img src="../../static/images/index/second_pic.png" class="br-half ml-24" alt>
        <p class="ml-24 fl-1">好友家奶茶</p>
        <span>信用分：75</span>
      </div>
      <div class="item d-fl al-center">
        <span class="fs-18">6</span>
        <img src="../../static/images/index/third_pic.png" class="br-half ml-24" alt>
        <p class="ml-24 fl-1">再见市场</p>
        <span>信用分：65</span>
      </div>
      <!-- <img src="../../static/images/index/zhexian.png" alt=""> -->
    </div>
    <div class="category-popup-bg" v-if="categoryPopup">
      <div class="category-popup-box pd-lr-30">
        <div class="lh-90 text-center fs-16 theme-color">
          <!-- <i class="iconfont">&#xe6d0;</i> -->
          <span>钱大妈店铺2018年信用趋势分析</span>
        </div>
        <div class="mb-10">
          <img src="../../static/images/index/zhexian.png" alt>
        </div>
        <div class="text-right">
          <mu-button color="primary" @click="showAlert(false)">关闭</mu-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categoryPopup: false
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    showAlert(ell) {
      this.categoryPopup = ell;
      // this.$alert('', '提示', {
      //   okLabel: '知道了'
      // }).then(() => {
      //   this.$toast.message('提示信息');
      // });
    }
  }
};
</script>

<style scoped>
.top {
  padding: 0.4rem 0.3rem;
}
.top .pic {
  width: 0.9rem;
  height: 0.9rem;
}
.top .paiming {
  width: 0.5rem;
  height: 0.3rem;
}
.top-pic {
  width: 100%;
  height: auto;
}

.item {
  padding: 0.2rem 0.3rem;
}
.item .br-half {
  width: 0.8rem;
  height: 0.8rem;
}
.category-popup-box {
  background: #fff;
}
</style>