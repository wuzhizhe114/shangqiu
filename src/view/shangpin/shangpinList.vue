<!-- 商品列表 -->
<template>
  <div class="shangpin-list">
    <div class="tips pd-30 fs-12">
      <div class="d-fl mb-20">
        <div class="fl-1">
          本店在售商品：
          <span class="color-blue">4</span>个品类，共
          <span class="color-blue">24</span>个商品
        </div>
        <span>
          下架商品：
          <span class="color-blue">5</span>个
        </span>
      </div>
      <div>
        <span>上架商品：</span>
        <span class="color-blue">19</span>个
      </div>
    </div>
    <div class="list bg-white box-sh">
      <!-- <div class="list-nav lh-90 d-fl text-center">
        <a href="javascript:;" class="fl-1">上架商品</a>
        <a href="javascript:;" class="fl-1">商品类别</a>
        <a href="javascript:;" class="fl-1">商品价格</a>
        <a href="javascript:;" class="fl-1">下架商品</a>
      </div>-->
      <section>
        <mu-tabs :value.sync="tabActive" color="#fbfbfb" indicator-color="#fa595e" full-width>
          <mu-tab>上架商品</mu-tab>
          <mu-tab>商品类别</mu-tab>
          <mu-tab>商品价格</mu-tab>
          <mu-tab>下架商品</mu-tab>
        </mu-tabs>
      </section>
      <section class="pd-lr-30 list-content">
        <router-link to="" class="list-item pd-tb-20 gray-b-b d-fl al-center">
          <mu-checkbox v-model="form.checkbox" value="1" class="mr-10"></mu-checkbox>
          <img src="../../../static/images/shangpin/kugua.png" class="pic" alt="">
          <div class="fl-1 ml-10">
            <div class="d-fl fs-16 mb-10">
              <span class="fl-1">印度苦瓜</span>
              <span class="theme-color">2.5元/斤</span>
            </div>
            <div class="d-fl fs-12 mb-10">
              <span class="fl-1">分类：蔬菜</span>
              <span>产地：商丘蔬菜瓜果基地</span>
            </div>
            <div class="d-fl fs-12">
              <span class="fl-1">
                <i class="iconfont color-orange fs-14">&#xe67a;</i>
                进货日期：2018/11/12
              </span>
              <span>保存方式：冷鲜</span>
            </div>
          </div>
        </router-link>
        <router-link to="" class="list-item pd-tb-20 gray-b-b d-fl al-center">
          <mu-checkbox v-model="form.checkbox" value="2" class="mr-10"></mu-checkbox>
          <img src="../../../static/images/shangpin/kugua.png" class="pic" alt="">
          <div class="fl-1 ml-10">
            <div class="d-fl fs-16 mb-10">
              <span class="fl-1">印度苦瓜</span>
              <span class="theme-color">2.5元/斤</span>
            </div>
            <div class="d-fl fs-12 mb-10">
              <span class="fl-1">分类：蔬菜</span>
              <span>产地：商丘蔬菜瓜果基地</span>
            </div>
            <div class="d-fl fs-12">
              <span class="fl-1">
                <i class="iconfont color-orange fs-14">&#xe67a;</i>
                进货日期：2018/11/12
              </span>
              <span>保存方式：冷鲜</span>
            </div>
          </div>
        </router-link>
        <router-link to="" class="list-item pd-tb-20 gray-b-b d-fl al-center">
          <mu-checkbox v-model="form.checkbox" value="3" class="mr-10"></mu-checkbox>
          <img src="../../../static/images/shangpin/kugua.png" class="pic" alt="">
          <div class="fl-1 ml-10">
            <div class="d-fl fs-16 mb-10">
              <span class="fl-1">印度苦瓜</span>
              <span class="theme-color">2.5元/斤</span>
            </div>
            <div class="d-fl fs-12 mb-10">
              <span class="fl-1">分类：蔬菜</span>
              <span>产地：商丘蔬菜瓜果基地</span>
            </div>
            <div class="d-fl fs-12">
              <span class="fl-1">
                <i class="iconfont color-orange fs-14">&#xe67a;</i>
                进货日期：2018/11/12
              </span>
              <span>保存方式：冷鲜</span>
            </div>
          </div>
        </router-link>
        <router-link to="" class="list-item pd-tb-20 gray-b-b d-fl al-center">
          <mu-checkbox v-model="form.checkbox" value="4" class="mr-10"></mu-checkbox>
          <img src="../../../static/images/shangpin/kugua.png" class="pic" alt="">
          <div class="fl-1 ml-10">
            <div class="d-fl fs-16 mb-10">
              <span class="fl-1">印度苦瓜</span>
              <span class="theme-color">2.5元/斤</span>
            </div>
            <div class="d-fl fs-12 mb-10">
              <span class="fl-1">分类：蔬菜</span>
              <span>产地：商丘蔬菜瓜果基地</span>
            </div>
            <div class="d-fl fs-12">
              <span class="fl-1">
                <i class="iconfont color-orange fs-14">&#xe67a;</i>
                进货日期：2018/11/12
              </span>
              <span>保存方式：冷鲜</span>
            </div>
          </div>
        </router-link>
        <router-link to="" class="list-item pd-tb-20 d-fl al-center">
          <mu-checkbox v-model="form.checkbox" value="5" class="mr-10"></mu-checkbox>
          <img src="../../../static/images/shangpin/kugua.png" class="pic" alt="">
          <div class="fl-1 ml-10">
            <div class="d-fl fs-16 mb-10">
              <span class="fl-1">印度苦瓜</span>
              <span class="theme-color">2.5元/斤</span>
            </div>
            <div class="d-fl fs-12 mb-10">
              <span class="fl-1">分类：蔬菜</span>
              <span>产地：商丘蔬菜瓜果基地</span>
            </div>
            <div class="d-fl fs-12">
              <span class="fl-1">
                <i class="iconfont color-orange fs-14">&#xe67a;</i>
                进货日期：2018/11/12
              </span>
              <span>保存方式：冷鲜</span>
            </div>
          </div>
        </router-link>
      </section>
    </div>
    <div class="piliang d-fl">
      <div class="fl-1 d-fl al-center">
        <mu-checkbox v-model="form.checkbox" value="6" class="mr-10"></mu-checkbox>
        <span>全选</span>
      </div>
      <div>
        <span class="mr-10">合计：<span class="theme-color">1</span>个商品</span>
        <mu-button class="h42" color="primary">下架</mu-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabActive: 0,
      form:{
        checkbox:[],
      }
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>

<style scoped>
.list-item .pic {
  width: 1.4rem;
  height: 1.4rem;
}
.piliang {
  position: fixed;
  bottom: 1.18rem;
  left: 0;
  width: 100%;
  padding: 0.2rem 0.3rem;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  color: #fff;
}
</style>