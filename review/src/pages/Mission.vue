<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
        <div class="md-card md-card-stats md-theme-default">
          <div class="md-card-header" data-background-color="green">
            <i class="md-icon md-icon-font md-theme-default">store</i>
          </div>
          <div class="md-card-content">
            <p class="category">审核收益</p>
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
              <md-table-cell>账户名</md-table-cell>
              <md-table-cell>{{name}}</md-table-cell>
            </md-table-row>

            <md-table-row>
              <md-table-cell>审核状态</md-table-cell>
              <md-table-cell>{{state}}</md-table-cell>
            </md-table-row>

            <md-table-row>
              <md-table-cell>已审核</md-table-cell>
              <md-table-cell>{{days}}</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>是否原生审核账户</md-table-cell>
              <md-table-cell>{{ifOrigin}}</md-table-cell>
            </md-table-row>
          </md-table>
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>

<script>
import SimpleTable from "@/components";
export default {
  data() {
    return {
      qidian: 279,
      gongxian: 398,
      qidian_rank: 64,
      gongxian_rank: 58,
      name: "",
      state: "",
      days: "",
      ifOrigin: ""
    };
  }
};
</script>
