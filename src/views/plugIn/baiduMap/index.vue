<template>
  <div class="pages">
    百度地图api使用
    <div id="map"></div>
  </div>

</template>
<script>
import BMap from 'BMap'
export default {
  data () {
    return {

    }
  },
  mounted () {
    this.initMap()
  },
  methods: {
    initMap () {
      let map = new BMap.Map("map")
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
  }
}
</script>
<style lang="less" scoped>
#map {
  width: 600px;
  height: 600px;
}
</style>