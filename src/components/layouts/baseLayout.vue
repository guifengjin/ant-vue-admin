<template>
  <div>
    <Header />
    <SiderMenu />
    <router-view></router-view>
    <Footer />
  </div>
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
  }
};
</script>

