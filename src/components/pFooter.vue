<!-- 底部 -->
<template>
  <div class="p-footer">
    <mu-button flat color="primary" :class="selectItem === '0' ? 'index on' : 'index'" @click="changeItem('0')">
      <i class="iconfont">{{selectItem === '0' ? '&#xe601;' : '&#xe617;'}}</i>
      <span>首页</span>
    </mu-button>
    <mu-button flat color="primary" :class="selectItem === '1' ? 'shanghu on' : 'shanghu'" @click="changeItem('1')">
      <i class="iconfont">{{selectItem === '1' ? '&#xe603;' : '&#xe60d;'}}</i>
      <span>商户</span>
    </mu-button>
    <mu-button flat color="primary" :class="selectItem === '2' ? 'yaoyiyao on' : 'yaoyiyao'" @click="changeItem('2')">
      <i class="iconfont">&#xe672;</i>
      <span>摇一摇</span>
    </mu-button>
    <mu-button flat color="primary" :class="selectItem === '3' ? 'cart on' : 'cart'" @click="changeItem('3')">
      <i class="iconfont">{{selectItem === '3' ? '&#xe600;' : '&#xe67b;'}}</i>
      <span>菜篮子</span>
    </mu-button>
    <mu-button flat color="primary" :class="selectItem === '4' ? 'person on' : 'person'" @click="changeItem('4')">
      <i class="iconfont">{{selectItem === '4' ? '&#xe62b;' : '&#xe607;'}}</i>
      <span>个人</span>
    </mu-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectItem: '0'
    };
  },

  computed: {},

  mounted() {},

  methods: {
    changeItem(param){
      this.selectItem = param
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
  align-items:flex-end;
}
.p-footer .mu-flat-button {
  min-width: auto;
  height: auto;
  line-height: 1;
  flex: 1;
  background-color: #f29e2e;
  border-radius: 0;
  border: none;
  padding: 0.2rem 0;
  font-size: 0.28rem;
  position: relative;
}
.p-footer .mu-flat-button.yaoyiyao {
  height: auto;
  border-radius: calc(100vw/5) calc(100vw/5) 0 0;
}
.p-footer .mu-flat-button .iconfont {
  /* width: 0.4rem;
  height: 0.4rem; */
  margin-bottom: 0.1rem;
  font-size: 0.4rem;
  /* background-size: contain;
  background-repeat: no-repeat; */
}
.p-footer .mu-flat-button.on::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(255,255,255,0.1);
}
/* .p-footer .mu-flat-button.index .icon {
  background-image: url('../assets/images/footer/home.png');
}
.p-footer .mu-flat-button.index.on .icon {
  background-image: url('../assets/images/footer/home_on.png');
}
.p-footer .mu-flat-button.shanghu .icon {
  background-image: url('../assets/images/footer/shangdian.png');
}
.p-footer .mu-flat-button.shanghu.on .icon {
  background-image: url('../assets/images/footer/shangdian_on.png');
} */
.p-footer .mu-flat-button.yaoyiyao .iconfont {
  /* width: 0.8rem;
  height: 0.8rem; */
  margin: 0.2rem;
  font-size: 0.78rem;
  /* background-image: url('../assets/images/footer/yaoyiyao.png'); */
}
.p-footer .mu-flat-button.yaoyiyao.on .iconfont {
  animation: yaohuang 0.2s 2;
}
/* .p-footer .mu-flat-button.cart .icon {
  background-image: url('../assets/images/footer/gouwuche.png');
}
.p-footer .mu-flat-button.cart.on .icon {
  background-image: url('../assets/images/footer/gouwuche_on.png');
}
.p-footer .mu-flat-button.person .icon {
  background-image: url('../assets/images/footer/person.png');
}
.p-footer .mu-flat-button.person.on .icon {
  background-image: url('../assets/images/footer/person_on.png');
} */

@keyframes yaohuang {
  25% {
    transform: rotate(-30deg)
  }
  75% {
    transform: rotate(30deg)
  }
  100% {
    transform: rotate(0)
  }
}
</style>