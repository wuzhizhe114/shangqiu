<!-- 首页 -->
<template>
  <div class="index">
    <!-- 顶部 -->
    <div class="title lh-90 text-center color-white fs-18 of-hidden top_col">
      <a class="ml-30 fl-l" href="javascript:history.back(-1)">
        <i class="iconfont icon_back">&#xe65b;</i>
      </a>
      <p class="pr-50 item_left_title">店铺实用诊断</p>
    </div>
    <div class="basic-info color-white">
      <div class="d-fl mb-40">
        <img src="../../../static/images/index/qianmama.png" class="shanghu-pic" alt="">
        <div class="fl-1 ml-24">
          <p class="fs-16 dp_title">店铺名称：钱妈妈</p>
          <p class="fs-16 dp_title">经营类别：综合类</p>
          <p>
            <span class="dengji">信用等级：</span>
            <span class="yellow-color">
              <i class="iconfont">&#xe6ae;</i>
              <i class="iconfont">&#xe6ae;</i>
              <i class="iconfont">&#xe6ae;</i>
              <i class="iconfont">&#xe6ae;</i>
              <i class="iconfont">&#xe60c;</i>
            </span>
          </p>
        </div>
        <div class="xy_fen">
          <p class="num">98</p>
          <p class="title">信用分</p>
        </div>
      </div>
    </div>
    <div>
      <ly-tab
       id="layTab2"
        @change="ItemIndex(selectedId)"
        v-model="selectedId"
        :items="items"
        :options="options"
      ></ly-tab>
    </div>
    <div class="item_tab_box tab_1" v-if="selectedId == 0">
      <div class="item_list">
        <p class="title item_nav_title">市场经营信用评分</p>
        <div class="img_box">
          <img src="../../../static/images/index/leidatu2.png" alt="">
        </div>
      </div>
      <div class="item_list">
        <p class="title">我的信用评分走势图</p>
        <div class="img_box_tab">
          <img src="../../../static/images/index/zexiantu.png" alt="">
        </div>
      </div>
    </div>
    <div class="item_tab_box tab_2" v-if="selectedId == 1">
      <div class="item_list">
        <div class="img_box">
          <p>企业名称：广州钱大妈农产品经营有限公司</p>
          <p>社会统一信用代码：91440300870397751</p>
          <p>法定代表人：李元霸</p>
          <p>注册地址：商丘朝阳区</p>
          <p>注册地址：商丘朝阳区</p>
          <p>注册日期：2016年3月21</p>
        </div>
      </div>
      <div class="item_list">
        <p class="title bold">经营资格证</p>
        <div class="img_box_zx">
          <img src="../../../static/images/regist/zige1.png" alt="">
          <p class="title_name">营业执照</p>
        </div>
        <div class="img_box_zx">
          <img src="../../../static/images/regist/zige2.png" alt="">
          <p class="title_name">营业执照</p>
        </div>
        <div class="img_box_zx">
          <img src="../../../static/images/regist/zige3.png" alt="">
          <p class="title_name">营业执照</p>
        </div>
      </div>
    </div>
    <div class="item_tab_box tab_2" v-if="selectedId == 2">
      <div class="item_list">
        <div class="img_box">
          <p class="zgz_title">经营资格证</p>
          <p
            class="zgz_content"
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;主要包含经营执照、食品流通许可证、食品安全许可证等资质证明的真实性以及场地租赁合同的真实性等</p>
          <p class="zgz_jl">不良记录：( 无 )</p>
        </div>
      </div>
    </div>
    <div class="item_tab_box tab_2" v-if="selectedId == 3">
      <div class="item_list">
        <div class="">
          <p class="zgz_title">商品可信度</p>
          <p class="zgz_content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;主要商品来源可信、质量可信、描述可信等标准</p>
          <p class="zgz_jl">不良记录：( 3 )</p>
          <div class="item_bl_box">
            <div class="item_bl_list">
              <p>序</p>
              <p>类别</p>
              <p>原因</p>
              <p>记录时间</p>
            </div>
            <div class="item_bl_list item_old">
              <p>1</p>
              <p>来源可信</p>
              <p>凭证假造</p>
              <p>2017.5.5</p>
            </div>
            <div class="item_bl_list">
              <p>2</p>
              <p>来源可信</p>
              <p>凭证假造</p>
              <p>2017.5.5</p>
            </div>
            <div class="item_bl_list item_old">
              <p>3</p>
              <p>来源可信</p>
              <p>凭证假造</p>
              <p>2017.5.5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="item_tab_box tab_2" v-if="selectedId == 4">
      <div class="item_list">
        <div class="img_box">
          <p class="zgz_title">消费环境</p>
          <p
            class="zgz_content"
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;消费环境情况主要包括环境卫生、设施卫生和从业人员卫生等指标</p>
          <p class="zgz_jl">不良记录：( 0 )</p>
        </div>
      </div>
    </div>
    <div class="item_tab_box tab_2" v-if="selectedId == 5">
      <div class="item_list">
        <div class="img_box">
          <p class="zgz_title">管理服务</p>
          <p
            class="zgz_content"
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;消费环境情况主要包括环境卫生、设施卫生和从业人员卫生等指标</p>
          <p class="zgz_jl">不良记录：( 0 )</p>
        </div>
      </div>
    </div>
    <div class="item_tab_box tab_2" v-if="selectedId == 6">
      <div class="item_list">
        <div class="img_box">
          <p class="zgz_title">合规经营</p>
          <p
            class="zgz_content"
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;合规经营情况主要包括市场监管、司法执行、其他不良记录等指标。</p>
          <p class="zgz_jl">不良记录：( 0 )</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedId: 1,
      items: [
        {
          label: "综合分析"
        },
        {
          label: "基础信息"
        },
        {
          label: "身份真实"
        },
        {
          label: "商品可信"
        },
        {
          label: "消费环境"
        },
        {
          label: "管理服务"
        },
        {
          label: "合规经营"
        }
      ],
      options: {
        activeColor: "#fff"
      }
    };
  },
  components: {},
  computed: {},
  mounted() {},
  methods: {
    ItemIndex(item, index) {
      console.log(item);
      this.selectedId = item;
    }
  }
};
</script>

