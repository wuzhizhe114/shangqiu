<!-- 首页 -->
<template>
  <div class="index">
    <div class="basic-info pd-lr-30 bg-white box-sh fs-12 mb-20 of-hidden">
      <div class="title lh-90 theme-color fs-18 text-center">我的信用档案</div>
      <div class="d-fl mb-20">
        <div class="fl-1">
          <span>信用等级：</span>
          <span class="yellow-color">
            <i class="iconfont">&#xe6ae;</i>
            <i class="iconfont">&#xe6ae;</i>
            <i class="iconfont">&#xe6ae;</i>
            <i class="iconfont">&#xe6ae;</i>
            <i class="iconfont">&#xe60c;</i>
          </span>
        </div>
        <div class="right">
          <span>当前排名：</span>
          <span class="theme-color">第一名</span>
        </div>
      </div>
      <div class="d-fl mb-20">
        <div class="fl-1">
          <span>商户位置：</span>
          <span class="gray-color">3楼301号</span>
        </div>
        <div class="right">
          <span>经营范围：</span>
          <span class="gray-color">蔬菜、果品、副食</span>
        </div>
      </div>
      <div class="d-fl mb-20">
        <div class="fl-1">
          <span>上传证照：</span>
          <span class="gray-color">12</span>
        </div>
        <div class="right">
          <span>商品数量：</span>
          <span class="gray-color">34</span>
        </div>
      </div>
      <div class="d-fl mb-20">
        <div class="fl-1">
          <span>浏览人数：</span>
          <span class="gray-color">215 人</span>
        </div>
      </div>
    </div>
    <div class="leida pd-lr-30 text-center pb-40 bg-white box-sh mb-20">
      <div class="theme-color lh-90 fs-18">市场经营信用评分</div>
      <img src="../../static/images/index/leidatu.png" alt>
    </div>
    <div class="zhexian pd-lr-30 text-center pb-40 bg-white box-sh mb-20">
      <div class="theme-color lh-90 fs-18">我的信用评分走势图</div>
      <img src="../../static/images/index/zexiantu.png" alt>
    </div>
    <div class="xinyonpingjia pd-lr-30 text-center pb-40 bg-white box-sh mb-20 of-hidden">
      <div class="theme-color lh-90 fs-18">信用评价</div>
      <table class="fs-12 w-100 lh-52">
        <thead class="gray-b-b">
          <tr class="fs-14">
            <th width="46%">信用等级</th>
            <th width="18%">今日</th>
            <th width="18%">本周</th>
            <th width="18%">本月</th>
          </tr>
        </thead>
        <tr>
          <td class="text-left">
            五星评价
            <span class="yellow-color">
              <i class="iconfont">&#xe6ae;</i>
              <i class="iconfont">&#xe6ae;</i>
              <i class="iconfont">&#xe6ae;</i>
              <i class="iconfont">&#xe6ae;</i>
              <i class="iconfont">&#xe6ae;</i>
            </span>
          </td>
          <td>10</td>
          <td>40</td>
          <td>100</td>
        </tr>
        <tr>
          <td class="text-left">
            四星评价
            <span class="yellow-color">
              <i class="iconfont">&#xe6ae;</i>
              <i class="iconfont">&#xe6ae;</i>
              <i class="iconfont">&#xe6ae;</i>
              <i class="iconfont">&#xe6ae;</i>
            </span>
          </td>
          <td>10</td>
          <td>40</td>
          <td>100</td>
        </tr>
        <tr>
          <td class="text-left">
            三星评价
            <span class="yellow-color">
              <i class="iconfont">&#xe6ae;</i>
              <i class="iconfont">&#xe6ae;</i>
              <i class="iconfont">&#xe6ae;</i>
            </span>
          </td>
          <td>10</td>
          <td>40</td>
          <td>100</td>
        </tr>
        <tr>
          <td class="text-left">
            二星评价
            <span class="yellow-color">
              <i class="iconfont">&#xe6ae;</i>
              <i class="iconfont">&#xe6ae;</i>
            </span>
          </td>
          <td>10</td>
          <td>40</td>
          <td>100</td>
        </tr>
        <tr>
          <td class="text-left">
            一星评价
            <span class="yellow-color">
              <i class="iconfont">&#xe6ae;</i>
            </span>
          </td>
          <td>10</td>
          <td>40</td>
          <td>100</td>
        </tr>
      </table>
    </div>
    <div class="xinyongongai pd-lr-30 pb-40 bg-white box-sh mb-20">
      <div class="lh-90 theme-color fs-18 text-center">信用公告</div>
      <div class="slide">
        <mu-carousel hide-controls @change="changeActive">
          <template slot="indicator">
            <mu-button
              icon
              class="mu-carousel-indicator-button"
              :class="{'mu-carousel-indicator-button__active': active}"
              slot-scope="{ index, active }"
            >
              <span class="rect-indicator"></span>
            </mu-button>
          </template>
          <p class="carousel-tips text-ell">
            <span v-if="active == 0">市场部门开展食品安全整治</span>
            <span v-else-if="active == 1">2</span>
            <span v-else-if="active == 2">3</span>
            <span v-else-if="active == 3">4</span>
            <span v-else>无</span>
          </p>
          <mu-carousel-item>
            <img src="../../static/images/index/carousel1.png">
          </mu-carousel-item>
          <mu-carousel-item>
            <img src="../../static/images/index/carousel1.png">
          </mu-carousel-item>
          <mu-carousel-item>
            <img src="../../static/images/index/carousel1.png">
          </mu-carousel-item>
          <mu-carousel-item>
            <img src="../../static/images/index/carousel1.png">
          </mu-carousel-item>
        </mu-carousel>
      </div>
    </div>
    <!-- 信用排行 -->
    <div class="xinyongpaihang bg-white box-sh mb-70 pd-lr-30">
      <div class="lh-90 theme-color text-center fs-18">本期信用之星</div>
      <div class="pl-30">
        <div class="first-box">
          <router-link to="/dianpu">
            <div class="img-box pr">
              <img src="../../static/images/index/first_pic.png" class="first-pic" alt>
              <p class="mock-tips">
                <span>信用评级：</span>
                <span class="yellow-color">
                  <i class="iconfont">&#xe6ae;</i>
                  <i class="iconfont">&#xe6ae;</i>
                  <i class="iconfont">&#xe6ae;</i>
                  <i class="iconfont">&#xe6ae;</i>
                  <i class="iconfont">&#xe60c;</i>
                </span>
              </p>
            </div>
            <div class="lh-90 d-fl">
              <div class="fl-1">
                商品数量：
                <span class="theme-color">30</span>
              </div>
              <div class="fl-1">
                <i class="iconfont theme-color">&#xe6a3;</i>
                <span>3452</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="second-third d-fl dash-b-b">
          <div class="second-box fl-1">
            <div class="img-box pr">
              <img src="../../static/images/index/second_pic.png" alt>
              <p class="mock-tips">
                <span class="fs-12">信用评级:</span>
                <span class="yellow-color">
                  <i class="iconfont fs-12">&#xe6ae;</i>
                  <i class="iconfont fs-12">&#xe6ae;</i>
                  <i class="iconfont fs-12">&#xe6ae;</i>
                  <i class="iconfont fs-12">&#xe6ae;</i>
                  <i class="iconfont fs-12">&#xe60c;</i>
                </span>
              </p>
            </div>
            <div class="lh-90 d-fl fs-12">
              <div class="fl-1">
                商品数量：
                <span class="theme-color">30</span>
              </div>
              <div>
                <i class="iconfont theme-color">&#xe6a3;</i>
                <span>3452</span>
              </div>
            </div>
          </div>
          <div class="shuxian m-lr-20"></div>
          <div class="third-box fl-1">
            <div class="img-box pr">
              <img src="../../static/images/index/third_pic.png" alt>
              <p class="mock-tips">
                <span class="fs-12">信用评级:</span>
                <span class="yellow-color">
                  <i class="iconfont fs-12">&#xe6ae;</i>
                  <i class="iconfont fs-12">&#xe6ae;</i>
                  <i class="iconfont fs-12">&#xe6ae;</i>
                  <i class="iconfont fs-12">&#xe6ae;</i>
                  <i class="iconfont fs-12">&#xe60c;</i>
                </span>
              </p>
            </div>
            <div class="lh-90 d-fl fs-12">
              <div class="fl-1">
                商品数量：
                <span class="theme-color">30</span>
              </div>
              <div>
                <i class="iconfont theme-color">&#xe6a3;</i>
                <span>3452</span>
              </div>
            </div>
          </div>
        </div>
        <div class="other mb-30">
          <div class="oter-item d-fl pd-tb-20 gray-b-b2">
            <img src="../../static/images/index/qiandama.png" alt>
            <div class="fl-1 ml-30">
              <div class="d-fl mb-10">
                <div class="title fl-1 fs-16">钱大妈</div>
                <span>
                  商品数量：
                  <span class="theme-color">30</span>
                </span>
              </div>
              <div>
                <span class="fs-12">信用评级:</span>
                <span class="yellow-color">
                  <i class="iconfont fs-12">&#xe6ae;</i>
                  <i class="iconfont fs-12">&#xe6ae;</i>
                  <i class="iconfont fs-12">&#xe6ae;</i>
                  <i class="iconfont fs-12">&#xe6ae;</i>
                  <i class="iconfont fs-12">&#xe60c;</i>
                </span>
              </div>
            </div>
          </div>
          <div class="oter-item d-fl pd-tb-20 gray-b-b2">
            <img src="../../static/images/index/qiandama.png" alt>
            <div class="fl-1 ml-30">
              <div class="d-fl mb-10">
                <div class="title fl-1 fs-16">钱大妈</div>
                <span>
                  商品数量：
                  <span class="theme-color">30</span>
                </span>
              </div>
              <div>
                <span class="fs-12">信用评级:</span>
                <span class="yellow-color">
                  <i class="iconfont fs-12">&#xe6ae;</i>
                  <i class="iconfont fs-12">&#xe6ae;</i>
                  <i class="iconfont fs-12">&#xe6ae;</i>
                  <i class="iconfont fs-12">&#xe6ae;</i>
                  <i class="iconfont fs-12">&#xe60c;</i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="show-more text-center gray-color">
          <p>查看更多</p>
          <i class="iconfont">&#xe9fd;</i>
        </div>
      </div>
    </div>
    <!-- <mu-bottom-sheet :open.sync="open">
      <div>
        <p>12313</p>
      </div>
    </mu-bottom-sheet> -->
    <div class="category-popup-bg" v-if="categoryPopup">
      <div class="category-popup-box pd-lr-30">
        <div class="lh-90 text-center fs-16 theme-color">
          <i class="iconfont">&#xe6d0;</i>
          <span>请选择商品类型</span>
        </div>
        <div class="of-hidden">
          <a href="javascript:;" @click="changeCategoryActive('0')" :class="{'tags-square':true, 'active':categoryActive === '0'}">蔬菜</a>
          <a href="javascript:;" @click="changeCategoryActive('1')" :class="{'tags-square':true, 'active':categoryActive === '1'}">蔬菜</a>
          <a href="javascript:;" @click="changeCategoryActive('2')" :class="{'tags-square':true, 'active':categoryActive === '2'}">蔬菜</a>
          <a href="javascript:;" @click="changeCategoryActive('3')" :class="{'tags-square':true, 'active':categoryActive === '3'}">蔬菜</a>
          <a href="javascript:;" @click="changeCategoryActive('4')" :class="{'tags-square':true, 'active':categoryActive === '4'}">蔬菜</a>
          <a href="javascript:;" @click="changeCategoryActive('5')" :class="{'tags-square':true, 'active':categoryActive === '5'}">蔬菜</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      open: true,
      categoryActive: '0',
      categoryPopup: false
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    changeActive(index) {
      this.active = index;
      // this.categoryPopup = true
    },
    changeCategoryActive(param){
      this.categoryActive = param;
      this.categoryPopup = false;
    }
  }
};
</script>

