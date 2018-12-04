<!-- 登录 -->
<template>
    <div>
        <!-- 登录 -->
        <div>
            <!-- 顶部 -->
            <div class="title lh-90 theme-bg text-center color-white fs-18 of-hidden top_col">
                <a class="ml-30 fl-l" href="javascript:history.back(-1)">
                    <i class="iconfont">&#xe65b;</i>
                </a>
                <p class="pr-50">入驻审核</p>
            </div>
            <div class="content_box">
                <div class="content_list">
                    <div class="item_step" v-if="Itemstep == 1">
                        <div class="step_list">
                            <p class="num">1</p>
                            <p class="name_title">提交资料</p>
                        </div>
                        <div class="line_two">
                            <img src="../../assets/images/index/item_one.png" alt="">
                        </div>
                        <div class="step_list">
                            <p class="num">2</p>
                            <p class="name_title">合同审核</p>
                        </div>
                    </div>
                    <div class="item_step" v-if="Itemstep == 2">
                        <div class="step_list">
                            <p class="num">1</p>
                            <p class="name_title">提交资料</p>
                        </div>
                        <div class="line_two">
                            <img src="../../assets/images/index/item_two.png" alt="">
                        </div>
                        <div class="step_list">
                            <p class="num">2</p>
                            <p class="name_title">合同审核</p>
                        </div>
                    </div>
                    <div class="item_step" v-if="Itemstep == 3">
                        <div class="step_list">
                            <p class="num">1</p>
                            <p class="name_title">提交资料</p>
                        </div>
                        <div class="line_two">
                            <img src="../../assets/images/index/item_three.png" alt="">
                        </div>
                        <div class="step_list">
                            <p class="num">2</p>
                            <p class="name_title">合同签署</p>
                        </div>
                    </div>
                </div>
                <!-- 第一步 -->
                <form action="" v-if="Itemstep == 1" class="contetn_form">
                    <div class="zt_msg">
                        <div class="item_nav_box">
                            <i class="iconfont user_name_icon">&#xe630;</i>
                            <span>主体信息</span>
                        </div>
                        <label class="usrname_box" for="">
                            <i class="iconfont user_name_icon">&#xe626;</i>
                            <input
                                class="user_name"
                                autocomplete="new-password"
                                type="text"
                                placeholder="请输入机构名称"
                            >
                        </label>
                        <label class="usrname_box" for="">
                            <i class="iconfont user_name_icon">&#xe627;</i>
                            <input
                                class="password"
                                autocomplete="new-password"
                                type="text"
                                placeholder="请输入社会信用统一代码"
                            >
                        </label>
                        <label class="usrname_box" for="">
                            <i class="iconfont user_name_icon">&#xe624;</i>
                            <input
                                class="password"
                                autocomplete="new-password"
                                type="text"
                                placeholder="请输入法定代表人姓名"
                            >
                        </label>
                        <label class="usrname_box" for="">
                            <i class="iconfont user_name_icon">&#xe674;</i>
                            <input
                                class="password"
                                autocomplete="new-password"
                                type="text"
                                placeholder="请输入身份证号码"
                            >
                        </label>
                    </div>
                    <div class="upload">
                        <div class="item_nav_box">
                            <i class="iconfont user_name_icon">&#xe630;</i>
                            <span>请上传《营业执照》</span>
                        </div>
                        <label class="upload_carme_box" for="">
                            <div class="carme_box">
                                <i class="iconfont user_upload_icon">&#xe604;</i>
                            </div>
                            <mu-button class="upload_btn">上传</mu-button>
                        </label>
                    </div>
                    <div class="upload">
                        <div class="item_nav_box">
                            <i class="iconfont user_name_icon">&#xe630;</i>
                            <span>店铺名称</span>
                        </div>
                        <label class="upload_carme_box" for="">
                            <mu-col span="12" lg="4" sm="6">
                                <mu-select filterable v-model="filterable.value1" full-width>
                                    <mu-option
                                        v-for="(city,index) in citys"
                                        :key="index"
                                        :label="city"
                                        :value="city"
                                    ></mu-option>
                                </mu-select>
                            </mu-col>
                        </label>
                        <label class="du_name" for="">
                            <input
                                class="password"
                                autocomplete="new-password"
                                type="text"
                                placeholder="请输入店铺名称（15字以内）"
                            >
                        </label>
                    </div>
                    <div class="upload">
                        <div class="item_nav_box">
                            <i class="iconfont user_name_icon">&#xe630;</i>
                            <span>请选择营业类别</span>
                        </div>
                        <label class="upload_carme_box" for="">
                            <mu-col span="12" lg="4" sm="6">
                                <mu-select filterable v-model="filterable.value1" full-width>
                                    <mu-option
                                        v-for="(city,index) in citys"
                                        :key="index"
                                        :label="city"
                                        :value="city"
                                    ></mu-option>
                                </mu-select>
                            </mu-col>
                        </label>
                        <label class="upload_carme_box" for="">
                            <div class="carme_box lb_carme_box">
                                <i class="iconfont user_upload_icon">&#xe604;</i>
                                <span class="item_pic_name">食品流通许可证</span>
                            </div>
                            <mu-button class="upload_btn">上传</mu-button>
                        </label>
                        <label class="upload_carme_box" for="">
                            <div class="carme_box lb_carme_box">
                                <i class="iconfont user_upload_icon">&#xe604;</i>
                                <span class="item_pic_name">食品安全许可证</span>
                            </div>
                            <mu-button class="upload_btn">上传</mu-button>
                        </label>
                    </div>
                    <mu-button class="login_item_btn item_btn tijiao" @click="Acticestep('2')">提交审核</mu-button>
                </form>
                <div class="step_two" v-if="Itemstep == 2">
                    <img src="../../assets/images/index/step_2.png" alt="">
                    <p class="success_title">提交成功，请耐心等待市场人员审核</p>
                    <p class="sh_time">预计将在1-3个工作日内审核完成，审核结果将会以短信形式发送至您注册的手机号</p>
                    <p class="lxfs">
                        市场联系方式：
                        <span class="red">07558623758</span>
                    </p>
                    <mu-button class="login_item_btn item_btn" @click="Acticestep('3')">下一步</mu-button>
                </div>
                <div class="step_two" v-if="Itemstep == 3">
                    <img src="../../assets/images/index/success.png" alt="">
                    <p class="success_title">审核成功，请签署商户入驻电子合同</p>
                    <p class="sh_time">请核对合同条款及内容并完成签署，若合同内容有误，可联系市场人员进行修改</p>
                    <p class="lxfs">
                        市场联系方式：
                        <span class="red">07558623758</span>
                    </p>
                    <mu-button class="login_item_btn item_btn">签署合同</mu-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      Itemstep: 1,
      citys: ["依据营业执照名称1", "依据营业执照名称1"],
      filterable: {
        value1: "依据营业执照名称1"
      }
    };
  },
  components: {},
  computed: {},
  mounted() {},
  methods: {
    Acticestep(res) {
      this.Itemstep = res;
    }
  }
};
</script>

