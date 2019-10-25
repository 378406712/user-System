<template>
  <div class="home">
    <Head></Head>
    
    <h1>新闻总览</h1>
    <div class="new_box" v-for="item of list" :key="item.id">
      <router-link :to="'/single/'+item.id">
        <h3 v-changeColor:weight="{font:'24px'}">{{item.id}}.{{item.title |cap }}</h3>
      </router-link>
    </div>
    <div class="mount-more" @click="add">加载更多</div>
  </div>
</template>

<script>
import Head from "./Head";
export default {
  name: "Home",
  components: { Head },
  data() {
    return {
      list: [],
      pagenum: 10
    };
  },
  created() {
    this.$axios.get("./../static/txt.json").then(res => {
        this.list = res.data.slice(0, this.pagenum);
        //   this.$store.state.storeList = res.data;
        this.$store.commit('initstoreList',res.data);
      }).catch((err) => {
       console.log(err)
      });
  },
  methods: {
    add() {
      if (this.pagenum < 25) {
        this.$axios
          .get("./../static/txt.json")
          .then(res => {
            var da = res.data.slice(this.pagenum - 5, this.pagenum);
            da.map((value, index) => {
              this.list.push(value);
            });
          })
          .catch(() => {
            this.$message({
              showClose: true,
              message: "错了哦，数据为请求成功",
              type: "error"
            });
          });

        this.pagenum += 5;
      } else {
        this.$message({
          showClose: true,
          message: "没有更多数据",
          type: "info"
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #e3e4e5;
  margin-bottom: 10px;
  text-align: center;
}
.new_box {
  width: 100%;
  margin-top: 10px;
  padding:5px 0;
  background-color: #e3e4e5;
  margin-bottom: 10px;
  text-align: center;
}
.new_box:hover {
  cursor: pointer;
  background-color: #d1d0d0;
}

.mount-more {
  height: 80px;
  line-height: 80px;
  background-color: #e3e4e5;
  text-align: center;
}
.mount-more:hover {
  cursor: pointer;
}
</style>
