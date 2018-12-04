<!-- 我的资料 -->
<template>
    <div class="my-data">
        <div class="title lh-90 theme-bg text-center color-white fs-18 of-hidden">
            <a class="ml-30 fl-l" href="javascript:history.back(-1)">
                <i class="iconfont">&#xe65b;</i>
            </a>
            <p class="pr-50">合同内容</p>
        </div>
        <div class="basic-info d-fl pd-30 bg-white lh-60">
            <div class="left text-right">
                <div class="item gray-b-b">甲方：</div>
                <div class="pl-20 item gray-b-b">地址：</div>
                <div class="item gray-b-b">乙方：</div>
                <div class="item gray-b-b">地址：</div>
                <div class="item gray-b-b" style="margin-top:1.38rem">合同有效期：</div>
            </div>
            <div class="right fl-1">
                <div class="pl-20 item gray-b-b">李记熟食</div>
                <div class="pl-20 item gray-b-b">学院市场1懂4单元F916号</div>
                <div class="pl-20 item gray-b-b">学院农资市场市场管理处</div>
                <div class="pl-20 item gray-b-b">河南省商丘市睢阳区雪苑路西150米
                    <p
                        class="ht_title"
                    >甲乙双方简历租赁关系，明确权利义务，依据《河南省商丘市商品交易市场管理条例》级有关法律、法规、规章、在平等自愿、协商一致的基础上、定力本合同。</p>
                </div>
                <div class="pl-20 item gray-b-b">2018年11月11日至2018年11月11日</div>
                <div class="pl-20 item gray-b-b ht_title">将雪苑农资批发市场的2楼4单元店铺，租赁给甲方进行商铺经营场地</div>
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
        </div>
        <div class="basic-info d-fl pd-30 bg-white lh-60">
            <div class="left text-right">
                <div class="item gray-b-b">经营者名称：</div>
                <div class="pl-20 item gray-b-b">注册地址：</div>
                <div class="item gray-b-b">注册日期：</div>
                <div class="item gray-b-b">经营范围：</div>
            </div>
            <div class="right fl-1">
                <div class="pl-20 item gray-b-b">李记熟食</div>
                <div class="pl-20 item gray-b-b">商丘市睢阳区</div>
                <div class="pl-20 item gray-b-b">2018年3月21日</div>
                <div class="pl-20 item gray-b-b">蔬菜、果品、、禽蛋、副食、种子</div>
            </div>
            
        </div>
    <mu-button class="next_btn" color="primary" href="javascript:history.go(-1)">返回</mu-button>

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
.body a {
    color: #fff;
}
.basic-info .left {
}
.basic-info .right {
}
.next_btn {
  width: 90%;
  margin: 0.3rem 5%;
}
.gray-b-b {
  border-bottom: 0px solid #bdc5cb;
}
.ht_title {
  font-size: 0.14rem;
  display: block;
  line-height: 0.36rem;
  color: #b2adad;
}
.zizhi-info .img {
  width: 2.2rem;
  height: 1.48rem;
}
</style>