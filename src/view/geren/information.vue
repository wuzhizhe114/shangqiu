<!-- 我的资料 -->
<template>
  <div class="my-data">
    <div class="title lh-90 theme-bg text-center color-white fs-18 of-hidden">
      <a class="ml-30 fl-l" href="javascript:history.back(-1)">
        <i class="iconfont">&#xe65b;</i>
      </a>
      <p class="pr-50">注册</p>
    </div>

    <section>
        <mu-tabs :value.sync="tabActive" color="#fbfbfb" indicator-color="#fa595e" full-width>
          <mu-tab>商户注册</mu-tab>
          <mu-tab>资料填写</mu-tab>
          <mu-tab>电子合同</mu-tab>
        </mu-tabs>
      </section>

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
        <div class="pl-20 item gray-b-b">
          <input type="text" class="item_input" placeholder="请输入企业名称">
        </div>
        <div class="pl-20 item gray-b-b">
          <input type="text" class="item_input" placeholder="请输入统一社会信用代码">
        </div>
        <div class="pl-20 item gray-b-b">
          <input type="text" class="item_input" placeholder="请输入经营者">
        </div>
        <div class="pl-20 item gray-b-b">
          <input type="text" class="item_input" placeholder="请输入组成形式">
        </div>
        <div class="pl-20 item gray-b-b">
          <input type="text" class="item_input" placeholder="请输入注册地址">
        </div>
        <div class="pl-20 item gray-b-b">
          <input type="text" class="item_input" placeholder="请输入经营范围">
        </div>
        <div class="pl-20">
          <input type="text" class="item_input" placeholder="请输入商户位置">
        </div>
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
            <img src="../../../static/images/regist/zige1.png" alt="" class="img">
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
            <img src="../../../static/images/regist/zige2.png" alt="" class="img">
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
            <img src="../../../static/images/regist/zige3.png" alt="" class="img">
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
            <img src="../../../static/images/regist/jiankang.png" alt="" class="img">
          </div>
          <div class="d-fl al-center">
            <mu-button class="h42" color="primary">编辑</mu-button>
          </div>
        </div>
      </div>
     <mu-button class="next_btn" color="primary">下一步</mu-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabActive: 1,
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>

<style scoped>
.item_input{
  padding-left: 0.1rem;
  height: 0.59rem;
  border: solid 1px #bdc5cb;
  border-radius: 0.04rem;
}
.next_btn{
  width: 90%;
  margin: 0 5%;
}
.gray-b-b {
    border-bottom: 0px solid #bdc5cb;
    margin-bottom: .1rem;
}
.basic-info .left {
}
.basic-info .right {
}
.zizhi-info .img {
  width: 2.2rem;
  height: 1.48rem;
}
</style>