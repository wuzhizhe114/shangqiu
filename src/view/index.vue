<!-- 首页 -->
<template>
  <div class="index">
    <div class="basic-info theme-bg color-white">
      <div class="d-fl mb-40">
        <img src="../../static/images/index/qianmama.png" class="shanghu-pic" alt>
        <div class="fl-1 ml-24">
          <p class="fs-16">钱妈妈</p>
          <p>
            信用等级：
            <span class="yellow-color">
              <i class="iconfont">&#xe6ae;</i>
              <i class="iconfont">&#xe6ae;</i>
              <i class="iconfont">&#xe6ae;</i>
              <i class="iconfont">&#xe6ae;</i>
              <i class="iconfont">&#xe60c;</i>
            </span>
          </p>
        </div>
        <div class="text-center" @click="tianzhuanPaihang">
          <span class="fs-it fs-18">3</span><img src="../../static/images/index/shangshen.png" class="paiming" alt="" srcset="">
        <p>信用排名</p>
        </div>
      </div>
      <div class="d-fl jc-space-b text-center">
        <div>
          <span class="fs-it fs-18">15</span>
          <p>已发布商品</p>
        </div>
        <div>
          <span class="fs-it fs-18">100%</span>
          <p>用户好评率</p>
        </div>
        <div>
          <span class="fs-it fs-18">2</span>
          <p>客户投诉</p>
        </div>
      </div>
    </div>
    <div class="leidatu pd-lr-30 mb-20 box-sh">
      <div class="lh-90 d-fl jc-space-b">
        <span class="theme-color">店铺信用诊断</span>
        <span>
          当前信用分：
          <span class="fs-18 fs-it theme-color">98</span>
        </span>
      </div>
      <div class="text-center pb-60">
        <img class="pic" src="../../static/images/index/leidatu2.png" alt>
      </div>
    </div>
    <div class="tongzhi pd-lr-30 bg-white box-sh mb-40">
      <div class="lh-90 d-fl gray-b-b">
        <span class="theme-color fs-16 fl-1">通知公告</span>
        <span class="gray-color">更多</span>
      </div>
      <div class="tongzhi-item pd-tb-30 fs-12 gray-b-b">
        <p class="text-ell">
          <i class="iconfont mr-10 theme-color">&#xe665;</i>
          <span>关于提升雪苑农贸市场整体卫生情况要注意以下几点完成时候的</span>
        </p>
        <p class="d-fl gray-color pl-50">
          <span class="fl-1">发布：市场办公室</span>
          <span>2018.12.04 12:23:10</span>
        </p>
      </div>
      <div class="tongzhi-item pd-tb-30 fs-12">
        <p class="text-ell">
          <i class="iconfont mr-10 theme-color">&#xe665;</i>
          <span>春节时期市场运营通知</span>
        </p>
        <p class="d-fl gray-color pl-50">
          <span class="fl-1">发布：市场办公室</span>
          <span>2018.12.03 10:27:50</span>
        </p>
      </div>
    </div>
    <div class="pingjia pd-lr-30 bg-white box-sh mb-40">
      <div class="lh-90 d-fl gray-b-b">
        <span class="theme-color fs-16 fl-1">店铺评价</span>
        <router-link to='/geren/myEval' class="gray-color">更多</router-link>
      </div>
      <div class="pingjia-item pd-tb-30 gray-b-b fs-12">
        <div class="d-fl mb-10">
          <img src="../../static/images/index/user-icon.png" class="user-icon br-half" alt>
          <div class="fl-1 ml-10">
            <div class="d-fl">
              <p class="fl-1 fs-16">
                <span>某某用户</span>
              </p>
              <span class="yellow-color">
                <i class="iconfont fs-14">&#xe6ae;</i>
                <i class="iconfont fs-14">&#xe6ae;</i>
                <i class="iconfont fs-14">&#xe60c;</i>
                <i class="iconfont fs-14">&#xe60c;</i>
                <i class="iconfont fs-14">&#xe60c;</i>
              </span>
            </div>
            <div class="d-fl color-666">
              <span class="fl-1">2017-03-25</span>
              <span>差评</span>
            </div>
          </div>
        </div>
        <div class="color-333 mb-10 fs-16">服务态度差，缺斤少两</div>
        <div>
          <img src="../../static/images/index/pingjia.png" class="pingjia-pic" alt>
          <img src="../../static/images/index/pingjia.png" class="pingjia-pic" alt>
          <img src="../../static/images/index/pingjia.png" class="pingjia-pic" alt>
        </div>
      </div>
      <div class="pingjia-item pd-tb-30 fs-12">
        <div class="d-fl mb-10">
          <img src="../../static/images/index/user-icon.png" class="user-icon br-half" alt>
          <div class="fl-1 ml-10">
            <div class="d-fl">
              <p class="fl-1 fs-16">
                <span>某某用户</span>
              </p>
              <span class="yellow-color">
                <i class="iconfont fs-14">&#xe6ae;</i>
                <i class="iconfont fs-14">&#xe6ae;</i>
                <i class="iconfont fs-14">&#xe6ae;</i>
                <i class="iconfont fs-14">&#xe6ae;</i>
                <i class="iconfont fs-14">&#xe60c;</i>
              </span>
            </div>
            <div class="d-fl color-666">
              <span class="fl-1">2017-03-25</span>
              <span>好评</span>
            </div>
          </div>
        </div>
        <div class="color-333 mb-10 fs-16">水果新鲜，服务员态度好</div>
        <!-- <div>
          <img src="../../static/images/index/pingjia.png" class="pingjia-pic" alt>
          <img src="../../static/images/index/pingjia.png" class="pingjia-pic" alt>
          <img src="../../static/images/index/pingjia.png" class="pingjia-pic" alt>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    tianzhuanPaihang(){
      this.$router.push('/paihang')
    }
  }
};
</script>

<style scoped>
.paiming {
  width: 0.5rem;
  height: 0.4rem;
}
.index a {
  color: #969696;
}
.basic-info {
  padding: 0.6rem 0.3rem 0.4rem;
}
.basic-info .shanghu-pic {
  width: 0.9rem;
  height: 0.9rem;
}

.leidatu {
  background: url("../../static/images/index/leida-bg.png") no-repeat #fff;
  background-size: 100% 100%;
}
.leidatu .pic {
  width: 3.6rem;
  height: 2.2rem;
}
.pingjia .user-icon {
  width: 0.8rem;
}
.pingjia .pingjia-pic {
  width: 1.4rem;
  margin-right: 0.2rem;
}
</style>