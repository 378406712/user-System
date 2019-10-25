
<template>
  <div class="command">
    <Head></Head>
    <router-view></router-view>
    <!-- 导航 -->
    <el-col :span="12">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
    
      
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <router-link to="/command/select1" class="link">选项1</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link to="/command/select2" class="link">选项2</router-link>
            </el-menu-item>
          </el-menu-item-group>

          <el-menu-item index="1-3">
            <router-link to="/command/select3" class="link">选项3</router-link>
          </el-menu-item>

          <el-submenu index="1-4">
            <template slot="title">
              <router-link to="/command/select4" class="link">选项4</router-link>
            </template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-col>

  
  </div>
</template>

<script>
import Head from "./Head";
export default {
  name: "",
  components: { Head },
  data() {
        
    const generateData = _ => {
      const data = [];
      const behaviors = ["吃饭", "睡觉", "玩游戏", "敲代码", "看电视"];
      behaviors.forEach((behaviors, index) => {
        data.push({
          label: behaviors,
          key: index
        });
      });
      return data;
    };
     return {
       currentDate: new Date(),
        data: generateData(),
        value: [],
        value4: [],
        renderFunc(h, option) {
          return <span>{ option.key } - { option.label }</span>;
        }
      };
  },
   methods: {
      handleChange(value, direction, movedKeys) {
       
      }
    }

};
</script>

<style  scoped>


.contents {
  position: absolute;
  left: 15%;
}
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }
  .el-col-8 {
    width:235px;
   position: absolute;
   left:55%;
 
  
  }
  
.el-col-offset-2{
margin-left: 23%;
}

  .image {
    
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
<style>
.el-col-12 {
  position: absolute;
  top: 80px;
  left: 0;
  width: 15%;
  height: 100%;
}
.cover {
  position: relative;
  
  width:100%+20px;
  overflow: hidden;
}
.link {
  width: 240px;
  display: block;
}
 .el-card__body{
    height:301px!important;
    overflow: hidden;
  
  }
  .time{
    text-overflow: clip
  }
  .el-menu-vertical-demo{
    height:100%;
    overflow: hidden;
 
  }
</style>