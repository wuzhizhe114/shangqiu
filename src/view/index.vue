<!-- 首页 -->
<template>
  <div>
    <p-header></p-header>
    <router-view></router-view>
    <p-footer class="p-footer"></p-footer>
  </div>
</template>

<script>
import pHeader from "@/components/pHeader";
import pFooter from "@/components/pFooter";
export default {
  data () {
    return {
    };
  },

  components: {
    pHeader,
    pFooter
  },

  computed: {},

  mounted(){

  },

  methods: {
    
  }
}
</script>

<style scoped>
.p-footer {
  position: fixed;
  width: 100%;
  max-width: 750px;
  bottom: 0;
  left: 0;
}
</style>