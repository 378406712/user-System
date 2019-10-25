<template>
  <div class="single">
    <Head></Head>
    <h2>详细信息</h2>
    <div class="msg_box">
      <h3>{{message.body}}</h3>
      <!-- 使用v-bind动态绑定图片时，要引入 -->
    </div>
       <div class="box">

  <swiper :options="swiperOption" ref="mySwiper" >
    <!-- slides -->
    <swiper-slide><img src='./../assets/lunbo/img1.jpg' alt=""></swiper-slide>
    <swiper-slide><img src='./../assets/lunbo/img2.jpg' alt=""></swiper-slide>
    <swiper-slide><img src='./../assets/lunbo/img3.jpg' alt=""></swiper-slide>
    <swiper-slide><img src='./../assets/lunbo/img4.jpg' alt=""></swiper-slide>


    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>


      </div>
  </div>
</template>

<script>
  import Head from './Head'
export default {

  name: '',
  components:{Head},
  data() { 
    return {
      message:'',
      id:this.$route.params.id,
      
      swiperOption: {
   
        speed:800,
       autoplay:1000,

       pagination : '.swiper-pagination',

      prevButton:'.swiper-button-prev',
      nextButton:'.swiper-button-next',
  
       loop:true,
       
        

    }
    }
    },
    created(){
      this.$axios.get("http://jsonplaceholder.typicode.com/posts/"+this.id).then((res)=>{
        console.log(res)
        this.message=res.data
        console.log(this.id)
      })
    }
    
  }

</script>

<style  scoped>
h2 {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #e3e4e5;

  text-align: center;
}
.msg_box {
  width: 100%;
  height: 40px;
  line-height:40px;
  background-color: #e3e4e5;
  margin-bottom: 10px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.box{
  margin:0 auto;
 width: 960px;
 height: 600px;
}
</style>