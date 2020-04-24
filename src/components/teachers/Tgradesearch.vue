<template>
	<div class="tgradesearch">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item>首页</el-breadcrumb-item>
		  <el-breadcrumb-item>成绩管理</el-breadcrumb-item>
      <el-breadcrumb-item>成绩查询</el-breadcrumb-item>
		</el-breadcrumb>

    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-input placeholder="请输入姓名或完整学号进行查询" v-model="queryinfo" class="input-with-select">
            <el-button slot="append" icon="el-icon-search" @click="searchgrades"></el-button>
          </el-input>
        </div>
      </el-col>
    </el-row>

    <el-form :inline="true" :model="targetstu" class="demo-form-inline" :disabled="isdisabled">
      <el-form-item label="姓名">
        <el-input v-model="targetstu.sname" placeholder="学生姓名"></el-input>
      </el-form-item>
      <el-form-item label="学号">
        <el-input v-model="targetstu.sid" placeholder="所属学号"></el-input>
      </el-form-item>
      <el-form-item label="年级">
        <el-input v-model="targetstu.sclass" placeholder="所在年级"></el-input>
      </el-form-item>
    </el-form>

    <el-table :data="gradelists" style="width: 800px">
      <el-table-column prop="stuyear" label="学年" width="200px"></el-table-column>
      <el-table-column prop="chinese" label="语文" width="100px"></el-table-column>
      <el-table-column prop="math" label="数学" width="100px"></el-table-column>
      <el-table-column prop="english" label="英语" width="100px"></el-table-column>
      <el-table-column prop="physics" label="物理" width="100px"></el-table-column>
      <el-table-column prop="chemistry" label="化学" width="100px"></el-table-column>
      <el-table-column prop="biology" label="生物" width="100px"></el-table-column>
    </el-table>

	</div>
</template>

<script>
	export default {
		name: 'Tgradesearch',
    data() {
      return {
        gradelists: [],
        queryinfo: '',
        isshow: false,
        isdisabled: true,
        targetstu: {
          sname: '',
          sid: '',
          sclass: ''
        }
      }
    },
    methods: {
      searchgrades() {
        this.gradelists = [];
        if(this.queryinfo !== '') {
          this.$http.get('stugradelist').then(res => {
            res.data.filter(i => {
              if (i.name.match(this.queryinfo) || i.stuid.match(this.queryinfo)) {
                // return this.gradelists.push(i.gradelist)
                // console.log(this.gradelists.push(i));
                // console.log(i.gradelist);
                this.isshow = true;
                this.targetstu.sname = i.name;
                this.targetstu.sid = i.stuid;
                this.targetstu.sclass = i.class;
                this.gradelists = i.gradelist;
              }
            })
          })
        }
      }
    }
	}
</script>

<style scoped="scoped">
  .el-row {
    margin: 30px 0 20px 0;
  }
  .el-form {
    margin: 30px 0 20px 0;
  }
</style>
