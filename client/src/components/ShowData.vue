<template>
    <div class="showdata">
        <el-row class="show-title">生产动态</el-row>
        <el-row class="show-row">
            <el-col :span="9" class="show-col">日产气量：</el-col>
            <el-col :span="9" class="show-col">{{proStatus.day_p}}</el-col>
            <el-col :span="6" class="show-col">万立方米</el-col>
        </el-row>
        <el-row>
            <el-col :span="9" class="show-col">年累产气量：</el-col>
            <el-col :span="9" class="show-col">{{proStatus.year_p}}</el-col>
            <el-col :span="6" class="show-col">万立方米</el-col>
        </el-row>
        <el-row>
            <el-col :span="9" class="show-col">日销售气量：</el-col>
            <el-col :span="9" class="show-col">{{proStatus.day_s}}</el-col>
            <el-col :span="6" class="show-col">万立方米</el-col>
        </el-row>
        <el-row>
            <el-col :span="9" class="show-col">年累销售气量：</el-col>
            <el-col :span="9" class="show-col">{{proStatus.year_s}}</el-col>
            <el-col :span="6" class="show-col">万立方米</el-col>
        </el-row>
    </div>
</template>

<script>
export default{
    name:"showdata",
    props:{
        proStatus: Object,
    }  
}

</script>

<style scoped>
.showdata{
    width:100%;
    height:300px;
    font-size:18pt;
    font-family: "微软雅黑";
    text-align: left;
}
.show-title{
    background: 
}
.show-row{
    
}
.show-col{
    height:50px;
    line-height:50px;
    border-style: solid;
    border-width: 1px;
    border-color:rgb(255, 148, 8);
    text-indent:5px;
}
</style>
