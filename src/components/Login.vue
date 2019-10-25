<template>
  <div class="login">
    <div class="login_inner">
      <el-radio-group v-model="labelPosition" size="small"></el-radio-group>
      <div style="margin: 20px;"></div>
      <el-form :label-position="labelPosition" label-width="80px">
        <h1>用户登录</h1>

        <el-form-item label="用户名">
          <el-input v-model="user"></el-input>
          <i class="el-icon-user-solid"></i>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="pass" type="password"></el-input>
          <i class="el-icon-s-opportunity"></i>
        </el-form-item>
      </el-form>
      <el-row>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button type="success">注册</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      labelPosition: "right",
      user: "",
      pass: ""
    };
  },
  methods: {
    login() {
      this.$axios
        .post("/api", {
          user: this.user,
          password: this.pass
        })
        .then(res => {
          if (res.data == 1) {
            this.$message({
              message: "登录成功",
              type: "success"
            });
            localStorage.setItem('token',res.data)//存入token,进行登录判断
            
            // console.log()
              this.$store.commit("initstoreLogin",{
                user: this.user,
          
              })
            
            this.$router.push("/");
            
          } else {
            this.$message({
              showClose: true,
              message: "用户名或密码错误",
              type: "error"
            });
          }
        });
    }
  }
};
</script>

<style  scoped>
h1 {
  text-align: center;
  margin-bottom: 40px;
}
.login_inner {
  position: absolute;
  width: 600px;
  height: 400px;
  border: 1px solid #aeaeaf;
  border-radius: 10px;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.el-input {
  width: 460px !important;
}

.el-row {
  text-align: center;
  margin-top: 40px;
}
.el-button--primary,
.el-button--success {
  width: 100px;
  height: 50px;
}
</style>