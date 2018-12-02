<template>
  <div id="app">
    <p-header v-show="$route.meta.showHeader"></p-header>
    <router-view class="body"></router-view>
    <p-footer v-show="$route.meta.showFooter" :activeItem="$route.meta.showFooterActive"></p-footer>
  </div>
</template>

<script>
import pHeader from "@/components/pHeader";
import pFooter from "@/components/pFooter";
export default {
  name: "App",
  data() {
    return {
    };
  },
  components: {
    pHeader,
    pFooter
  },
  mounted() {
  }
};
</script>

<style>
html,body {
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.body {
  flex: 1;
  overflow-y: scroll;
  /* margin-bottom: -0.72rem; */
}
</style>
