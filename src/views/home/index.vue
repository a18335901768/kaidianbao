<template>
  <div>
      <work-bench />
      <el-row :gutter='20'>
          <el-col :span='12'>
              <operation-staff />
          </el-col>
          <el-col :span='12'>
              <operation-staff />
          </el-col>
          <el-col :span='12'>
              <operation-staff />
          </el-col>
          <el-col :span='12'>
              <operation-staff />
          </el-col>
      </el-row>
  </div>
</template>

<script>
import OperationStaff from './components/OperationStaff.vue';
import WorkBench from './components/WorkBench.vue';
export default {
  components: { WorkBench, OperationStaff },
  name: "home",
};
</script>

<style lang='scss' scoped>
</style>