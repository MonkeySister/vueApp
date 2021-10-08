<template>
  <div class="header">
    <Row class="headerCon"
      type="flex"
      align="middle"
      justify="space-between">
      <slot>
        <Avatar shape="square"
          icon="ios-person"
          size="large" />
      </slot>

      <Row class="menu"
        align="middle"
        :class="{showMenu:showMenu,hideMenu:!showMenu}">
        <Col class="menuItem"
          v-for="(list ,i) in menuList"
          :key="i"><span @click="$router.push(list.value)">{{list.label}}</span></Col>
      </Row>

      <Button type="info"
        @click="signOut">退出登陆</Button>

    </Row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          label: 'JavaScript',
          value: '/jsPages',
        },
        {
          label: 'Html',
          value: '/html'
        },
        {
          label: 'vuePages',
          value: '/vuePages'
        },
        {
          label: 'Css',
          value: '/css'
        }
      ],
      showMenu: false
    }
  },

  methods: {
    signOut() {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 60px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(1px);
  box-shadow: 0 5px 10px 0 rgba(255, 255, 255, 0.3);
  position: fixed;
}
.headerCon {
  width: 100%;
  padding: 0 4%;
  height: 100%;
  margin: 0 auto;
  position: relative;
}
.menu {
  height: 100%;
}
.menuItem {
  margin-right: 10px;
  font-size: 18px;
  padding: 10px;
}
.menuIcon {
  display: none;
}

.showMenu {
  transform: translateX(-100vw);
  transition: transform 0.25s ease-out;
}
.hideMenu {
  transform: translateX(0px);
  transition: transform 0.25s ease-in;
}
@media screen and (max-width: 1200px) {
  .headerCon {
    width: 86%;
  }
}
@media screen and (max-width: 768px) {
  .header {
    background: transparent;
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
  .headerCon {
    width: 100%;
    padding: 0 7%;
  }
  .menu {
    width: 100vw;
    height: 100vh;
    padding: 0 4%;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    right: -100vw;
    // right: 0;
    flex-direction: column;
    flex-wrap: nowrap;
    background: rgba(255, 255, 255, 0.5);
    // backdrop-filter: blur(1px);
    color: #fff;
  }
  .menuItem {
    width: 100%;
    min-height: 50px;
    text-align: left;
  }
  .menuIcon {
    display: block;
  }
}
</style>