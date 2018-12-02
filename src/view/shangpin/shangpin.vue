<!-- 商品 -->
<template>
  <div class="shangpin">
    <div class="basic-info pd-lr-30 mb-20 box-sh">
      <div class="lh-90 theme-color text-center gray-b-b2 fs-18">市场概况</div>
      <div class="pd-tb-30 d-fl jc-center dash-b-b lh-52">
        <div>
          <p>
            本市场营业时间：上午
            <span class="color-blue">06</span> 点至下午
            <span class="color-blue">20</span> 点
          </p>
          <p>
            本市场在售商品：
            <span class="color-blue">12</span>个品类，共
            <span class="color-blue">328</span>个商品
          </p>
          <p>
            本市场摊位总数：
            <span class="color-blue">235</span>个摊位，已入住
            <span class="color-blue">213</span>个
          </p>
        </div>
      </div>
      <div class="lh-90 theme-color text-center gray-b-b2 fs-18">本店概况</div>
      <div class="pd-tb-30 d-fl jc-center lh-52">
        <div>
          <p>
            本店营业时间：上午
            <span class="color-blue">06</span> 点至下午
            <span class="color-blue">20</span> 点
          </p>
          <p>
            本店在售商品：
            <span class="color-blue">4</span>个品类，共
            <span class="color-blue">28</span>个商品
          </p>
          <p>本店商铺位置：1栋四单元F914号</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上架商品：
            <span class="color-blue">19</span>个
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;下架商品：
            <span class="color-blue">5</span>个
          </p>
        </div>
      </div>
    </div>
    <div class="pinlei bg-white pd-lr-30 box-sh pb-40">
      <div class="lh-90 text-center theme-color fs-18">本店经营品类</div>
      <p class="gray-color fs-12 mb-40">其中：带有小括号的品类，为当前您在该品类中在售的商品数量</p>
      <div class="d-fl jc-space-b mb-30">
        <router-link to="/shangpin/shangpinList" class="pinlei-item">
          <img src="../../../static/images/shangpin/shuichan.png" alt>
          <p class="text-center color-666">水产</p>
        </router-link>
        <router-link to="/shangpin/shangpinList" class="pinlei-item">
          <img src="../../../static/images/shangpin/liangyou.png" alt>
          <p class="text-center color-666">
            粮油(
            <span class="theme-color">3</span>)
          </p>
        </router-link>
        <router-link to="/shangpin/shangpinList" class="pinlei-item">
          <img src="../../../static/images/shangpin/fushi.png" alt>
          <p class="text-center color-666">副食</p>
        </router-link>
      </div>
      <div class="d-fl jc-space-b">
        <router-link to="/shangpin/shangpinList" class="pinlei-item">
          <img src="../../../static/images/shangpin/shucai.png" class="gray-border" alt>
          <p class="text-center color-666">
            蔬菜(
            <span class="theme-color">2</span>)
          </p>
        </router-link>
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
.basic-info {
  background: url("../../../static/images/shangpin/shangpin-bg.png") no-repeat;
  /* background-size: 100% 100%; */
}
.pinlei .pinlei-item {
  width: 2.06rem;
}
.pinlei .pinlei-item > img {
  height: 1.34rem;
}
</style>