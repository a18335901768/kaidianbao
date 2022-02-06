<template>
  <div class="work-bench">
    <el-row :gutter="50">
      <el-col :span="12">
        <h1 class="title">河南贝诚教育</h1>
      </el-col>
    </el-row>
    <el-row :gutter="50">
      <el-col :span="12">
        <h2 class="small-title">快捷验劵</h2>
        <el-input placeholder="请输入内容">
          <el-button slot="append" type='primary'>验证</el-button>
        </el-input>
      </el-col>
      <el-col :span="12">
        <h2 class="small-title">常用功能</h2>
        <div class="server-group">
          <router-link to="/home">
            <img src="" alt="" />
            <span>我的推广</span>
          </router-link>
          <router-link to="/home">
            <img src="" alt="" />
            <span>评价管理</span>
          </router-link>
          <router-link to="/home">
            <img src="" alt="" />
            <span>财务账单</span>
          </router-link>
          <router-link to="/home">
            <img src="" alt="" />
            <span>团单管理</span>
          </router-link>
          <router-link to="/home">
            <img src="" alt="" />
            <span>消费数据</span>
          </router-link>
          <router-link to="/home">
            <img src="" alt="" />
            <span>店铺装修</span>
          </router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "work-bench",
};
</script>

<style lang='scss' scoped>
.work-bench {
  background-image: url("https://awp-assets.meituan.net/dianpingbmw/merchant-workbench/img/head-bg.a0c46567.png");
  background-size: cover;
  padding: 25px;
  padding-bottom: 50px;
  .title {
    font-size: 24px;
    color: #fff;
    padding: 15px 0 25px;
    line-height: 44px;
  }
  .small-title {
    font-size: 14px;
    color: #fff;
    margin: 20px 0;
  }
  .server-group {
      @include flex(row);
      a {
          @include wh(69px,69px);
          @include flex(column, center, center);
          margin-right: 10px;
          img {
              @include wh(28px,28px);
              margin-bottom: 10px;
          }
          font-size: 12px;
          color: #fff;
          text-decoration: none;
      }
  }
  ::v-deep .el-input__inner {
      height: 60px;
      line-height: 60px;
  }
}
</style>