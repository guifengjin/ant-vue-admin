<template>
  <a-layout id="components-layout-demo-custom-trigger" style="height: 100%">
    <!-- 侧边栏 -->
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo" />
      <SiderMenu />
    </a-layout-sider>
    <a-layout>
      <!-- 头部 -->
      <a-layout-header style="background: #fff; padding: 0 16px 0 64px; position: relative">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
        <Header />
      </a-layout-header>
      <!-- 内容 -->
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', height: '100%' }"
      >
        <router-view></router-view>
      </a-layout-content>
      <!-- 页脚 -->
      <a-layout-footer style="background: #fff">footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import Header from "./header";
import Footer from "./footer";
import SiderMenu from "./siderMenu";

export default {
  components: {
    Header,
    Footer,
    SiderMenu
  },
  data() {
    return {
      collapsed: false
    };
  }
};
</script>

<style>
#components-layout-demo-custom-trigger .trigger {
  position: absolute;
  left: 0;
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}
#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>

