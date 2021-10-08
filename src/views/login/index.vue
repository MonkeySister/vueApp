<template>
  <div>
    登陆页
    <Button type="info"
      @click="signIn"> 登陆</Button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {}
  },
  methods: {
    ...mapMutations(['setToken']),
    signIn() {
      this.setToken('bearer7225dd8c-fe7f-4a82-aa60-20f816669145')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>