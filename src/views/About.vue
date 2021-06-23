<template>
  <div class="page">
    <swiper :slides-per-view="3"
            :space-between="50"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :options="swiperOption">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper>
    <button id="second-element-introduction">哈哈哈哈</button>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
export default {
  name: 'About',
  components: {
    Swiper,
    SwiperSlide,
  },
  data () {
    return {
      swiperOption: {
        notNextTick: true,
        //循环
        loop: true,
        //设定初始化时slide的索引
        initialSlide: 0,
        //自动播放
        // autoplay:true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        // 设置轮播
        effect: 'flip',
        //滑动速度
        speed: 800,
        //滑动方向
        direction: 'horizontal',
        //小手掌抓取滑动
        // grabCursor : true,
      }
    }
  },
  mounted () {

    this.$nextTick(() => {
      this.$driver.defineSteps([
        {
          element: '#first-element-introduction',
          popover: {
            className: 'first-step-popover-class',
            title: 'Title on Popover',
            description: 'Body of the popover',
            position: 'bottom'
          }
        },
        {
          element: '#second-element-introduction',
          popover: {
            title: 'Title on Popover',
            description: 'Body of the popover',
            position: 'bottom'
          }
        },
        {
          element: '#third-element-introduction',
          popover: {
            title: 'Title on Popover',
            description: 'Body of the popover',
            position: 'right'
          }
        },
      ]);
      this.$driver.start();
    })

  },
  created () {
  },
  activated () {

  },
  compotuted: {

  },
  methods: {
    onSwiper (swiper) {
      console.log(swiper);
    },
    onSlideChange () {
      console.log('slide change');
    },
  }
}
</script>
<style lang="sass" scoped>
</style>
