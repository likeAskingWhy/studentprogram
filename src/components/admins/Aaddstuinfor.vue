<template>
	<div class="aaddstuinfor">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item>首页</el-breadcrumb-item>
		  <el-breadcrumb-item>学籍管理</el-breadcrumb-item>
	    <el-breadcrumb-item>添加学籍</el-breadcrumb-item>
		</el-breadcrumb>
	  <div style="margin: 20px;"></div>
	  <!-- ref获取当前表单-->
	  <!-- model绑定数据-->
	  <!-- rules绑定表单验证规则-->
	  <el-form label-width="110px" ref="resetform" :model="informations" :rules="rulesform">
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
	        <el-date-picker type="date" placeholder="请选择您的出生日期" v-model="informations.birthdate" format="yyyy-MM-dd" value-format="yyyy-MM-dd" @change="dateChangebirthday1" style="width: 100%;"></el-date-picker>
	      </el-col>
	    </el-form-item>
	    <el-form-item label="入学日期" prop="enrolmentdate">
	      <el-col :span="10">
	        <el-date-picker type="date" placeholder="请选择您的入学日期" v-model="informations.enrolmentdate" format="yyyy-MM-dd" value-format="yyyy-MM-dd" @change="dateChangebirthday2" style="width: 100%;"></el-date-picker>
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
	        <el-date-picker type="date" placeholder="请选择您的入团日期" v-model="informations.leaguedate" format="yyyy-MM-dd" value-format="yyyy-MM-dd" @change="dateChangebirthday3" style="width: 100%;"></el-date-picker>
	      </el-col>
	    </el-form-item>
	    <el-form-item label="兴趣特长" prop="speciality">
	        <el-input v-model="informations.speciality" placeholder="请输入您的兴趣特长"></el-input>
	    </el-form-item>
	  </el-form>
	  <el-button type="primary" @click="submitbtn">添加</el-button>
	  <el-button type="danger" @click="resetbutton">重置</el-button>
	  <el-button @click="goback">返回</el-button>


	</div>
</template>

<script>
	export default {
		name: 'Aaddstuinfor',
    data() {
      return {
        formChange: false,
        formChangeNum: 0,
        informations: {
          name: '',
          sex: '',
          studentno: '',
          class: '',
          nation: '',
          nativeplace: '',
          idnumber: '',
          birthdate: '',
          enrolmentdate:'',
          address: '',
          juniorhighschool: '',
          politicsstatus: '',
          leaguedate: '',
          speciality: ''
        },
        // 表单验证规则
        rulesform: {
          name: [
            { required: true, message: '请输入您的姓名', trigger: 'blur' },
            { min: 2, max: 4, message: '长度在 2 到 4 个字符', trigger: 'blur' }
          ],
          sex: [
            { required: true, message: '请选择您的性别', trigger: 'blur' },
          ],
          studentno: [
            { required: true, message: '请输入您的学号', trigger: 'blur' },
            { min: 6, max: 6, message: '长度为6个字符', trigger: 'blur' }
          ],
          class: [
            { required: true, message: '请输入您的班级', trigger: 'blur' }
          ],
          nation: [
            { required: true, message: '请输入您的民族', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
          ],
          nativeplace: [
            { required: true, message: '请输入您的籍贯', trigger: 'blur' }
          ],
          idnumber: [
            { required: true, message: '请输入您的身份证号码', trigger: 'blur' },
            { min: 18, max: 18, message: '长度为18个字符', trigger: 'blur' }
          ],
          birthdate: [
            { required: true, message: '请选择您的出生日期', trigger: 'blur' }
          ],
          enrolmentdate: [
            { required: true, message: '请选择您的入学日期', trigger: 'blur' }
          ],
          address: [
            { required: true, message: '请输入您的家庭地址', trigger: 'blur' }
          ],
          juniorhighschool: [
            { required: true, message: '请输入您的初中毕业学校', trigger: 'blur' }
          ],
          politicsstatus: [
            { required: true, message: '请输入您的政治面貌', trigger: 'blur' }
          ],
          leaguedate: [
            { required: true, message: '请选择您的入团日期', trigger: 'blur' }
          ],
          speciality:[
            { required: true, message: '请输入您的兴趣特长', trigger: 'blur' }
          ]
        }
      }
    },
    /* watch用于侦听数据是否发生变化*/
    watch: {
      informations: {
        handler() {
          this.formChangeNum++;
          if(this.formChangeNum >= 2) {
            this.formChange = true;
          } else {
            this.formChange = false;
          }
        },
        deep: true
      }
    },
    methods: {
      /* 判定班级功能*/
      checkclass() {
        let newInformations = {
          name: this.informations.name,
          sex: this.informations.sex,
          studentno: this.informations.studentno,
          class: this.informations.class,
          nation: this.informations.nation,
          nativeplace: this.informations.nativeplace,
          idnumber: this.informations.idnumber,
          birthdate: this.informations.birthdate,
          enrolmentdate: this.informations.enrolmentdate,
          address: this.informations.address,
          juniorhighschool: this.informations.juniorhighschool,
          politicsstatus: this.informations.politicsstatus,
          leaguedate: this.informations.leaguedate,
          speciality: this.informations.speciality
        }
        if (this.$route.query.targetclass == '16级6班') {
          this.$http.post('classsix', newInformations).then(res => {
            this.$router.push('/admin/ainforlist');
          });
        } else if (this.$route.query.targetclass == '16级7班') {
          this.$http.post('classseven', newInformations).then(res => {
            this.$router.push('/admin/ainforlist');
          });
        } else {
          this.$http.post('stuinforlist', newInformations).then(res => {
            this.$router.push('/admin/ainforlist');
          });
        }
      },
      /* 提交功能*/
      submitbtn() {
        this.$refs.resetform.validate((valid) => {
          if (valid) {
            if (this.formChange) {
              this.$confirm('是否要提交表单完成创建？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                this.$message({
                  type: 'success',
                  message: '新的学籍已经创建完成。'
                });
                this.checkclass();
              }).catch(() => {
                this.$message({
                  type: 'info',
                  message: '已取消当前操作。'
                });
              });
            } else {
              this.$message.info('当前信息并未录入，请继续填写信息。')
            }
          } else {
            return false;
          }
        });
      },
      /* 重置表单功能*/
      resetbutton() {
        this.$confirm('是否要重置表单？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '重置完毕。'
          });
          this.$refs.resetform.resetFields()
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消当前操作。'
          });
        });
      },
      /* 返回按钮*/
      goback() {
        this.$confirm('是否要放弃添加数据并返回主页？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '已为您返回到主页面。'
          });
          this.$router.push('/admin/ainforlist');
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消当前操作，请继续编入信息。'
          });
        });
      },
      /* 格式化日期-出生日期*/
      dateChangebirthday1(val) {
        console.log(val);
        this.informations.birthdate = val;
      },
      /* 格式化日期-入学日期*/
      dateChangebirthday2(val) {
        console.log(val);
        this.informations.enrolmentdate = val;
      },
      /* 格式化日期-入团日期*/
      dateChangebirthday3(val) {
        console.log(val);
        this.informations.leaguedate = val;
      }
    }
	}
</script>

<style scoped="scoped">
  .aaddstuinfor {
    width: 600px;
  }
</style>
