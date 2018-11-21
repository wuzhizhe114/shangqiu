<template>
  <div>
    
    <mu-container>
      <mu-flex justify-content="center">
        <mu-badge circle color="secondary" content="12" class="demo-icon-badge">
          <!-- <mu-icon value="folder"></mu-icon> -->
          <mu-icon value="delete_sweep"></mu-icon>
        </mu-badge>
        <mu-badge circle color="secondary" content="123">
          <mu-button icon>
            <mu-icon value="notifications"></mu-icon>
          </mu-button>
        </mu-badge>
        <mu-badge class="demo-badge-content" color="transparent">
          <mu-icon value="folder" color="blue"></mu-icon>
          <mu-icon value="cloud_upload" color="red" slot="content"></mu-icon>
        </mu-badge>
        <mu-badge class="demo-badge-content" color="transparent">
          Copyright
          <span style="font-size: 20px; color: red;" slot="content">&copy;</span>
        </mu-badge>
      </mu-flex>
    </mu-container>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      
    };
  },
  methods: {
    open(){
      this.$alert('Hello world', 'Alert');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
