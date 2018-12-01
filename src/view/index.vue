<!-- 首页 -->
<template>
  <div class="index">
    首页
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },

  components: {
  },

  computed: {},

  mounted() {},

  methods: {
    changeActive (index) {
      this.active = index;
    }
  }
};
</script>

<style scoped>

</style>