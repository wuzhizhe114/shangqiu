<!-- 底部 -->
<template>
  <div class="p-footer">
    <mu-button flat color="primary" :class="selectItem === '0' ? 'index on' : 'index'" href="/" @click="changeItem('0')">
      <i class="iconfont">{{selectItem === '0' ? '&#xe601;' : '&#xe617;'}}</i>
      <span>首页</span>
    </mu-button>
    <mu-button flat color="primary" :class="selectItem === '1' ? 'shanghu on' : 'shanghu'" @click="changeItem('1')">
      <i class="iconfont">{{selectItem === '1' ? '&#xe615;' : '&#xe7e8;'}}</i>
      <span>商品</span>
    </mu-button>
    <mu-button flat color="primary" :class="selectItem === '2' ? 'person on' : 'person'" @click="changeItem('2')">
      <i class="iconfont">{{selectItem === '2' ? '&#xe62b;' : '&#xe607;'}}</i>
      <span>个人</span>
    </mu-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectItem: "0"
    };
  },

  computed: {},

  mounted() {},

  methods: {
    changeItem(param) {
      this.selectItem = param;
    }
  }
};
</script>

<style scoped>
.mu-primary-text-color {
  color: #fff;
}

.p-footer {
  display: flex;
  align-items: flex-end;
}
.p-footer .mu-flat-button {
  min-width: auto;
  height: auto;
  line-height: 1;
  flex: 1;
  background-color: #fa595e;
  border-radius: 0;
  border: none;
  padding: 0.2rem 0;
  font-size: 0.28rem;
  position: relative;
}
.p-footer .mu-flat-button .iconfont {
  margin-bottom: 0.1rem;
  font-size: 0.4rem;
}
.p-footer .mu-flat-button.on::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.1);
}
</style>