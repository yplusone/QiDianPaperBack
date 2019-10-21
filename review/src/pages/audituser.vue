<template>

  <div class="content">
    <div>
      <div class="md-layout">
        <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
          <div class="md-card md-card-stats md-theme-default">
            <div class="md-card-header" data-background-color="green">
              <i class="md-icon md-icon-font md-theme-default">store</i>
            </div>
            <div class="md-card-content">
              <p class="category">账户余额</p>
              <h3 class="title">
                {{qidian}}
                <small>起点积分</small>
              </h3>
            </div>
          </div>
        </div>
        <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
          <div class="md-card md-card-stats md-theme-default">
            <div class="md-card-header" data-background-color="orange">
              <i class="md-icon md-icon-font md-theme-default">emoji_events</i>
            </div>
            <div class="md-card-content">
              <p class="category">贡献度</p>
              <h3 class="title">
                {{gongxian}}
                <small>贡献积分</small>
              </h3>
            </div>
          </div>
        </div>
        <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
          <div class="md-card md-card-stats md-theme-default">
            <div class="md-card-header" data-background-color="red">
              <i class="md-icon md-icon-font md-theme-default">bar_chart</i>
            </div>
            <div class="md-card-content">
              <p class="category">起点积分排行</p>
              <h3 class="title">{{qidian_rank}}</h3>
            </div>
          </div>
        </div>
        <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
          <div class="md-card md-card-stats md-theme-default">
            <div class="md-card-header" data-background-color="blue">
              <i class="md-icon md-icon-font md-theme-default">show_chart</i>
            </div>
            <div class="md-card-content">
              <p class="category">贡献积分排行</p>
              <h3 class="title">{{gongxian_rank}}</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">账户信息</h4>
          </md-card-header>
          <md-card-content>
            <md-table>
              <md-table-row>
                <md-table-cell>公钥</md-table-cell>
                <md-table-cell>0xea0ac06280795cd6663613743db4ccc3f87c7c79
</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>姓名</md-table-cell>
                <md-table-cell>徐丰河</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>性别</md-table-cell>
                <md-table-cell>男</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>邮箱</md-table-cell>
                <md-table-cell>fenghexu@zju.edu.cn</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>是否为原生审核账户</md-table-cell>
                <md-table-cell>是</md-table-cell>
              </md-table-row>
                            <md-table-row>
                <md-table-cell>审核状态</md-table-cell>
                <md-table-cell>可审核</md-table-cell>
              </md-table-row>
            </md-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
    <div></div>
  </div>

</template>

<script>
import SimpleTable from "@/components";
export default {
  data() {
    return {
      loading:true,
      qidian: 1000,
      gongxian: 100,
      qidian_rank: 1,
      gongxian_rank: 1,

    };
  },
  computed:{
    function() {
      this.initialize();
    }
  },
  methods:{
    async initialize(){
        await setTimeout(() => {
          this.loading = false;
        }, 2000);
    }
  }
};
</script>
