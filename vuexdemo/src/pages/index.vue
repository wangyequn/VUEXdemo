<script>
export default {
  computed:{
    userInfo() {
       return this.$store.state.user.userInfo
    }
  },
  methods: {
    register() {
      this.$store.commit("SET_USER",this.userInfo);
    }
  }
};
</script>
<template>
  <div>
    <div>首页</div>
    <div>
      <input v-model="userInfo.username" placeholder="请输入用户名">
      <input v-model="userInfo.password" placeholder="请输入密码">
      <button @click="register">注册</button>
    </div>
  </div>
</template>

