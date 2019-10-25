<template>
  <div class="list">
    <Head></Head>
    <el-table :data="tablePageData" style="width: 100%">
      <el-table-column prop="title" label="标题" ></el-table-column>
      <el-table-column prop="body" label="内容" ></el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
    
      :total="total"
      :current-page="0"
      @current-change="Change"
    ></el-pagination>
  </div>
</template>

<script>
import Head from "./Head";
export default {
  name: "",
  components: { Head },
  data() {
    return {
      currentPage:1,
      pagesize:5,
      tableData:[],
      total:null,
    };
  },

    methods:{
      Change(val){
          console.log(val)
          this.currentPage = val
          
      }
    },
  
    computed:{
      tablePageData(){
          return this.tableData.slice((this.currentPage-1)*this.pagesize,this.currentPage*this.pagesize)
      }
    }

  ,

  created() {
    //  console.log(this.$store.state.storeList)
//     this.$axios.get("./../static/txt.json").then(res => {
//   this.tableData = res.data
//     this.total = res.data.length
//     });
//   }
// 
  
   this.tableData = JSON.parse( localStorage.getItem('list'))
   this.total =JSON.parse( localStorage.getItem('list')).length
  }
};
</script>

<style  scoped>
.el-pagination{
  margin-top: 50px;
  text-align: center
}

.el-table--fit{
  height:400px;
}
.cell{
  height: 46px;
  line-height: 46px
}


</style>