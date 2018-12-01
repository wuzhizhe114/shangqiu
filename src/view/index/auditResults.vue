<!-- 审核结果 -->
<template>
  <div class="bg-white">
    <div class="title lh-90 theme-bg text-center color-white fs-18 d-fl">
      <span class="ml-30">&lt;</span>
      <span class="fl-1">审核结果</span>
    </div>
    <div class="result-box text-center">
      <p>
        <img class="img" :src="active ? '../../../static/images/regist/success.png' : '../../../static/images/regist/fail.png'" alt="">
      </p>
      <div class="tips mb-70">
        <p class="theme-dash-b pd-10 text-left">{{ active ? successText : failText}}</p>
      </div>
      <div v-if="active">
        <mu-button full-width color="primary" @click="changeActive">立即验证</mu-button>
      </div>
      <div v-else>
        <mu-button full-width color="primary" @click="changeActive" class="mb-40">重新填写资料</mu-button>
        <mu-button full-width color="default">退出</mu-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: true,
      successText:'尊敬的李元霸，您的商户入驻申请已经通过审核，雪苑市场欢迎您的加入。',
      failText: '很抱歉，您的资质审核未通过，请重新编辑资料并提交审核。如有疑问，请与该市场相关管理人员联系。',

    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    changeActive(){
      this.active = !this.active
    }
  }
};
</script>

<style scoped>
.result-box {
  padding: 1.6rem 0.3rem;
}
.result-box .img {
  width: 5rem;
}
.result-box .tips {
  padding: 0.6rem;
}
</style>