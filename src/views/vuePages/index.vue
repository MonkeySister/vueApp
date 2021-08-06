<template>
  <div class="pages vuePages">
    <Header>
      <span>{{title}}</span>
    </Header>
    <div class="pageContent">
      <page-menus :menus="menus"></page-menus>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Vue知识点学习",
      test: '测试',
      menus: [
        {
          label: '动画与过渡',
          value: '/transitionPage'
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.pageContent {
  width: 100%;
  display: flex;
  padding-top: 60px;
  box-sizing: border-box;
}
.content {
  width: 100%;
  min-height: calc(100vh - 60px);
  padding: 1% 2%;
  box-sizing: border-box;
  display: flex;
}
</style>