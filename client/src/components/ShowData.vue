<template>
    <div class="showdata">
        <el-row class="show-title">{{showData.title}}</el-row>
        <el-row class="show-row" v-for="data in showData.sdata" :key="data.index">
            <el-col :span="9" class="show-col">{{data.c1}}</el-col>
            <el-col :span="9" class="show-col">{{data.c2}}</el-col>
            <el-col :span="6" class="show-col">{{data.c3}}</el-col>
        </el-row>
    </div>
</template>

<script>
export default{
    name:"showdata",
    props:{
        showData: Object,
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
    background: rgb(192,0,0);
    text-align: center;
    line-height: 50px;
    height:50px;
    color:white;
    letter-spacing:8px;


}
.show-row{
    
}
.show-col{
    height:50px;
    line-height:50px;
    border-style: solid;
    border-width: 1px;
    border-color:rgb(184, 186, 191);
    text-indent:20px;
}
</style>
