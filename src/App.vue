<template>
  <div id="app">
      <Head/>
<!-- 保持状态，vue会自行缓存当前状态 -->
  <keep-alive >
        <router-view v-if="$route.meta.keepAlive" />
  </keep-alive>

    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<script>

export default {

  name: 'App',

}
</script>

<style>
/* 将标签默认的间距设为0   */
*{
    margin:0;padding:0;
}



/* 去掉默认的项目图标 */
ul{
    list-style:none;
}


em{
    font-style:normal;
}

a{
    text-decoration:none;
  
}
a:hover{
    text-decoration:underline;
}


/* 去掉IE下，图片做链接时候产生的边框 */
img{
    border:none;
}


/* 清除margin-top塌陷和清除浮动 */
.clearfix:before,.clearfix:after{
    content: "";
    display:table;
}

.clearfix:after{
    clear:both;
}

.clearfix{
    zoom:1;
}


.fl{
    float:left;
}

.fr{
    float:right;
}
.cell{
    text-align: center
}
</style>
