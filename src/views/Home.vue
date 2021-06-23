<template>
  <div class="page">
    <Row type='flex'
         justify="space-between">
      <span>haha</span>
      <span>hehe</span>
    </Row>

    <button v-permission="['2']"
            id="first-element-introduction"
            @click="text()"> 测试权限</button>
    <button v-permission="['2']"
            @click="$router.push('/About')"
            id="second-element-introduction"> 去另一个页面</button>

    <Loading></Loading>
    <button @click="getCode"
            :disabled="disabled">{{msg}}</button>
    <img src=""
         alt="">
    <button @click="show=true">测试</button>
    <div class="list"
         :class="{'list-show':show?true:false}">哈哈哈</div>
    <div id="map"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Loading from "@/components/Loading"
import { setInterval } from 'timers'

import BMap from 'BMap'
export default {
  name: 'Home',
  components: {
    Loading
  },
  data () {
    return {
      msg: '获取验证码',
      timer: null,
      disabled: false,
      show: false
    }
  },
  compotuted: {
    ...mapState(['token'])
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
    // this.gettoken(1)
  },
  activated () {
    // this.gettoken(2)
  },

  methods: {
    gettoken (type) {
      // this.$store.commit('setTokeen')
      // console.log(this.$store.state.token)
    },
    getCode () {
      this.disabled = true
      let num = 60
      window.clearInterval(this.timer)
      this.timer = window.setInterval(() => {
        num--
        this.msg = num + 's'
        console.log(num)
        if (num === 0) {
          this.msg = '获取验证码'
          this.disabled = false
          window.clearInterval(this.timer)
        }
      }, 1000)
    },

    initMap () {
      var map = new BMap.Map("map")
      // 初始化地图,设置中心点坐标和地图级别
      map.centerAndZoom(new BMap.Point(116.404, 39.915), 11)
      //添加地图类型控件
      map.addControl(new BMap.MapTypeControl({
        mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
      }))
      // 设置地图显示的城市 此项是必须设置的
      map.setCurrentCity("北京")
      //开启鼠标滚轮缩放
      map.enableScrollWheelZoom(true)
    },

    text () {
      this.$driver.resetPassive()
    }
  }
}
</script>
<style scoped>
.list {
  width: 100px;
  height: 0;
  border: 1px solid red;
}
.list-show {
  height: 200px;
  transition: height 5s;
  transition-timing-function: ease-in;
  transition-delay: 0.5s;
}

#map {
  width: 600px;
  height: 600px;
}
</style>
