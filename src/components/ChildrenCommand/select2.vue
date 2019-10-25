<template>
  <div class="select1 cover">

    
    <!-- 名片 -->
    <div class="cards">
      <b-card
        no-body
        style="max-width: 20rem;"
        img-src="https://placekitten.com/380/200"
        img-alt="Image"
        img-top
      >
        <template v-slot:header>
          <h4 class="mb-0">Hello World</h4>
        </template>

        <b-card-body>
          <b-card-title>Card Title</b-card-title>
          <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </b-card-text>
        </b-card-body>

        <b-list-group flush>
          <b-list-group-item>Cras justo odio</b-list-group-item>
          <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
          <b-list-group-item>Vestibulum at eros</b-list-group-item>
        </b-list-group>
      </b-card>
    </div>
    <!-- 日历 -->
    <el-calendar>
      <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
      <template slot="dateCell" slot-scope="{date, data}">
        <p
          :class="data.isSelected ? 'is-selected' : ''"
        >{{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}</p>
      </template>
    </el-calendar>
    </div>
 
</template>

<script>
export default {
  name: 'select1',
  data() { 
    return {

    }
  }
 }
</script>

<style  scoped>
.cover1{
  position: relative;
}
.cards{
 
  margin-left: 15%;
}
  .is-selected {
    color: #1989FA;
  }
  .el-calendar{
    width: 60%;
    position: absolute;
    right:0;
    top:80px;
  }
</style>