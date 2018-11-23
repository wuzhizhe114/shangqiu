<!-- 信用评分组件 -->
<template>
  <div>
    <div class="credit-info pr">
      <img :src="params.imgUrl" alt="">
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    params: Object
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>

<style scoped>
.credit-info {
  height: 100%;
  width: 100%;
}
.credit-rating {
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 0.54rem;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>