<style scoped>
/* 信用评级 tips */
.mock-tips {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  line-height: 0.54rem;
  padding-left: 0.2rem;
  font-size: 0.24rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
}

.basic-info,
.xinyonpingjia {
  background: url("../../static/images/index/basic-bg.png") no-repeat #fff;
  background-size: 100% 100%;
}
.leida {
  background: url("../../static/images/index/leida-bg.png") no-repeat #fff;
  background-size: 100% 100%;
}
.leida > img {
  width: 4.7rem;
  /* height: ; */
}
.zhexian > img {
  width: 5.1rem;
}
.basic-info .right {
  width: 3.2rem;
}
.xinyongongai .slide {
  height: 2.74rem;
}
.carousel-tips {
  position: absolute;
  bottom: 0.06rem;
  left: 0.1rem;
  width: 78%;
  color: #fff;
  z-index: 10;
}

/* 信用排行*/
.xinyongpaihang .first-box .img-box {
  height: 3.34rem;
}
.xinyongpaihang .first-box .img-box::before {
  content: "";
  position: absolute;
  top: -0.26rem;
  left: -0.3rem;
  width: 0.58rem;
  height: 0.64rem;
  background-image: url("../../static/images/index/first.png");
  background-size: contain;
}
.xinyongpaihang .second-box .img-box,
.xinyongpaihang .third-box .img-box {
  height: 1.8rem;
}
.xinyongpaihang .second-box .img-box::before,
.xinyongpaihang .third-box .img-box::before {
  content: "";
  position: absolute;
  top: -0.2rem;
  left: -0.2rem;
  width: 0.42rem;
  height: 0.54rem;
  background-image: url("../../static/images/index/second.png");
  background-size: contain;
}
.xinyongpaihang .third-box .img-box::before {
  background-image: url("../../static/images/index/third.png");
}
.xinyongpaihang .shuxian {
  width: 0px;
  height: 1.8rem;
  border-left: 1px dashed #bdc5cb;
}
.xinyongpaihang .oter-item > img {
  width: 1.7rem;
  height: 0.96rem;
}
</style>