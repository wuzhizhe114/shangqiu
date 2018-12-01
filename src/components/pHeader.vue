<!-- 头部 -->
<template>
  <div class="p-header">
    <mu-appbar style="width: 100%;" z-depth="0" color="primary">
      <mu-button icon slot="left" @click="open">
        <!-- <img class="saoma" src="../assets/images/saoma.png" alt=""> -->
        <i class="iconfont">&#xe7c6;</i>
      </mu-button>
      <!-- <mu-text-field slot="default" placeholder="搜索商户或商品" v-model="search" @blur="changeSearch">
        <i class="iconfont">&#xe69d;</i>
      </mu-text-field> -->
      <div class="input-box pr">
        <input type="text" class="square" placeholder="搜索商户或者商品，共4411钟商品">
        <i class="iconfont icon-magnifier gray-color"></i>
      </div>
      <mu-button icon class="message" slot="right">
        <i class="iconfont icon-xiaoxi"></i>
      </mu-button>
    </mu-appbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search:''
    };
  },

  mounted() {},

  methods: {
    open() {
      this.$alert("Hello world", "Alert");
    },
    changeSearch(){
      console.log(this.search);
    }
  }
};
</script>

<style>
.p-header .mu-appbar-left {
  padding-left: 0;
}

.p-header .mu-appbar-title {
  line-height: 1;
  padding: 0;
}
.p-header .iconfont{
  font-size: 0.4rem;
}
.p-header .input-box .icon-magnifier {
  position: absolute;
  top: 50%;
  left: 0.1rem;
  transform: translateY(-50%);
}
.p-header .input-box .square {
  padding-left: 0.6rem;
  font-size: 0.24rem;
}
/* .mu-text-field.mu-input-content > div {
  display: none;
}
.p-header .mu-appbar-title .mu-input {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 0.48rem;
}
.p-header .mu-appbar-title .iconfont {
  position: absolute;
  top: 50%;
  left: 0.15rem;
  transform: translate(0%,-50%);
  font-size: 0.5rem;
}
.p-header .mu-input .mu-text-field-input {
  background-color: #fff;
  border-radius: 3px;
  padding-left: 0.75rem;
}
.p-header .message .material-icons {
  position: relative;
}
.p-header .message .material-icons::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-radius: 50%;
  border: 4px solid #f00;
} */
</style>