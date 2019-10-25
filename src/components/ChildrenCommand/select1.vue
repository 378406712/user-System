<template>
  <div class="select1">
    <!-- 待办事项 -->
    <div class="contents">
      <div style="text-align: center">
        <el-transfer
          style="text-align: left; display: inline-block"
          v-model="value"
          filterable
          :titles="['未完成', '已完成']"
          :button-texts="['到左边', '到右边']"
          :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }"
          @change="handleChange"
          :data="data"
        ></el-transfer>
      </div>
    </div>
    <!-- 图片 -->
    <el-row>
      <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- 消息面板 -->
    <div class="panel">
     <el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item title="一致性 Consistency" name="1">
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
  </el-collapse-item>
  <el-collapse-item title="反馈 Feedback" name="2">
    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
  </el-collapse-item>
  <el-collapse-item title="效率 Efficiency" name="3">
    <div>简化流程：设计简洁直观的操作流程；</div>
    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
  </el-collapse-item>
  <el-collapse-item title="可控 Controllability" name="4">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
  </el-collapse-item>
</el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: "select1",
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
       activeNames: ['1'],
      currentDate: new Date(),
      data: generateData(),
      value: [],
      value4: [],
      renderFunc(h, option) {
        return (
          <span>
            {option.key} - {option.label}
          </span>
        );
      }
    };
  },
  methods: {
   
     handleChange(val) {
       console.log(val)
        localStorage.setItem("plan",val)
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
  width: 235px;
  position: absolute;
  left: 55%;
}

.el-col-offset-2 {
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
  clear: both;
}
</style>
<style>
.cover {
  position: relative;
}
.link {
  width: 240px;
  display: block;
}
.el-card__body {
  height: 301px !important;
  overflow: hidden;
}
.time {
  text-overflow: clip;
}
.panel {
  position: absolute;
  width:85%;
  left: 0;
  top: 400px;
  text-align: center;
  margin-left: 15%;
  margin-top: 100px;
}
.el-collapse-item__header {
font-size: 21px;
}


</style>