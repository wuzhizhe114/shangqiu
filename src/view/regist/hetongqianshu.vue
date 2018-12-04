<!-- 合同签署 -->
<template>
  <div class="hetong">
    <div class="title lh-90 theme-bg text-center color-white fs-18 of-hidden">
      <a class="ml-30 fl-l" href="javascript:history.back(-1)">
        <i class="iconfont">&#xe65b;</i>
      </a>
      <p class="pr-50">合同签署</p>
    </div>
    <div class="hetong-con">
      <div class="title fs-16 mb-10">第二十条　通知</div>
      <div class="text-inden mb-40">
        本合同规定和与本合同有关的所有联络均应按照收件的一方于本合同确定之地址或传真发出。上述联络如直接交付（包括通过邮件递送公司递交），则在交付时视为收讫；如通过传真发出，则在传真发出即时视为收讫，但必须有收件人随后的书面确认为证；如通过预付邮资的挂号邮件寄出，则寄出七天后视为收讫。
      </div>
      <div class="title fs-16 mb-10">第二十一条　其他</div>
      <div class="text-inden mb-178">
        本合同一式四份，甲乙双方各执二份，具有同等法律效力。
      </div>
    </div>
    <div class="dibu pd-lr-30">
      <div class="d-fl color-333 mb-20">
        <span class="fl-1">甲方：雪苑农贸市场</span>
        <span class="yifang">乙方：广州钱大妈农产品有限公司</span>
      </div>
      <div class="d-fl">
        <div class="zhang pr">
          <img src="../../../static/images/index/zhang1.png" alt="">
          <p class="zhang-tips">2018年 12月 05日</p>
        </div>
        <div class="fl-1 text-right pr">
          <div class="yifang2 d-fl jc-center al-center fs-12" @click="showToast">
            <span>点击签署</span>
          </div>
          <p class="yifang-tips">年 &nbsp;&nbsp; 月  &nbsp;&nbsp; 日</p>
        </div>
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

  methods: {
    showToast(){
      this.$alert('签署成功！', '温馨提示', {
        okLabel: '去登录'
      }).then(() => {
        this.$router.push('/login')
      });
    }
  }
};
</script>

<style scoped>
.hetong-con {
  padding: 0.8rem 0.3rem 0;
}
.dibu .yifang {
  width: 40%;
}
.dibu .zhang > img {
  width: 1.82rem;
  height: 1.82rem;
  margin-left: 0.8rem;
  /* background: url('../../../static/images/index/zhang1.png') no-repeat; */
  /* background-size: 100% 100%; */
}
.zhang-tips {
  position: absolute;
  width: 3.2rem;
  left: 0.1rem;
  top: 20%;
}
.yifang2 {
  position: absolute;
  top: 0;
  right: 0;
  width: 1.8rem;
  height: 100%;
  border: 1px dashed #ccc;
}
.yifang-tips {
  position: absolute;
  top: 20%;
  left: 2rem;
}
</style>