<style scoped>
.top_col {
  background-image: linear-gradient(-77deg, 
		#17d5fd 0%, 
		#0393d5 100%), 
	linear-gradient(
		#369dd9, 
		#369dd9);
}
.dengji {
  color: #333;
}
.xy_fen .num {
  text-align: right;
  font-size: 0.56rem;
  font-weight: normal;
  font-style: italic;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #1494d9;
  margin-top: 0.1rem;
}
.xy_fen .title {
  text-align: right;
  font-size: 0.24rem;
  letter-spacing: 0px;
  color: #666;
}
.index a {
  color: #969696;
}
.icon_back {
  color: #fff;
  margin-right: 0.2rem;
}
.basic-info {
  padding: 0.6rem 0.3rem 0.4rem;
  background-color: #fafafa;
  color: #333;
}
.basic-info .shanghu-pic {
  width: 1.3rem;
  height: 1.3rem;
}
.dp_title {
  font-size: 0.28rem;
  color: #333;
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
.item_tab_box {
  padding: 0.5rem 0rem;
  text-align: center;
}
.item_tab_box .title {
  color: #fa595e;
  font-size: 0.24rem;
  margin-bottom: 0.2rem;
}
.img_box {
  text-align: center;
  background-image: url("../../../static/images/index/leida-bg2.png");
  background-size: 100%;
  background-repeat: no-repeat;
}
.item_list {
  margin-bottom: 1rem;
}
.img_box img {
  width: 60%;
}
.img_box_zx img {
  width: 100%;
  height: 2rem;
}
.img_box_zx {
  width: 40%;
  float: left;
  margin-right: 4%;
}
.bold {
  font-weight: bold;
}
.tab_2 .item_list {
  padding: 0 3%;
  margin-bottom: 0.5rem;
}
.tab_2 .item_list p {
  text-align: left;
  color: #666666;
  font-size: 0.28rem;
}
.tab_2 .item_list .title_name {
  text-align: center;
  margin-top: 0.2rem;
}
.item_left_title {
  text-align: left;
  font-size: 0.28rem;
}
.img_box_tab {
  width: 70%;
  margin-left: 15%;
  margin-top: 0.5rem;
}
.item_tab_box .item_nav_title {
  margin-bottom: 0.5rem;
}
.zgz_title {
  color: #666;
  font-weight: bold;
  margin-bottom: 0.2rem;
}
.tab_2 .item_list .zgz_content {
  font-size: 0.24rem;
}
.zgz_jl {
  color: #666;
  font-weight: bold;
  margin-top: 0.5rem;
}
.item_bl_box {
  width: 80%;
  margin-left: 10%;
  margin-top: 0.5rem;
}
.item_bl_list {
  width: 100%;
  display: flex;
  background-color: #e5e5e5;
}
.item_old {
  width: 100%;
  display: flex;
  background-color: #eeeeee;
}
.tab_2 .item_list .item_bl_list p {
  flex: 1;
  text-align: center;
  line-height: 0.5rem;
}

</style>