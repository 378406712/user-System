<template>
  <header>
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/list">列表</router-link>
      <router-link to="/shop">购物</router-link>
      <router-link to="/command">管理</router-link>
      <span class="welcome">
        欢迎
        <em class="user">[{{user}}]</em>登录，
        <i class="exit" @click="exit">退出</i>
      </span>
    </nav>
  </header>
</template>

<script>
export default {
  name: '',
  data() { 
 
    return {
        user:''
    }
  },
  methods:{ 

      exit(){
          sessionStorage.removeItem("datas")
          localStorage.removeItem("token")
         window.location='http://localhost:8080/login'
      }

  },
  created(){
   let datas = JSON.parse(sessionStorage.getItem('datas'))
   this.user = datas.user
  }
 }
</script>

<style  scoped>
header {
  position: relative;
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-align: center;
  background: rgb(152, 152, 228);
  overflow: hidden;
}
header nav {
  height: 60px;
  line-height: 60px;
  margin-top: 10px;
  position: relative;
}
nav a {
  display: inline-block;
  border-radius: 20px;
  padding: 0 40px;
  background-color: #409eff;
  border-color: #409eff;

  color: #fff;
}
.router-link-exact-active {
  background: rgba(0, 0, 0, 0.6);
}
.welcome {
  position: absolute;
  right: 10rem;
  font-size: 21px;
}
.user {
  font-weight: 600;
  color: blue;
  margin: 0 1rem 0 1rem;
}
.exit:hover {
  cursor: pointer;
  color: blue;
}
</style>
<style>
i {
  font-style: normal;
}
</style>