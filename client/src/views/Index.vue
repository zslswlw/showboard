<template>
<div class="index">
  <el-row>
    <el-col :span="24"><HeadBar /></el-col>
  </el-row>
  <el-row>
    <el-col :span="16"><Carousel /></el-col>
    <el-col :span="8">
      <ShowData :proStatus="proStatus" />
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="16"><Table /></el-col>
    <el-col :span="8">
      <Table />
    </el-col>
  </el-row>
</div>
</template>

<script>
import HeadBar from "../components/HeadBar";
import Carousel from "../components/Carousel";
import Table from "../components/Table";
import ShowData from "../components/ShowData";

export default {
  name: "index",
  components: {
    HeadBar,
    Carousel,
    Table,
    ShowData
  },
  data(){
    return{
      proStatus:{
        day_p:"200.434",
        year_p:"60000.34234",
        day_s:"30.5546",
        year_s:"10000.645"
      }
    }
  }
};
</script>
<style scoped>
.index {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.rightContainer {
  position: relative;
  top: 0;
  left: 180px;
  width: calc(100% - 180px);
  height: calc(100% - 71px);
  overflow: auto;
}
</style>

