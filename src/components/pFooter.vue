<!-- 底部 -->
<template>
  <div>
    <mu-bottom-nav color="#fff">
      <mu-bottom-nav-item title="首页" class="index" icon=" "></mu-bottom-nav-item>
      <mu-bottom-nav-item title="商户" class="merchant" icon=" "></mu-bottom-nav-item>
      <mu-bottom-nav-item title="摇一摇" class="shake" icon=" "></mu-bottom-nav-item>
      <mu-bottom-nav-item title="菜篮子" class="shop-cart" icon=" "></mu-bottom-nav-item>
      <mu-bottom-nav-item title="个人" class="person" icon=" "></mu-bottom-nav-item>
    </mu-bottom-nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  computed: {},

  mounted() {},

  methods: {}
};
</script>

<style scoped>
  .mu-bottom-nav {
    background-color: transparent;
  }
  .mu-bottom-item {
    min-width: auto;
    max-width: auto;
    color: #f5f7f9;
    background-color: #f29e2e;
  }
  .mu-bottom-item.shake {
    height: 130px;
    border-radius: 50px 50px 0 0;
  }
  i.mu-icon.material-icons.mu-bottom-item-icon {
    width: 0.4rem !important;
    height: 0.4rem !important;
  }
</style>