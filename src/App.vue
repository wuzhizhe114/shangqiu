<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      that: null
    }
  },
  mounted(){
    this.that = this;
  }
}
</script>

<style>
  html {
    font-size:13.33333333vw;
  }
  body {
    min-width: 320px;
    max-width: 750px;
  }
  @media (min-width: 560px) {
    html {
      font-size: 54px;
    }
  }
</style>