<style scoped>
.item_step {
  width: 70%;
  margin: 0 auto;
  display: flex;
  color: #fff;
}
.content_list {
  text-align: center;
  background-color: #ff3d3e;
  margin-bottom: 20px;
  padding: 20px 0;
}
.name_title {
  margin-top: 5px;
}
.line_r {
  padding-top: 5px;
  width: 56%;
  overflow: hidden;
}
.line_three {
  width: 56%;
  height: 1px;
  background-color: #fff;
  margin-top: 18px;
}
.num {
  background-color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: #fa595e;
  line-height: 30px;
  text-align: center;
  margin: 0 auto;
}
.line_two {
  width: 56%;
  margin-top: 10px;
}
.line_two img {
  width: 100%;
  height: auto;
}
.swapper {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/images/index/timg.png");
  background-repeat: repeat-y;
  background-size: 100%;
}
.ml-30 {
  margin-left: 0.3rem;
  margin-right: 0.15rem;
}
.button-wrapper {
  text-align: center;
}
.button-wrapper .mu-button {
  margin: 8px;
}
.item_btn {
  display: block;
  width: 100%;
  text-align: center;
  padding: 0.125rem;
  border-radius: 0.12rem;
  background-color: none;
}
.login_btn {
  border: 1px solid #fa595e;
  color: #f9585e;
  margin-bottom: 20px;
  background-color: #f3f4ef2e;
}
.login_item_btn {
  width: 100%;
  border: 1px solid #fa595e;
  color: #f9585e;
  margin-top: 50px;
  background-color: #fa595e;
  border-radius: 40px;
  color: #fff;
  margin-bottom: 40px;
}
.regist_btn {
  background-color: #fa595e;
  color: #fff;
}
.swarpper_box {
  position: fixed;
  bottom: 15%;
  width: 80%;
  left: 10%;
}
.Forget_password {
  display: inline-block;
  width: 80%;
  text-align: right;
  margin-left: 10%;
  color: #fa595e;
  margin-top: 10px;
}
.top_col {
  color: #fff;
  background-color: #ff3d3e;
  text-align: left;
}
.content_title {
  color: #fff;
  background-color: #ff3d3e;
  text-align: center;
  padding: 60px;
  font-size: 0.34rem;
  font-weight: bold;
}
.input_icon {
  width: 30px;
  height: 30px;
}
.user_name_icon {
  color: #ff3d3e;
  font-size: 0.42rem;
  vertical-align: middle;
}
.user_name,
.password {
  display: inline-block;
  width: 80%;
  background-color: #ff000000;
}
.usrname_box {
  display: inline-block;
  width: 70%;
  margin: 0 auto;
  margin-left: 15%;
  margin-top: 0.5rem;
  border-bottom: 1px solid #ddd;
}
.contetn_form {
  margin-top: 40px;
}
.item_nav_box {
  width: 50%;
  margin-left: 10%;
  vertical-align: middle;
}
.mu-option.is-selected .mu-item {
  color: #ddd;
}

