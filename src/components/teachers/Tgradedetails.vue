<template>
	<div>
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
    <p style="color: #99A9BF; font-size: 14px;">Tips：成绩一旦录入将<span style="color: red;">无法修改</span>！请各位老师慎重，如出现错误请联系管理员。</p>
    <el-table :data="gradelists" style="width: 800px">
      <el-table-column prop="stuyear" label="学年" width="200px"></el-table-column>
      <el-table-column prop="chinese" label="语文" width="100px"></el-table-column>
      <el-table-column prop="math" label="数学" width="100px"></el-table-column>
      <el-table-column prop="english" label="英语" width="100px"></el-table-column>
      <el-table-column prop="physics" label="物理" width="100px"></el-table-column>
      <el-table-column prop="chemistry" label="化学" width="100px"></el-table-column>
      <el-table-column prop="biology" label="生物" width="100px"></el-table-column>
    </el-table>

    <el-form :inline="true">
      <el-form-item>
        <el-button type="primary" @click="submitbtn">录入</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="infor" @click="goback">返回</el-button>
      </el-form-item>
    </el-form>

	</div>
</template>

<script>
	export default {
		name: 'Tgradedetials',
    data() {
      return {
        gradelists: [],
        stuinforlist: {},
        isdisabled: true,
        targetstu: {
          sname: '',
          sid: '',
          sclass: ''
        }
      }
    },
    methods: {
      getgrades(id) {
        this.$http.get('stugradelist/' + id).then(res => {
          this.gradelists = res.data.gradelist;
          this.stuinforlist = res.data;
          this.targetstu.sname = res.data.name;
          this.targetstu.sid = res.data.stuid;
          this.targetstu.sclass = res.data.class;
        })
      },
      submitbtn(id) {
        this.$router.push('/teacher/tgradelogin/' + this.stuinforlist.id)
      },
      idetbtn(id) {
        this.$router.push('/teacher/tgradeidet/' + this.stuinforlist.id)
      },
      goback() {
        this.$router.push('/teacher/tgradeslist')
      }
    },
    created() {
      this.getgrades(this.$route.params.id)
    }
	}
</script>

<style scoped="scoped">
  .el-form {
    margin: 30px 0 20px 0;
  }
</style>
