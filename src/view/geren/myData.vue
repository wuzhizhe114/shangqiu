<!-- 我的资料 -->
<template>
  <div class="my-data">
    <div class="title lh-90 theme-bg text-center color-white fs-18 of-hidden">
      <a class="ml-30 fl-l" href="javascript:history.back(-1)">
        <i class="iconfont">&#xe65b;</i>
      </a>
      <p class="pr-50">我的资料</p>
    </div>
    <div class="basic-info d-fl pd-30 bg-white lh-60">
      <div class="left text-right">
        <div class="item gray-b-b">企业名称：</div>
        <div class="pl-20 item gray-b-b">统一社会信用代码：</div>
        <div class="item gray-b-b">经营者：</div>
        <div class="item gray-b-b">组成形式：</div>
        <div class="item gray-b-b">注册地址：</div>
        <div class="item gray-b-b">经营范围：</div>
        <div>商户位置：</div>
      </div>
      <div class="right fl-1">
        <div class="pl-20 item gray-b-b">李记熟食</div>
        <div class="pl-20 item gray-b-b">914403000870397751</div>
        <div class="pl-20 item gray-b-b">李元霸</div>
        <div class="pl-20 item gray-b-b">李元霸</div>
        <div class="pl-20 item gray-b-b">2016年3月21日</div>
        <div class="pl-20 item gray-b-b">蔬菜、果品、副食</div>
        <div class="pl-20">3楼301号</div>
      </div>
    </div>
    <div class="pd-lr-30 bg-white">
      <div class="dash-b-b"></div>
    </div>
    <div class="zizhi-info bg-white pd-lr-30 pb-40">
      <div class="item">
        <div class="mb-10 mt-10">请上传《营业执照》</div>
        <div class="zhengjian-box d-fl jc-center mb-26">
          <div class="br-3 pd-t20-l30 fb-bg gray-border mr-10">
            <img src="../../../static/images/regist/zige1.png" alt class="img">
          </div>
          <div class="d-fl al-center">
            <mu-button class="h42" color="primary">编辑</mu-button>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="mb-10">请上传《食品安全许可证》</div>
        <div class="zhengjian-box jc-center d-fl mb-26">
          <div class="br-3 pd-t20-l30 fb-bg gray-border mr-10">
            <img src="../../../static/images/regist/zige2.png" alt class="img">
          </div>
          <div class="d-fl al-center">
            <mu-button class="h42" color="primary">编辑</mu-button>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="mb-10">请上传《食品流通许可证》</div>
        <div class="zhengjian-box jc-center d-fl mb-26">
          <div class="br-3 pd-t20-l30 fb-bg gray-border mr-10">
            <img src="../../../static/images/regist/zige3.png" alt class="img">
          </div>
          <div class="d-fl al-center">
            <mu-button class="h42" color="primary">编辑</mu-button>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="mb-10">请上传《从业人员健康证》</div>
        <div class="zhengjian-box jc-center d-fl mb-26">
          <div class="br-3 pd-t20-l30 fb-bg gray-border mr-10">
            <img src="../../../static/images/regist/jiankang.png" alt class="img">
          </div>
          <div class="d-fl al-center">
            <mu-button class="h42" color="primary">编辑</mu-button>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="mb-10">请上传《进货凭证》</div>
        <div class="zhengjian-box jc-center d-fl mb-26">
          <div class="br-3 pd-t20-l30 fb-bg gray-border mr-10">
            <img src="../../../static/images/shangpin/zhizhao1.png" alt class="img">
          </div>
          <div class="d-fl al-center">
            <mu-button class="h42" color="primary">编辑</mu-button>
          </div>
        </div>
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
.basic-info .left {
  background-color: #f1f1f1;
}
.basic-info .right {
  background-color: #fbe2e3;
}
.zizhi-info .img {
  width: 2.2rem;
  height: 1.48rem;
}
</style>