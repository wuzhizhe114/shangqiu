<!-- 头部 -->
<template>
  <div class="p-header">
    <mu-appbar style="width: 100%;" z-depth="1" color="primary">
      <mu-button icon slot="left" @click="open">
        <!-- <mu-icon value="link"></mu-icon> -->
        <img class="saoma" src="../assets/images/saoma.png" alt="">
      </mu-button>
      <mu-text-field slot="default" v-model="search" @blur="changeSearch"></mu-text-field>
      <mu-button icon class="message" slot="right">
        <mu-icon value="notifications"></mu-icon>
      </mu-button>
      <!-- <mu-badge slot="right" content="0" circle badge-class="" color="secondary">
        <mu-button icon>
          <mu-icon value="notifications"></mu-icon>
        </mu-button>
      </mu-badge> -->
    </mu-appbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search:'123'
    };
  },

  mounted() {},

  methods: {
    open() {
      this.$alert("Hello world", "Alert");
    },
    changeSearch(){
      console.log(this.search);
    }
  }
};
</script>

<style>
.p-header .saoma {
  width: 0.4rem;
}
.p-header .mu-appbar-title {
  line-height: 1;
  padding: 0;
}
.mu-text-field.mu-input-content > div {
  display: none;
}
/* .p-header .mu-appbar-title .mu-input__focus {
  color: #000;
} */
.p-header .mu-appbar-title .mu-input {
  padding: 0.08rem 0 0;
  margin: 0;
  width: 100%;
  height: 0.48rem;
}
.p-header .mu-input .mu-text-field-input {
  background-color: #fff;
  border-radius: 3px;
  padding-left: 0.3rem;
}
.p-header .message .material-icons {
  position: relative;
}
.p-header .message .material-icons::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-radius: 50%;
  border: 4px solid #f00;
}
</style>