<template>
  <div class="content">
    <div class="md-card md-card-plain md-theme-default">
      <div class="md-card-header" data-background-color="green">
        <h4 class="title">待审核任务</h4>
      </div>
    </div>
    <!-- <div class="md-card md-theme-default">
      <div class="md-card-content">
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-100">
            <h3>区块链技术在金融中的应用探讨</h3>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <p>区块链技术凭借其不可篡改、可追溯等特性给传统金融行业带来了新的启发。金融领域也被认为是区块链技术最具应用场景的领域。本文分析了传统金融领域，支付清结算、供应链金融、保险及征信的痛点，以及如何利用区块链技术解决。</p>
          </div>
          <div class="md-layout-item md-size-100 text-right">
               <button type="button" class="md-button md-raised md-success md-theme-default">
              <div class="md-ripple">
                <div class="md-button-content">下载</div>
              </div>
            </button>         
            <button type="button" class="md-button md-raised md-success md-theme-default"  @click="audit()">
              <div class="md-ripple">
                <div class="md-button-content">审核</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div> -->
        <div class="md-card md-card-plain md-theme-default">
      <div class="md-card-header" data-background-color="green">
        <h4 class="title">已审核任务</h4>
      </div>
    </div>
    <!-- <div class="md-card md-theme-default">
      <div class="md-card-content">
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-100">
            <h3>基于区块链的论文审核平台</h3>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <p>起点论文网是基于区块链的、专精于计算机领域的论文网站，包括了完整的论文上传、审核、阅读体系。本系统包括三个子系统，分别是面向阅读者的论文检索平台、面向论文作者的管理上传平台以及面向审核者的审核平台。</p>
          </div>
          <div class="md-layout-item md-size-100 text-right">
               <button type="button" class="md-button md-raised md-success md-theme-default">
            </button>         
            <button type="button" class="md-button md-raised md-success md-theme-default">
              <div class="md-ripple">
                <div class="md-button-content">查看详情</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import SimpleTable from "@/components";
export default {
  data() {
    return {

    };
  },
  methods:{
    audit(){
      this.$router.push({
        name: "审核"
      });
    }
  }
};
</script>
