<template>
  <div class="content">
    <form>
      <div class="md-card md-theme-default">
        <div class="md-card-header" data-background-color="green">
          <h4 class="title">注册</h4>
        </div>
        <div class="md-card-content">
          <div class="md-layout">
            <div class="md-layout-item md-small-size-100 md-size-100">
              <div class="md-field md-theme-default">
                <label for="md-input-r574f72x4">私钥</label>
                <input type="text" id="md-input-r574f72x4" class="md-input" />
                <!---->
                <!---->
                <!---->
              </div>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-100">
              <md-button>生成公钥</md-button>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-100">
              <div>{{publicKey}}</div>
            </div>

            <div class="md-layout-item md-small-size-100 md-size-100">
              <div class="md-field md-theme-default">
                <label for="md-input-r574f72x4">真实姓名</label>
                <input type="text" id="md-input-r574f72x4" class="md-input" />
                <!---->
                <!---->
                <!---->
              </div>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-100">
              <div class="md-field md-theme-default">
                <label for="md-input-r574f72x4">性别</label>
                <input type="text" id="md-input-r574f72x4" class="md-input" />
                <!---->
                <!---->
                <!---->
              </div>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-100">
              <div class="md-field md-theme-default">
                <label for="md-input-r574f72x4">邮箱</label>
                <input type="text" id="md-input-r574f72x4" class="md-input" />
                <!---->
                <!---->
                <!---->
              </div>
            </div>

            <div class="md-layout-item md-size-100 text-right">
              <button
                type="button"
                class="md-button md-raised md-success md-theme-default"
                @click="sign()"
              >
                <div class="md-ripple">
                  <div class="md-button-content">注册</div>
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
