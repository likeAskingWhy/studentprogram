<template>
	<div class="agradesearch">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item>首页</el-breadcrumb-item>
		  <el-breadcrumb-item>成绩管理</el-breadcrumb-item>
      <el-breadcrumb-item>成绩详情</el-breadcrumb-item>
		</el-breadcrumb>



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

    <el-button style="margin: 20px 0;" type="infor" @click="goback">返回</el-button>

	</div>
</template>

<script>
	export default {
		name: 'Tgradesearch',
    data() {
      return {
        gradelists: [],
        isdisabled: true,
        targetstu: {
          sname: '',
          sid: '',
          sclass: ''
        }
      }
    },
    methods: {
      /* 获取指定班级学生的信息列表 */
      getstuinfor(id) {
        if (this.$route.query.targetclass == '16级6班') {
          this.$http.get('sixgradelist').then(res => {
            this.targetstu.sname = res.data[id - 1].name;
            this.targetstu.sid = res.data[id - 1].stuid;
            this.targetstu.sclass = res.data[id - 1].class;
            this.gradelists = res.data[id - 1].gradelist;
          })
        } else if (this.$route.query.targetclass == '16级7班') {
          this.$http.get('sevengradelist').then(res => {
            this.targetstu.sname = res.data[id - 1].name;
            this.targetstu.sid = res.data[id - 1].stuid;
            this.targetstu.sclass = res.data[id - 1].class;
            this.gradelists = res.data[id - 1].gradelist;
          })
        } else {
          this.$http.get('stugradelist').then(res => {
            this.targetstu.sname = res.data[id - 1].name;
            this.targetstu.sid = res.data[id - 1].stuid;
            this.targetstu.sclass = res.data[id - 1].class;
            this.gradelists = res.data[id - 1].gradelist;
          })
        }
      },
      goback() {
        this.$router.push('/admin/agradeslist')
      }
    },
    created() {
      this.getstuinfor(this.$route.params.id)
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
