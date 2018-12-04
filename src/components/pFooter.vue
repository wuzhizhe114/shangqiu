<!-- 底部 -->
<template>
  <div class="p-footer">
    <mu-button flat color="primary" :class="selectItem === '0' ? 'index on' : 'index'" to="/index" @click="changeItem('0')">
      <i class="iconfont fs-18">&#xe637;</i>
      <span>店铺信用</span>
    </mu-button>
    <mu-button flat color="primary" :class="selectItem === '1' ? 'shanghu on' : 'shanghu'" to="/shangpin" @click="changeItem('1')">
      <i class="iconfont">&#xe62a;</i>
      <span>商品管理</span>
    </mu-button>
    <mu-button flat color="primary" :class="selectItem === '2' ? 'person on' : 'person'" to="/geren" @click="changeItem('2')">
      <i class="iconfont">&#xe62d;</i>
      <span>个人中心</span>
    </mu-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectItem: this.activeItem || '0'
    };
  },
  props: ['activeItem'],

  computed: {},

  mounted() {
    console.log(this.activeItem);
  },

  methods: {
    changeItem(param) {
      this.selectItem = param;
      // switch (param) {
      //   case '0':
      //     this.$router.push('/')
      //     break;
      //   case '1':
      //     this.$router.push('/shangpin')
      //     break;
      //   case '2':
      //     this.$router.push('/')
      //     break;
      
      //   default:
      //     break;
      // }
      
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
  background-color: rgba(255, 255, 255, 0.15);
}
</style>