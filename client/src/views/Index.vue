<template>
<div class="index">
  <el-row>
    <el-col :span="24"><HeadBar /></el-col>
  </el-row>
  <el-row type="flex" justify="space-around">
    <el-col :span="15">
      <Carousel />
    </el-col>
    <el-col :span="8">
      <ShowData :showData="showdata1" />
      <ShowData :showData="showdata2" />
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
      showdata1:{
        title:"生产动态",
        sdata:[
          {
            c1:"日产天然气：",
            c2:"200.4759",
            c3:"万立方米",
          },
          {
            c1:"年产天然气：",
            c2:"69800.4759",
            c3:"万立方米",
          },
          {
            c1:"日销售天然气：",
            c2:"30.4669",
            c3:"万立方米",
          },
          {
            c1:"年销售天然气：",
            c2:"16789.4669",
            c3:"万立方米",
          }
        ]
      },
    showdata2:{
      title:"安全生产里程碑",
      sdata:[
        {
          c1:"连续安全生产：",
          c2:"4900",
          c3:"天",
        },
        {
          c1:"历史最好记录：",
          c2:"4900",
          c3:"天",
        },
        {
          c1:"无较大以上事故：",
          c2:"4900",
          c3:"天",
        },
        {
          c1:"无损工事件：",
          c2:"4900",
          c3:"天",
        }
      ]
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

