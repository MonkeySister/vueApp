<template>
  <div class="menus">
    <ul>
      <li v-for="(list,i) in menus"
        :key=i
        @click="$router.push(list.value)"
        class="menuItem">{{list.label}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'pageMenus',
  props: {
    menus: {
      type: Array,
      default: () => {
        return []
      }
    },
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.menus {
  width: 280px;
  max-height: calc(100vh - 60px);
  overflow-y: hidden;
  padding: 1% 0 1% 30px;
  box-sizing: border-box;
  color: #eee;
  ul {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
}

.menuItem {
  width: 100%;
  padding: 5px;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
}
</style>