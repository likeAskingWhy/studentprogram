<template>
	<div class="sgrade">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item>首页</el-breadcrumb-item>
		  <el-breadcrumb-item>成绩管理</el-breadcrumb-item>
		</el-breadcrumb>
    <el-row :gutter="20">
			<el-col :span="6">
				<div class="grid-content bg-purple">
					<el-select v-model="gradesitems" placeholder="请选择学年" ref="selectbox" style="width: 100%;">
						<el-option label="2016-2017上学期" value="gradeonelast">2016-2017上学期</el-option>
						<el-option label="2016-2017下学期" value="gradeonenext">2016-2017下学期</el-option>
						<el-option label="2017-2018上学期" value="gradetwolast">2017-2018上学期</el-option>
						<el-option label="2017-2018上学期" value="gradetwonext">2017-2018下学期</el-option>
						<el-option label="2018-2019上学期" value="gradethreelast">2018-2019上学期</el-option>
						<el-option label="2018-2019上学期" value="gradethreenext">2018-2019下学期</el-option>
					</el-select>
				</div>
			</el-col>
			<el-col :span="4">
				<div class="grid-content bg-purple">
					<el-button type="primary" @click="getgradelist">查询成绩</el-button>
				</div>
			</el-col>
		</el-row>

		<el-form :inline="true" :model="targetgrade" class="demo-form-inline" :disabled="isdisabled">
			<el-form-item label="姓名">
				<el-input v-model="targetgrade.uname" placeholder="学生姓名"></el-input>
			</el-form-item>
			<el-form-item label="学号">
				<el-input v-model="targetgrade.ustuid" placeholder="所属学号"></el-input>
			</el-form-item>
			<el-form-item label="年级">
				<el-input v-model="targetgrade.uclass" placeholder="所在年级"></el-input>
			</el-form-item>
		</el-form>

		<el-table :data="grades" style="width: 720px">
			<el-table-column prop="chinese" label="语文" width="120"></el-table-column>
			<el-table-column prop="math" label="数学" width="120"></el-table-column>
			<el-table-column prop="english" label="英语" width="120"></el-table-column>
			<el-table-column prop="physics" label="物理" width="120"></el-table-column>
			<el-table-column prop="chemistry" label="化学" width="120"></el-table-column>
			<el-table-column prop="biology" label="生物" width="120"></el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		name: 'Sgrade',
    data() {
      return {
        gradesitems: '请选择学年',
        grades: [],
        isdisabled: true,
        targetgrade: {
          uname: '',
          ustuid: '',
          uclass: ''
        },
        totalgrades: 0
      }
    },
    methods: {
      getgradelist() {
        this.$http.get('profile').then(res => {
          // console.log(res.data[0]);
          this.grades = res.data[0][this.gradesitems];
          this.targetgrade.uname = res.data[0].name;
          this.targetgrade.ustuid = res.data[0].stuid;
          this.targetgrade.uclass = res.data[0].class;
        })
      }
    }
	}
</script>

<style scoped="scoped">
  .el-breadcrumb {
    margin-bottom: 40px;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }

</style>
