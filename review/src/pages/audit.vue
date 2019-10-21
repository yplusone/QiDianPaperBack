<template>
  <div class="content">
    <form>
      <div class="md-card md-theme-default">
        <div class="md-card-header" data-background-color="green">
          <h4 class="title">审核</h4>
        </div>
        <div class="md-card-content">
          <div class="md-layout">
            <div class="md-layout-item md-small-size-100 md-size-100">
              <md-checkbox v-model="application" value="1">具有应用价值</md-checkbox>
              <md-checkbox v-model="method" value="2">研究方法合理</md-checkbox>
              <md-checkbox v-model="result">结果合理</md-checkbox>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-100">
              <md-checkbox v-model="inspire" >研究具有启发性</md-checkbox>
              <md-checkbox v-model="innovation">研究具有创新性</md-checkbox>
              <md-checkbox v-model="contribution">研究为本领域做出较大贡献</md-checkbox>
            </div>

            <div class="md-layout-item md-small-size-100 md-size-100">
              <div class="md-field md-theme-default md-has-value md-has-textarea" maxlength="5">
                <label for="md-textarea-cmy3xuwnq">评价</label>
                <textarea id="md-textarea-cmy3xuwnq" class="md-textarea"></textarea>
                <!---->
                <!---->
                <!---->
              </div>
              <div class="md-layout-item md-small-size-100 md-size-100">
                <md-checkbox v-model="agree">是否同意发布到平台</md-checkbox>
              </div>
            </div>


            <div class="md-layout-item md-size-100 text-right">
              <button
                type="button"
                class="md-button md-raised md-success md-theme-default"
                @click="sign()"
              >
                <div class="md-ripple">
                  <div class="md-button-content">提交</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import SimpleTable from "@/components";
export default {
  data() {
    return {
      application: null,
      method: null,
      result: null,
      inspire:null,
      innovation:null,
      contribution:null,
      agree:null
    };
  }
};
</script>
