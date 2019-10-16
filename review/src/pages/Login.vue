<template>
  <div class="content">
    <form>
      <div class="md-card md-theme-default">
        <div class="md-card-header" data-background-color="green">
          <h4 class="title">登陆</h4>
        </div>
        <div class="md-card-content">
          <div class="md-layout">
            <div class="md-layout-item md-small-size-100 md-size-100">
              <div class="md-field md-theme-default">
                <label for="md-input-r574f72x4">Address</label>
                <input type="text" id="md-input-r574f72x4" class="md-input" />
                <!---->
                <!---->
                <!---->
              </div>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-100">
              <div class="md-field md-theme-default">
                <label for="md-input-r574f72x4">Password</label>
                <input type="text" id="md-input-r574f72x4" class="md-input" />
                <!---->
                <!---->
                <!---->
              </div>
            </div>
            <div class="md-layout-item md-size-100 text-right">
              <button type="button" class="md-button md-raised md-success md-theme-default">
                <div class="md-ripple">
                  <div class="md-button-content" @click="sign()">注册</div>
                </div>
              </button>
              <button type="button" class="md-button md-raised md-success md-theme-default">
                <div class="md-ripple">
                  <div class="md-button-content">登陆</div>
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
      qidian: 279,
      gongxian: 398,
      qidian_rank: 64,
      gongxian_rank: 58,
      name: "",
      state: "",
      days: "",
      ifOrigin: ""
    };
  },
  methods: {
    sign(){
      this.$router.push({
        name: "注册"
      });
    }
  }
};
</script>
