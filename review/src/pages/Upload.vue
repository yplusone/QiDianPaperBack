<template>
  <div class="content">
    <form>
      <div class="md-card md-theme-default">
        <div class="md-card-header" data-background-color="green">
          <h4 class="title">论文上传</h4>
        </div>
        <div class="md-card-content">
          <div class="md-layout">
            <div class="md-layout-item md-small-size-100 md-size-100">
              <div class="md-field md-theme-default">
                <label for="md-input-r574f72x4">论文标题</label>
                <input type="text" id="md-input-r574f72x4" class="md-input" />
                <!---->
                <!---->
                <!---->
              </div>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-40">
              <div class="md-field md-theme-default">
                <label for="md-input-io909cu87">第一作者姓名</label>
                <input type="text" id="md-input-io909cu87" class="md-input" />
                <!---->
                <!---->
                <!---->
              </div>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-40">
              <div class="md-field md-theme-default">
                <label for="md-input-e2z4gi9uh">学校</label>
                <input type="text" id="md-input-e2z4gi9uh" class="md-input" />
                <!---->
                <!---->
                <!---->
              </div>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-5">
              <md-button class="md-icon-button md-raised">
                <md-icon>add</md-icon>
              </md-button>
            </div>

            <div class="md-layout-item md-small-size-100 md-size-100">
              <div class="md-field md-theme-default md-has-value md-has-textarea" maxlength="5">
                <label for="md-textarea-cmy3xuwnq">摘要</label>
                <textarea id="md-textarea-cmy3xuwnq" class="md-textarea"></textarea>
                <!---->
                <!---->
                <!---->
              </div>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-100">
              <div class="md-field md-theme-default">
                <label for="md-input-r574f72x4">关键字</label>
                <input type="text" id="md-input-r574f72x4" class="md-input" />
                <!---->
                <!---->
                <!---->
              </div>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-100">
              <md-field>
                <label>上传论文</label>
                <md-file v-model="multiple" multiple />
              </md-field>
            </div>

            <div class="md-layout-item md-size-100 text-right">
              <button
                type="button"
                class="md-button md-raised md-success md-theme-default"
                @click="sign()"
              >
                <div class="md-ripple">
                  <div class="md-button-content">上传</div>
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
      publicKey: "742914309237578290=9086y7540923498758"
    };
  }
};
</script>
