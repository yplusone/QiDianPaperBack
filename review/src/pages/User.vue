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
    <div></div>
    <div class="md-card md-card-plain md-theme-default">
      <div class="md-card-header" data-background-color="green">
        <h4 class="title">已上传论文</h4>
      </div>
    </div>
    <div class="md-card md-theme-default">
      <div class="md-card-content">
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-100">
            <h3>基于区块链的论文审核平台</h3>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <p>飞洛区块链开放服务平台是趣链科技为企业和开发者推出的区块链在线服务平台，提供专业、全面、国际领先的区块链技术服务。 平台支持区块链框架在云、物理机的多种自动化部署模式，极大提高资源使用的灵活性并降低开发的成本。另外，平台提供一站式的区块链应用研发工具和丰富的解决方案，在简易区块链应用研发路径同时满足用户的个性化需求。 平台已成功服务超过三十家大中型金融机构与大型企业，为区块链+生态提供全流程场景搭建和技术赋能。</p>
          </div>
          <div class="md-layout-item md-size-100 text-right">
               <button type="button" class="md-button md-raised md-success md-theme-default">
              <div class="md-ripple">
                <div class="md-button-content">已审核</div>
              </div>
            </button>         
            <button type="button" class="md-button md-raised md-success md-theme-default">
              <div class="md-ripple">
                <div class="md-button-content">查看详情</div>
              </div>
            </button>
          </div>
        </div>
      </div>
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
