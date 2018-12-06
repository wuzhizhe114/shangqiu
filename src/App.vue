<template>
  <div id="app">
    <!-- <p-header v-show="$route.meta.showHeader"></p-header> -->
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

#layTab1 .ly-tabbar {
    position: relative;
    background-color: rgba(255 ,59, 59, 1) !important;
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-bottom: 1px solid #eee;
    -webkit-box-shadow: 0 0px 6px 1px #eee;
    box-shadow: 0 0px 6px 1px #eee;
}

#layTab2 .ly-tabbar {
    background-color: rgba(19, 146, 214,1) !important;
    border-bottom: 1px solid #eee;
    -webkit-box-shadow: 0 0px 6px 1px #eee;
    box-shadow: 0 0px 6px 1px #eee;
    background-image: linear-gradient(-77deg, 
		#17d5fd 0%, 
		#0393d5 100%), 
	linear-gradient(
		#369dd9, 
		#369dd9);

}
.body .ly-tabbar a{
  color: #ededed;
}

.ly-tab-active-bar{
  background-color: #fff !important;
  color: #fff;
	opacity: 1;
}
</style>
