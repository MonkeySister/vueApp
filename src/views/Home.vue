<template>
  <div class="home">
    <!-- {{$store.getters.token}} -->
    <button v-permission="['2']"> 测试权限</button>
    <Loading></Loading>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Loading from "@/components/Loading"

export default {
  name: 'Home',
  components: {
    Loading
  },
  created () {
    this.gettoken()
  },
  compotuted: {
    ...mapState(['token'])
  },
  methods: {
    gettoken () {
      // this.$store.commit('setTokeen')
      // console.log(this.$store.state.token)
    }
  }
}
</script>
