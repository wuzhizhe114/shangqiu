<!-- 头部 -->
<template>
  <div class="header">
    <mu-appbar style="width: 100%;" z-depth="1" color="primary">
      <mu-button icon slot="left" @click="open">
        <!-- <mu-icon value="link"></mu-icon> -->
        <img class="saoma" src="../assets/images/saoma.png" alt="">
      </mu-button>
      <mu-text-field slot="default"></mu-text-field>
      <mu-button icon slot="right">
        <mu-icon value="notifications"></mu-icon>
      </mu-button>
    </mu-appbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  mounted(){},

  methods:{
    open(){
      this.$alert('Hello world', 'Alert');
    }
  }
}

</script>

<style scoped>
  .demo-badge-content, 
  .demo-icon-badge {
    padding: 12px;
      margin-right: 16px;
  }
  .saoma {
    width: 0.4rem;
  }
</style>