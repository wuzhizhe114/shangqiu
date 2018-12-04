<!-- regist -->
<template>
  <div class="regist d-fl fl-col">
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
    <section class="fl-1 of-y-scroll result-one d-fl fl-col jc-center" v-if="tabActive === 0">
      <div class="input-box pd-lr-60 mb-178">
        <div class="item d-fl lh-60 mb-30">
          <span class="fs-16">手机号</span>
          <div class="input fl-1 ml-30 mr-10">
            <input type="text" class="round">
          </div>
          <mu-button class="input" color="primary">获取验证码</mu-button>
        </div>
        <div class="item d-fl lh-60 mb-30">
          <span class="fs-16">验证码</span>
          <div class="input fl-1 ml-30">
            <input type="text" class="round">
          </div>
        </div>
        <div class="item d-fl lh-60 mb-30">
          <span class="fs-16">密码</span>
          <div class="input fl-1 ml-30">
            <input type="text" class="round">
          </div>
        </div>
        <div class="item d-fl lh-60 mb-30">
          <span class="fs-16">确认密码</span>
          <div class="input fl-1 ml-30">
            <input type="text" class="round">
          </div>
        </div>
      </div>
      <div class="btn-box pd-lr-30">
        <mu-button full-width color="primary" @click="changeTabActive(1)">下一步</mu-button>
      </div>
    </section>
    <section class="fl-1 of-y-scroll result-two bg-white" v-if="tabActive === 1">
      <div class="qiye-info dash-b-b mb-26">
        <div class="item d-fl mb-10">
          <span class="d-fl al-center jc-end">企业名称：</span>
          <div class="input fl-1 mr-50">
            <input type="text" class="square">
          </div>
        </div>
        <div class="item d-fl mb-10">
          <span class="d-fl al-center jc-end">社会统一信用代码：</span>
          <div class="input fl-1 mr-50">
            <input type="text" class="square">
          </div>
        </div>
        <div class="item d-fl mb-10">
          <span class="d-fl al-center jc-end">经营者：</span>
          <div class="input fl-1 mr-50">
            <input type="text" class="square">
          </div>
        </div>
        <div class="item d-fl mb-10">
          <span class="d-fl al-center jc-end">组成形式：</span>
          <div class="input fl-1 mr-50">
            <input type="text" class="square">
          </div>
        </div>
        <div class="item d-fl mb-10">
          <span class="d-fl al-center jc-end">注册地址：</span>
          <div class="input fl-1 mr-50">
            <input type="text" class="square">
          </div>
        </div>
        <div class="item d-fl mb-10">
          <span class="d-fl al-center jc-end">注册日期：</span>
          <div class="input fl-1 mr-50">
            <input type="text" class="square">
          </div>
        </div>
        <div class="item d-fl mb-20">
          <span class="text-right">经营范围：</span>
          <div class="input fl-1 mr-50">
            <!-- <input type="text" class="square"> -->
            <textarea class="square" placeholder="请输入不少于20个字的文字书名，最多输入不超过200个字"></textarea>
          </div>
        </div>
      </div>
      <div class="zizhi-info mb-70">
        <div class="item">
          <div class="mb-10">请上传《营业执照》</div>
          <div class="zhengjian-box d-fl mb-26">
            <div class="br-3 pd-30 fb-bg gray-border mr-10">
              <img src="../../../static/images/regist/zige1.png" alt class="img">
            </div>
            <div class="fl-1 d-fl al-center">
              <mu-button class="h42" color="primary">编辑</mu-button>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="mb-10">请上传《食品安全许可证》</div>
          <div class="zhengjian-box d-fl mb-26">
            <div class="br-3 pd-30 fb-bg gray-border mr-10">
              <img src="../../../static/images/regist/zige2.png" alt class="img">
            </div>
            <div class="fl-1 d-fl al-center">
              <mu-button class="h42" color="primary">编辑</mu-button>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="mb-10">请上传《食品流通许可证》</div>
          <div class="zhengjian-box d-fl mb-26">
            <div class="br-3 pd-30 fb-bg gray-border mr-10">
              <img src="../../../static/images/regist/zige3.png" alt class="img">
            </div>
            <div class="fl-1 d-fl al-center">
              <mu-button class="h42" color="primary">编辑</mu-button>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="mb-10">请上传《从业人员健康证》</div>
          <div class="zhengjian-box d-fl mb-26">
            <div class="br-3 pd-30 fb-bg gray-border mr-10">
              <img src="../../../static/images/regist/jiankang.png" alt class="img">
            </div>
            <div class="fl-1 d-fl al-center">
              <mu-button class="h42" color="primary">编辑</mu-button>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-box mb-70">
        <mu-button full-width color="primary" @click="changeTabActive(2)">下一步</mu-button>
      </div>
    </section>
    <section class="fl-1 of-y-scroll result-three" v-if="tabActive === 2">
      <div class="qiye-info dash-b-b mb-26">
        <div class="item d-fl mb-10">
          <span class="d-fl al-center jc-end">甲方：</span>
          <div class="input fl-1 mr-50">
            <input type="text" class="square">
          </div>
        </div>
        <div class="item d-fl mb-10">
          <span class="d-fl al-center jc-end">地址：</span>
          <div class="input fl-1 mr-50">
            <input type="text" class="square">
          </div>
        </div>
        <div class="item d-fl mb-10">
          <span class="d-fl al-center jc-end">经营者：</span>
          <div class="input fl-1 mr-50">
            <input type="text" class="square">
          </div>
        </div>
        <div class="item d-fl mb-10">
          <span class="d-fl al-center jc-end">乙方：</span>
          <div class="input fl-1 mr-50">
            <input type="text" class="square">
          </div>
        </div>
        <div class="item d-fl mb-10">
          <span class="d-fl al-center jc-end">地址：</span>
          <div class="input fl-1 mr-50 mb-20">
            <input type="text" class="square">
          </div>
        </div>
        <div class="tips-box mr-50 fs-12 mb-26">
          <span>甲乙双方简历租赁关系，明确权利义务，依据《河南省商丘市商品交易市场管理条例》级有关法律、法规、规章、在平等自愿、协商一致的基础上、订立本合同</span>
        </div>
        <div class="item d-fl mb-20">
          <span class="d-fl al-center jc-end">合同有效期：</span>
          <div class=" fl-1 mr-50 fs-12 d-fl">
            <a class="date-btn gray-border br-3 fl-1" href="javascript:;">2018年11月20日
              <!-- <i class="iconfont icon-sanjiaoxing"></i> -->
            </a>
            <span class="m-10">至</span>
            <a class="date-btn gray-border br-3 fl-1" href="javascript:;">2020年11月20日
              <!-- <i class="iconfont icon-sanjiaoxing"></i> -->
              </a>
          </div>
        </div>
        <div class="tips-box fs-12 mr-50 mb-20">将雪苑农资批发市场的2楼4单元店铺，租赁给甲方进行商铺经营场地</div>
      </div>
      <div class="zizhi-info mb-70">
        <div class="item">
          <div class="mb-10">请上传《营业执照》</div>
          <div class="tips-box d-fl mb-26">
            <div class="br-3 pd-30 fb-bg gray-border mr-10">
              <img src="../../../static/images/regist/zige1.png" alt class="img">
            </div>
            <div class="fl-1 d-fl al-center">
              <mu-button class="h42" color="primary">编辑</mu-button>
            </div>
          </div>
        </div>
        <div class="item d-fl mb-10">
          <span class="d-fl al-center jc-end">经营者名称：</span>
          <div class="input fl-1 mr-50">
            <input type="text" class="square">
          </div>
        </div>
        <div class="item d-fl mb-10">
          <span class="d-fl al-center jc-end">组成形式：</span>
          <div class="input fl-1 mr-50">
            <input type="text" class="square">
          </div>
        </div>
        <div class="item d-fl mb-10">
          <span class="d-fl al-center jc-end">注册地址：</span>
          <div class="input fl-1 mr-50">
            <input type="text" class="square">
          </div>
        </div>
        <div class="item d-fl mb-10">
          <span class="d-fl al-center jc-end">注册时间：</span>
          <div class="input fl-1 mr-50">
            <input type="text" class="square">
          </div>
        </div>
        <div class="item d-fl mb-178">
          <span class="text-right">经营范围：</span>
          <div class="input fl-1 mr-50">
            <!-- <input type="text" class="square"> -->
            <textarea class="square" placeholder="请输入不少于20个字的文字书名，最多输入不超过200个字"></textarea>
          </div>
        </div>
      </div>
      <div class="btn-box mb-70">
        <mu-button full-width color="primary" @click="changeTabActive(2)">下一步</mu-button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabActive: 2
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    changeTabActive(index) {
      this.tabActive = index;
    }
  }
};
</script>

<style scoped>
/*第一步*/
.result-one {
  background: url("../../../static/images/regist/regist-bg.png") no-repeat;
  background-size: contain;
}
.result-one .input-box .item > span {
  width: 1.32rem;
  text-align: right;
}

/*第二步*/
.result-two,
.result-three {
  padding: 0.5rem 0.3rem;
}
.result-two .qiye-info .item > span {
  width: 2.6rem;
}
.zhengjian-box {
  padding-left: 2.6rem;
}
.result-two .zhengjian-box .img ,
.result-three .tips-box .img {
  width: 2.2rem;
  height: 1.6rem;
}

.result-three .item > span {
  width: 1.7rem;
}
.result-three .tips-box {
  padding-left: 1.7rem;
}
</style>