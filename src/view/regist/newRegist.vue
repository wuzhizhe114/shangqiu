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
                <p class="pr-50">注册</p>
            </div>
            <div class="content_box">
                <p class="content_title">注册</p>
                <form action="">
                    <label class="usrname_box" for="">
                         <i class="iconfont user_name_icon">&#xe622;</i>
                        <!-- <img class="input_icon" src="../../assets/images/index/user_icon.png" alt=""> -->
                        <input class="user_name" v-model="form.username" autocomplete="new-password" type="text" placeholder="请输入手机号" >
                         <i class="iconfont user_name_icon" @click="resetUser">&#xe60b;</i>
                      </label>
                    <label class="usrname_box" for="">
                         <i class="iconfont user_name_icon">&#xe623;</i>
                        <!-- <img class="input_icon" src="../../assets/images/index/user_icon.png" alt=""> -->
                        <input class="password" v-model="form.password" autocomplete="new-password" type="password" placeholder="请输入验证码" >
                        <mu-button class="code_btn">获取验证码</mu-button>
                      </label>
                    <label class="usrname_box" for="">
                         <i class="iconfont user_name_icon">&#xe627;</i>
                        <!-- <img class="input_icon" src="../../assets/images/index/user_icon.png" alt=""> -->
                        <input class="password" v-model="form.password" autocomplete="new-password" type="password" placeholder="请输入密码" >
                         <i class="iconfont user_name_icon">&#xe629;</i>
                      </label>
                    <label class="Forget_password" for="">
                        <span>忘记密码</span>
                      </label>
                    <mu-button class="login_item_btn item_btn" to="/merchantEntry">注册</mu-button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                IsshowBg: true,
                form: {
                    username: '',
                    password: ''
                }
            };
        },
        components: {},
        computed: {},
        mounted() {},
        methods: {
            resetUser() {
                this.form.username = ''
            },
            // 
            Login() {
                this.IsshowBg = false;
            },
            ShowPass() {},
            clear() {
                this.$refs.form.clear();
                this.validateForm = {
                    username: '',
                    password: '',
                    isAgree: false
                };
            }
        }
    }
</script>

<style scoped>
    .swapper {
        width: 100%;
        height: 100%;
        background-image: url('../../assets/images/index/timg.png');
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
        padding: .125rem;
        border-radius: .12rem;
        background-color: none;
    }
    .login_btn {
        border: 1px solid #fa595e;
        color: #f9585e;
        margin-bottom: 20px;
        background-color: #f3f4ef2e;
    }
    .login_item_btn {
        width: 80%;
        margin-left: 10%;
        border: 1px solid #fa595e;
        color: #f9585e;
        margin-top: 20px;
        background-color: #fa595e;
        border-radius: 40px;
        color: #fff;
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
        font-size: .42rem;
    }
    .user_name,
    .password {
        display: inline-block;
        width: 80%;
        background-color: rgba(0, 0, 0, 0);
    }
    .usrname_box {
        display: inline-block;
        width: 80%;
        margin: 0 auto;
        height: 40px;
        margin-left: 10%;
        margin-top: 0.5rem;
        border-bottom: 1px solid #ddd;
        position: relative;
    }
    .code_btn {
        height: 30px;
        background-color: #fa595e;
        border-radius: 23px;
        font-size: 14px;
        display: inline-block;
        position: absolute;
        right: 0;
        top: 0px;
        color: #fff;
    }
</style>