<template>
  <div class="pages home">
    <Header></Header>
    <Button type="info"
      @click="getUserInfo()"
      style="margin-top:100px">获取用户信息</Button>
  </div>

</template>
<script>
import { userInfo } from '@/api/user.js'
export default {
  name: 'Index',
  components: {

  },
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
    getUserInfo() {
      userInfo({ brandId: 1 }).then(res => {
        console.log(res);
      })
    }
  }
}
</script>
<style lang="less" scoped>
.home {
  height: 100%;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

