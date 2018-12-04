<!-- 我的资料 -->
<template>
  <div class="my-data">
    <div class="title lh-90 theme-bg text-center color-white fs-18 of-hidden">
      <a class="ml-30 fl-l" href="javascript:history.back(-1)">
        <i class="iconfont">&#xe65b;</i>
      </a>
      <p class="pr-50">新品添加</p>
    </div>


    <div class="basic-info d-fl pd-30 bg-white lh-60">
      <div class="left text-right">
        <div class="item gray-b-b">商品名称：</div>
        <div class="pl-20 item gray-b-b">供应商：</div>
        <div class="item gray-b-b">商品分类：</div>
        <div class="item gray-b-b">商品单价：</div>
        <div class="item gray-b-b">产地：</div>
        <div class="item gray-b-b">保质日期：</div>
        <div class="item gray-b-b">采购日期：</div>
        <div class="item gray-b-b">进货日期：</div>
        <div class="item gray-b-b">商品描述：</div>
      </div>
      <div class="right fl-1">
        <div class="pl-20 item gray-b-b">
          <input type="text" class="item_input" placeholder="请输入商品名称">
        </div>
        <div class="pl-20 item gray-b-b">
          <input type="text" class="item_input" placeholder="请输入供应商">
        </div>
        <div class="pl-20 item gray-b-b">
          <input type="text" class="item_input" placeholder="请输入商品分类">
        </div>
        <div class="pl-20 item gray-b-b">
          <input type="text" class="item_input" placeholder="请输入商品单价">
        </div>
        <div class="pl-20 item gray-b-b">
          <input type="text" class="item_input" placeholder="请输入产地">
        </div>
        <div class="pl-20 item gray-b-b">
          <input type="text" class="item_input" placeholder="请输入保质日期">
        </div>
        <div class="pl-20 item gray-b-b">
          <input type="text" class="item_input" placeholder="请输入采购日期">
        </div>
        <div class="pl-20 item gray-b-b">
          <input type="text" class="item_input" placeholder="请输入进货日期">
        </div>
        <div class="pl-20">
          <textarea type="text" class="item_input" placeholder="请输入不少于20个字的文字书名，最多输入不超过200个字"></textarea>
        </div>
      </div>
    </div>
    <div class="pd-lr-30 bg-white">
      <div class="dash-b-b"></div>
    </div>
    <div class="zizhi-info bg-white pd-lr-30 pb-40">
      <div class="item">
        <div class="mb-10 mt-10">请上传《食品检验检疫证书》</div>
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
        <div class="mb-10">请上传《进货凭证》</div>
        <div class="zhengjian-box jc-center d-fl mb-26">
          <div class="br-3 pd-t20-l30 fb-bg gray-border mr-10">
            <img src="../../../static/images/regist/zige2.png" alt="" class="img">
          </div>
          <div class="d-fl al-center">
            <mu-button class="h42" color="primary">编辑</mu-button>
          </div>
        </div>
      </div>
     <mu-button class="next_btn" color="primary">发布上架</mu-button>
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

.gray-b-b {
    border-bottom: 0px solid #bdc5cb;
    margin-bottom: .1rem;
}
.next_btn{
  width: 90%;
  margin: 0 5%;
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