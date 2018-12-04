<!-- 商品介绍 -->
<template>
  <div class="shangpin-intro">
    <div class='lh-90 text-center fs-18'>印度苦瓜</div>
    <div class='basic-info pd-lr-30 fs-24 lh-42 mb-20'>
      <img src='../../../static/images/shangpin/kugua.png' class='pic' />
    </div>
    <div class='other-info pd-lr-30'>
      <div class='info theme-border mohu-bg-img fs-12'>
        <div class='d-fl mb-10'>
          <span class='fl-1'>商品名称：苦瓜</span>
          <span>现售单价：<span class='color-red'>2.6 元/斤</span> </span>
        </div>
        <div class='d-fl mb-10'>
          <span class='fl-1'>商品类别：蔬菜</span>
          <span>同比下降：<span class='iconfont icon-iconset0444 color-green fs-14'> </span><span class='color-blue'>0.2 元/斤</span> </span>
        </div>
        <div class='d-fl mb-10'>
          <span class='fl-1'>生产地区：商丘蔬菜瓜果基地</span>
          <span>进货日期：2018年10月22日</span>
        </div>
        <div class='mb-10 d-fl'>
          <span class='fl-1'>供应商：商丘农产品批发部</span>
          <span>保存期至：2018年11月27日</span>
        </div>
      </div>
    </div>
    <div class='zizhi text-center mb-40'>
      <div class='lh-90'>检验检疫报告</div>
      <img src='../../../static/images/shangpin/renzheng.png' class='pic' />
    </div>
    <div class="btn-box pd-lr-30 mb-40">
      <mu-button full-width color="primary" href="javascript:history.back(-1)">返回</mu-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components:{},

  computed:{},

  mounted(){},

  methods:{}
}

</script>

<style scoped>
.basic-info .pic {
  height: 3.3rem;
}
.other-info .info {
  padding: 0.2rem 0.3rem;
}
.zizhi .pic {
  width: 3.35rem;
  height: 4.6rem;
}
</style>