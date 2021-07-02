<template>
  <div class="pages home">
    <Layout>
      <Header class="header">
        <Menu mode="horizontal"
              :theme="theme1"
              active-name="1">
          <MenuItem name="1">
          <Icon type="ios-paper" />
          内容管理
          </MenuItem>
          <MenuItem name="2">
          <Icon type="ios-people" />
          用户管理
          </MenuItem>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-stats" />
              统计分析
            </template>
            <MenuGroup title="使用">
              <MenuItem name="3-1">新增和启动</MenuItem>
              <MenuItem name="3-2">活跃分析</MenuItem>
              <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
              <MenuItem name="3-4">用户留存</MenuItem>
              <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
          </Submenu>
          <MenuItem name="4">
          <Icon type="ios-construct" />
          综合设置
          </MenuItem>
        </Menu>
        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
      </Header>
      <Content>Content</Content>
    </Layout>
  </div>

</template>
<script>
import { Layout, Menu } from 'view-design'
export default {
  name: 'Index',
  components: {
    Layout,
    Header: Layout.Header,
    Content: Layout.Content,
    Menu,
  },
  data () {
    return {

    }
  },
  created () {
  }
}
</script>
<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
<style lang="less">
.home {
  .ivu-layout {
    width: 100%;
    height: 100%;
  }
  .ivu-layout-header {
    background: #fff;
    box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>

