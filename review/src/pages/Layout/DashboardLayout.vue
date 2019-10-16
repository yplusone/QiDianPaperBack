<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar title="起点论文审核平台">
      <sidebar-link to="/user">
        <md-icon>person</md-icon>
        <p>我的账户</p>
      </sidebar-link>
      <!-- <sidebar-link to="/mission">
        <md-icon>content_paste</md-icon>
        <p>审核任务</p>
      </sidebar-link>
      <sidebar-link to="/proposal">
        <md-icon>library_books</md-icon>
        <p>提案审阅</p>
      </sidebar-link> -->
      <sidebar-link to="/Upload">
        <md-icon>library_books</md-icon>
        <p>论文上传</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content></dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter
  }
};
</script>
