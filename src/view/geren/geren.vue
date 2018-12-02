<!-- 个人 -->
<template>
  <div class="geren d-fl fl-col">
    <div class="user-info">
      <div class="info d-fl pd-lr-30 pt-60">
        <div class="img-box">
          <img src="../../../static/images/geren/user-icon.png" class="user-icon br-half" alt>
        </div>
        <div class="fl-1 ml-30">
          <span class="color-white fs-22">卡卡</span>
        </div>
        <img src="../../../static/images/geren/erweima.png" class="erweima" alt>
      </div>
      <div class="xiaoxi d-fl color-white text-center pd-lr-30 fs-12">
        <div class="fl-1">
          <span>365</span>
          <p>收到评论</p>
        </div>
        <div class="fl-1">
          <span>214</span>
          <p>关注我的</p>
        </div>
        <div class="fl-1">
          <span>213</span>
          <p>7天访客</p>
        </div>
      </div>
    </div>
    <div class="operate1 bg-white box-sh mb-20">
      <div class="item d-fl pd-tb-20 gray-b-b2">
        <i class="iconfont color-blue mr-10">&#xe64e;</i>
        <span>消息通知</span>
        <span class="fl-1 text-right mr-10 fs-12 gray-color d-fl al-center jc-end">您有5条新消息
          <i class="red-point ml-10"></i>
        </span>
        <i class="iconfont rotate-ne-90 fs-16">&#xe9fd;</i>
      </div>
      <div class="item d-fl pd-tb-20">
        <i class="iconfont yellow-color mr-10">&#xe611;</i>
        <span>信用档案</span>
        <span class="fl-1 text-right mr-10 fs-12 gray-color d-fl al-center jc-end"></span>
        <i class="iconfont rotate-ne-90 fs-16">&#xe9fd;</i>
      </div>
    </div>
    <div class="operate2 bg-white fl-1 box-sh">
      <div class="item d-fl pd-tb-20 gray-b-b2">
        <i class="iconfont theme-color mr-10">&#xe6d7;</i>
        <span>我的资料</span>
        <span class="fl-1 text-right mr-10 fs-12 gray-color d-fl al-center jc-end"></span>
        <i class="iconfont rotate-ne-90 fs-16">&#xe9fd;</i>
      </div>
      <div class="item d-fl pd-tb-20 gray-b-b2">
        <i class="iconfont color-blue2 mr-10">&#xe79a;</i>
        <span>电子合同</span>
        <span class="fl-1 text-right mr-10 fs-12 gray-color d-fl al-center jc-end">2个商品</span>
        <i class="iconfont rotate-ne-90 fs-16">&#xe9fd;</i>
      </div>
      <div class="item d-fl pd-tb-20">
        <i class="iconfont color-999 mr-10">&#xe671;</i>
        <span>系统设置</span>
        <span class="fl-1 text-right mr-10 fs-12 gray-color d-fl al-center jc-end"></span>
        <i class="iconfont rotate-ne-90 fs-16">&#xe9fd;</i>
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

  methods: {}
};
</script>

<style scoped>
.user-info {
  height: 3.04rem;
  background: url("../../../static/images/geren/geren-bg.png") no-repeat;
  background-size: 100%;
}
.user-info .img-box > .user-icon {
  width: 1.36rem;
  height: 1.36rem;
  border: 3px solid rgba(255, 255, 255, 0.5);
}
.user-info .erweima {
  width: 0.98rem;
  height: 0.98rem;
  border: 3px solid #fff;
}
.user-info .xiaoxi > .fl-1:nth-child(2),
.user-info .xiaoxi > .fl-1:nth-child(3) {
  border-left: 1px solid #ccc;
}

.operate1,
.operate2 {
  padding: 0 0.3rem 0 0.6rem;
}
</style>