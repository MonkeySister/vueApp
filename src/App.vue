<template>
  <div id="app">
    <keep-alive v-if="$route.meta.cache">
      <router-view />
    </keep-alive>
    <router-view v-else />
  </div>
</template>

<style lang="less">
</style>