.mu-input__focus {
  color: #ddd;
}
.col-12 {
  padding: 0;
}
.upload {
  margin-top: 20px;
}
.upload_carme_box {
  display: inline-block;
  width: 70%;
  margin: 0 auto;
  margin-left: 15%;
  margin-top: 0.2rem;
  text-align: center;
  position: relative;
}
.carme_box {
  width: 3rem;
  height: 1.9rem;
  line-height: 1.9rem;
  background-color: #fafafa;
  border-radius: 4px;
  border: solid 1px #bdc5cb;
  position: relative;
}
.lb_carme_box {
  line-height: 1.4rem;
}
.item_pic_name {
  position: absolute;
  bottom: 0.34rem;
  left: 0.64rem;
  margin: 0 auto;
  line-height: 0;
  color: #666;
  font-size: 14px;
}
.user_upload_icon {
  font-size: 1rem;
  color: #b3afaf;
}
.upload_btn {
  position: absolute;
  right: 0.8rem;
  top: 0.7rem;
  background-color: #f9585e;
  color: #fff;
  border-radius: 0.1rem;
  text-align: center;
  background-color: #fa595e;
  border-radius: 0.2rem;
  line-height: 0.42rem;
  height: 0.42rem;
  font-size: 0.24rem;
}

.du_name {
  display: inline-block;
  width: 70%;
  margin: 0 auto;
  height: 40px;
  margin-left: 15%;
  border-bottom: 1px solid #ddd;
}
/* 第二部 */
.step_two {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}
.step_two img {
  width: 2.5rem;
  height: 2.5rem;
}
.step_two p {
  text-align: left;
}
.success_title {
  font-size: 0.3rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 2px;
  color: #000000;
  margin-bottom: 20px;
}
.sh_time {
  font-size: 0.2rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 1px;
  color: #000000;
  opacity: 0.5;
  margin-bottom: 20px;
}
.lxfs {
  font-size: 0.17rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 1px;
  color: #000000;
}
.red {
  color: #fa595e;
}
.tijiao {
  width: 90%;
  margin: 0.3rem auto;
}
</style>