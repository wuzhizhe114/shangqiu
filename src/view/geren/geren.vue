<!-- 个人 -->
<template>
  <div class="geren d-fl fl-col">
    <div class="user-info">
      <div class="info d-fl pd-lr-30 pt-60">
        <div class="img-box">
          <img src="../../../static/images/geren/user-icon.png" class="user-icon br-half" alt="">
        </div>
        <div class="fl-1 ml-30">
          <span class="color-white fs-22">卡卡</span>
        </div>
        <img src="../../../static/images/geren/erweima.png" class="erweima" alt="" @click="Showcode">
      </div>
      <div class="xiaoxi d-fl color-white text-center pd-lr-30 fs-12">
        <router-link to="/geren/myEval" class="fl-1 color-white">
          <span>365</span>
          <p>收到评论</p>
        </router-link>
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
      <div class="item gray-b-b2">
        <router-link to class="d-fl pd-tb-20">
          <i class="iconfont color-blue mr-10">&#xe64e;</i>
          <span>消息通知</span>
          <span class="fl-1 text-right mr-10 fs-12 gray-color d-fl al-center jc-end">
              您有5条新消息
              <i class="red-point ml-10"></i>
            </span>
          <i class="iconfont rotate-ne-90 fs-16">&#xe9fd;</i>
        </router-link>
      </div>
      <div class="item">
        <router-link to="/geren/shopDiagnosis" class="d-fl pd-tb-20">
          <i class="iconfont yellow-color mr-10">&#xe611;</i>
          <span>信用档案</span>
          <span class="fl-1 text-right mr-10 fs-12 gray-color d-fl al-center jc-end"></span>
          <i class="iconfont rotate-ne-90 fs-16">&#xe9fd;</i>
        </router-link>
      </div>
    </div>
    <div class="operate2 bg-white fl-1 box-sh">
      <div class="item gray-b-b2">
        <router-link to="/geren/myData" class="d-fl pd-tb-20">
          <i class="iconfont theme-color mr-10">&#xe6d7;</i>
          <span>我的资料</span>
          <span class="fl-1 text-right mr-10 fs-12 gray-color d-fl al-center jc-end"></span>
          <i class="iconfont rotate-ne-90 fs-16">&#xe9fd;</i>
        </router-link>
      </div>
      <router-link to="/geren/contract" class="item d-fl pd-tb-20 gray-b-b2">
        <i class="iconfont color-blue2 mr-10">&#xe79a;</i>
        <span>电子合同</span>
        <span class="fl-1 text-right mr-10 fs-12 gray-color d-fl al-center jc-end">2个商品</span>
        <i class="iconfont rotate-ne-90 fs-16">&#xe9fd;</i>
      </router-link>
      <div class="item d-fl pd-tb-20">
        <i class="iconfont color-999 mr-10">&#xe671;</i>
        <span>系统设置</span>
        <span class="fl-1 text-right mr-10 fs-12 gray-color d-fl al-center jc-end"></span>
        <i class="iconfont rotate-ne-90 fs-16">&#xe9fd;</i>
      </div>
    </div>
    <div class="popup" v-if="openSimple">
      <div class="pupup_bg"></div>
      <div class="pupop_content">
        <div class="user_img_box">
          <img class="user_img" src="../../assets/images/index/carousel1.png" alt="">
        </div>
        <div class="content_box">
          <p class="user_title">何记熟食
            <i class="iconfont geren_icon">&#xe621;</i>
          </p>
          <div class="add_ress">
            <span class="">河南</span>
            <span class="">商丘</span>
          </div>
          <div>
            <img class="code_img" src="../../assets/images/index/code.png" alt="">
          </div>
        </div>
      </div>
      <div class="btn_box">
        <mu-button class="item_btn" @click="Closecode">返回</mu-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        openSimple: false
      };
    },
    components: {},
    computed: {},
    mounted() {},
    methods: {
     Showcode(){
       this.openSimple = true;
     },
     Closecode(){
       this.openSimple = false;
     }
    }
  };
</script>

<style scoped>
  .user-info {
    height: 3.04rem;
    background: url("../../../static/images/geren/geren-bg.png") no-repeat;
    background-size: 100%;
  }
  .user-info .img-box>.user-icon {
    width: 1.36rem;
    height: 1.36rem;
    border: 3px solid rgba(255, 255, 255, 0.5);
  }
  .user-info .erweima {
    width: 0.98rem;
    height: 0.98rem;
    border: 3px solid #fff;
  }
  .user-info .xiaoxi>.fl-1:nth-child(2),
  .user-info .xiaoxi>.fl-1:nth-child(3) {
    border-left: 1px solid #ccc;
  }
  .operate1,
  .operate2 {
    padding: 0 0.3rem 0 0.6rem;
  }
  .popup .pupup_bg {
    width: 100%;
    height: 100%;
    opacity: 0.5;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    background-color: #000;
  }
  .pupop_content {
    width: 80%;
    margin: 0 auto;
    position: fixed;
    top: 20%;
    left: 50%;
    background: #fff;
    z-index: 10;
    transform: translate(-50%, -20%);
    border-radius: 0.1rem;
    background-image: url('../../assets/images/index/code_bg.png');
    background-repeat: no-repeat;
    background-size: 100%;
    padding: .4rem;
    display: flex;
    flex: 1;
  }
  .user_img_box {
    width: 1.4rem;
    height: 1.4rem;
    background: #ddd;
    border-radius: 50%;
    text-align: center;
  }
  .user_img {
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    margin-top: 0.05rem;
  }
  .content_box {
    flex: 1;
    padding-left: 0.8rem;
  }
  .user_title {
    font-size: 0.3rem;
    color: #000;
    font-weight: bold;
    margin-bottom: 0.2rem;
  }
  .add_ress {
    margin-bottom: 0.3rem;
  }
  .add_ress span {
    margin-right: .4rem;
    color: #000;
    opacity: 0.5;
    font-size: 0.18rem;
  }
  .code_img {
    width: 2.3rem;
    height: 2.3rem;
  }
  .geren_icon {
    margin-left: 0.2rem;
    color: #358ef2;
  }
  .btn_box {
    position: fixed;
    z-index: 99;
    bottom: 35%;
    left: 10%;
    width: 80%;
  }
  .item_btn {
    background-color: #fa595e;
    border-radius: 40px;
    width: 100%;
    color: #fff;
  }
</style>