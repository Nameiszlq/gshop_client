<template>
  <div class="home">
       <!--轮播图-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="http://www.lecake.com/postsystem/docroot/images/app/699CC6858DBF10AC8FE9476BB01236F0.jpg" alt=""></div>
        <div class="swiper-slide"><img src="http://www.lecake.com/postsystem/docroot/images/app/E4743E72854EFF47A2AC3840FD9DCA71.jpg" alt=""></div>
        <div class="swiper-slide"><img src="http://www.lecake.com/postsystem/docroot/images/app/34D6DFE699B873B4C8709F60B6B16998.jpg" alt=""></div>
      </div>
           <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import 'swiper/css/swiper.css'
import Swiper from 'swiper'
export default {
  components: {},
  computed:{},
  methods: {},
  mounted(){
      new Swiper('.swiper-container',{
         autoplay:true,//自动轮播
             pagination: {
               el: '.swiper-pagination',
             },
             loop: true,// 循环模式选项
      })
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped >

</style>
