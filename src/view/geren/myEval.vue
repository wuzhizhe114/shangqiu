<!-- 我的评价 -->
<template>
  <div class="my-eval">
    <div class="title lh-90 theme-bg text-center color-white fs-18 of-hidden">
      <a class="ml-30 fl-l" href="javascript:history.back(-1)">
        <i class="iconfont">&#xe65b;</i>
      </a>
      <p class="pr-50">我的评论</p>
    </div>
    <div class="gaikuan pd-lr-30 text-center pb-40 bg-white box-sh mb-20 of-hidden">
      <table class="fs-12 w-100 lh-52">
        <thead class="gray-b-b lh-60">
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
          <td>20</td>
          <td>54</td>
          <td>84</td>
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
          <td>6</td>
          <td>34</td>
          <td>57</td>
        </tr>
        <tr>
          <td class="text-left">
            二星评价
            <span class="yellow-color">
              <i class="iconfont">&#xe6ae;</i>
              <i class="iconfont">&#xe6ae;</i>
            </span>
          </td>
          <td>5</td>
          <td>14</td>
          <td>36</td>
        </tr>
        <tr>
          <td class="text-left">
            一星评价
            <span class="yellow-color">
              <i class="iconfont">&#xe6ae;</i>
            </span>
          </td>
          <td>2</td>
          <td>7</td>
          <td>24</td>
        </tr>
      </table>
    </div>
    <div class="eval-list pd-lr-30 bg-white box-sh pb-80">
      <!-- <div class="list-nav d-fl text-center">
        <div class="fl-1"><span></span></div>
        <div class="fl-1"><span></span></div>
        <div class="fl-1"><span></span></div>
        <div class="fl-1"><span></span></div>
        <div class="fl-1"><span></span></div>
        <div class="fl-1"><span></span></div>
      </div> -->
      <section class="">
        <mu-tabs :value.sync="tabActive" color="#fbfbfb" indicator-color="#fa595e" full-width class="gray-b-b">
          <mu-tab>今日</mu-tab>
          <mu-tab>五星</mu-tab>
          <mu-tab>四星</mu-tab>
          <mu-tab>三星</mu-tab>
          <mu-tab>二星</mu-tab>
          <mu-tab>一星</mu-tab>
        </mu-tabs>
      </section>
      <div class="list-item pd-tb-20 dash-b-b" v-for="(evalItem,evalIndex) in evalList" :key="evalIndex">
        <div class="d-fl mb-10 ">
          <div class="fl-1 fs-18">
            <span>匿名用户：{{evalItem.user}}</span>
          </div>
          <span class="gray-color fs-12">{{evalItem.time}}</span>
        </div>
        <div class="mb-10">
          <span>信用评级：</span>
          <span class="color-orange">
            <i class="iconfont" v-for="(sItem,sIndex) in evalItem.score" :key="sIndex+20">&#xe6ae;</i>
            <!-- <i class="iconfont">&#xe6ae;</i>
            <i class="iconfont">&#xe6ae;</i>
            <i class="iconfont">&#xe6ae;</i> -->
            <i class="iconfont" v-for="(sItem2,sIndex2) in (5 - evalItem.score)" :key="sIndex2+30">&#xe60c;</i>
          </span>
        </div>
        <div class="">
          <span>
            <i class="iconfont theme-color fs-22">&#xe61e;</i>
            印象:
          </span>
          <span class="round-tag" v-for="(tagItem,tagIndex) in evalItem.yinxiang" :key="tagIndex+40">{{tagItem}}</span>
        </div>
        <div>
          <span>
            <i class="iconfont theme-color fs-18 mr-6">&#xe6a3;</i>
            评语：
          </span>
          <span class="theme-color">萝卜有点老，不知道是不是放了几天的</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabActive: 0,
      evalList:[
        {
          user: 'gfdsfg3223',
          time: '2018/11/27',
          score: 5,
          yinxiang: ['态度良好','价格公道'],
          pingyu: '老板人很好，但是菜品不够新鲜，还有就是经营坏境有点恶劣，希望能改善'
        },
        {
          user: 'gfdsfg3223',
          time: '2018/11/27',
          score: 4,
          yinxiang: ['态度良好','价格公道'],
          pingyu: '老板人很好，但是菜品不够新鲜，还有就是经营坏境有点恶劣，希望能改善'
        },
        {
          user: 'gfdsfg3223',
          time: '2018/11/27',
          score: 4,
          yinxiang: ['态度良好','价格公道'],
          pingyu: '老板人很好，但是菜品不够新鲜，还有就是经营坏境有点恶劣，希望能改善'
        },
      ]
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>

<style scoped>
.gaikuan {
  background: url("../../../static/images/index/basic-bg.png") no-repeat #fff;
  background-size: 100% 100%;
}
</style>