<template>
	<div class="ainfordetails">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item>首页</el-breadcrumb-item>
		  <el-breadcrumb-item>学籍列表</el-breadcrumb-item>
      <el-breadcrumb-item>详情管理</el-breadcrumb-item>
		</el-breadcrumb>

    <div style="margin: 20px;"></div>

    <el-form label-width="110px" ref="resetform" :model="informations" :disabled="isdisabled">
      <el-row :gutter="20">
      	<el-col :span="12">
      		<div class="grid-content bg-purple">
      			<el-form-item label="姓名" prop="name">
      			    <el-input v-model="informations.name" placeholder="请输入您的姓名"></el-input>
      			</el-form-item>
      		</div>
      	</el-col>
      	<el-col :span="12">
      		<div class="grid-content bg-purple">
      			<el-form-item label="性别" prop="sex">
      			  <el-select v-model="informations.sex" placeholder="请选择您的性别">
      			    <el-option label="男" value="男"></el-option>
      			    <el-option label="女" value="女"></el-option>
      			  </el-select>
      			</el-form-item>
      		</div>
      	</el-col>
      </el-row>
      <el-row :gutter="20">
      	<el-col :span="12">
      		<div class="grid-content bg-purple">
      			<el-form-item label="学号" prop="studentno">
      			    <el-input v-model="informations.studentno" placeholder="请输入您的学号"></el-input>
      			</el-form-item>
      		</div>
      	</el-col>
      	<el-col :span="12">
      		<div class="grid-content bg-purple">
      			<el-form-item label="班级" prop="class">
      			    <el-input v-model="informations.class" placeholder="请输入您的班级"></el-input>
      			</el-form-item>
      		</div>
      	</el-col>
      </el-row>
      <el-form-item label="民族" prop="nation">
          <el-input v-model="informations.nation" placeholder="请输入您的民族"></el-input>
      </el-form-item>
      <el-form-item label="籍贯" prop="nativeplace">
          <el-input v-model="informations.nativeplace" placeholder="请输入您的籍贯: XX省XX市(县)"></el-input>
      </el-form-item>
      <el-form-item label="身份证号" prop="idnumber">
          <el-input v-model="informations.idnumber" placeholder="请输入您的身份证号码" maxlength="18" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="出生日期" prop="birthdate">
        <el-col :span="10">
          <el-date-picker type="date" placeholder="请选择您的出生日期" v-model="informations.birthdate" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="入学日期" prop="enrolmentdate">
        <el-col :span="10">
          <el-date-picker type="date" placeholder="请选择您的入学日期" v-model="informations.enrolmentdate" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="家庭地址" prop="address">
          <el-input v-model="informations.address" placeholder="请输入您的家庭地址"></el-input>
      </el-form-item>
      <el-form-item label="初中毕业学校" prop="juniorhighschool">
          <el-input v-model="informations.juniorhighschool" placeholder="请输入您的初中毕业学校"></el-input>
      </el-form-item>
      <el-form-item label="政治面貌" prop="politicsstatus">
          <el-input v-model="informations.politicsstatus" placeholder="请输入您的政治面貌"></el-input>
      </el-form-item>
      <el-form-item label="入团日期" prop="leaguedate">
        <el-col :span="10">
          <el-date-picker type="date" placeholder="请选择您的入团日期" v-model="informations.leaguedate" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="兴趣特长" prop="speciality">
          <el-input v-model="informations.speciality" placeholder="请输入您的兴趣特长"></el-input>
      </el-form-item>
    </el-form>

    <el-button type="primary" @click="goidet">编辑</el-button>
    <el-button type="danger" @click="godelete">删除</el-button>
    <el-button type="infor" @click="goback">返回</el-button>



	</div>
</template>

<script>
	export default {
		name: 'Ainfordetails',
    data() {
      return {
        informations: {},
        isdisabled: true,
        targetclass: ''
      }
    },
    methods: {
      /* 向本地数据接口发送数据请求*/
      getInformations(id) {
        if (this.targetclass == '16级6班') {
          this.$http.get('classsix/' + id).then(res => {
            this.informations = res.data
          })
        } else if (this.targetclass == '16级7班') {
          this.$http.get('classseven/' + id).then(res => {
            this.informations = res.data
          })
        } else {
          this.$http.get('stuinforlist/' + id).then(res => {
            this.informations = res.data
          })
        }
      },
      /* 编辑功能*/
      goidet() {
        this.$router.push({ path: '/admin/astuinforidet/' + this.informations.id, query: {targetclass: this.targetclass} })
      },
      /* 删除判定：判定是哪个班的学生*/
      delcheckclass() {
        if (this.targetclass == '16级6班') {
          this.$http.delete('classsix/' + this.informations.id).then(res => {
            this.$router.push('/admin/ainforlist');
          })
        } else if (this.targetclass == '16级7班') {
          this.$http.delete('classseven/' + this.informations.id).then(res => {
            this.$router.push('/admin/ainforlist');
          })
        } else {
          this.$http.delete('stuinforlist/' + this.informations.id).then(res => {
            this.$router.push('/admin/ainforlist');
          })
        }
      },
      /* 删除功能*/
      godelete() {
        this.$confirm('是否要删除这条数据？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '这条数据已经从本地数据接口删除。'
          });
          this.delcheckclass()
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消当前操作。'
          });
        });
      },
      /* 返回上一页*/
      goback() {
        this.$router.push('/admin/ainforlist')
      }
    },
    created() {
      this.targetclass = this.$route.query.targetclass
      this.getInformations(this.$route.params.id)
    }
	}
</script>

<style>
  .ainfordetails {
    width: 600px;
  }
  .el-row {
      &:last-child {
        margin-bottom: 0;
      }
    }
    .el-col {
      border-radius: 4px;
    }

</style>
