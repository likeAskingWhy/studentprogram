<template>
	<div class="tgradeidet">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item>首页</el-breadcrumb-item>
		  <el-breadcrumb-item>成绩管理</el-breadcrumb-item>
		  <el-breadcrumb-item>成绩详情</el-breadcrumb-item>
      <el-breadcrumb-item>成绩录入</el-breadcrumb-item>
		</el-breadcrumb>

    <el-form :inline="true" class="demo-form-inline" :disabled="isdisabled">
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

    <el-form label-width="80px" style="width: 600px;" :model="grades" :rules="gradesrules" ref="resetform">
      <el-form-item label="学年">
        <el-select v-model="gradesitems" placeholder="请选择学年" clearable ref="selectbox" style="width: 250px;">
        	<el-option label="2016-2017上学期" value="2016-2017上学期">2016-2017上学期</el-option>
        	<el-option label="2016-2017下学期" value="2016-2017下学期">2016-2017下学期</el-option>
        	<el-option label="2017-2018上学期" value="2017-2018上学期">2017-2018上学期</el-option>
        	<el-option label="2017-2018下学期" value="2017-2018下学期">2017-2018下学期</el-option>
        	<el-option label="2018-2019上学期" value="2018-2019上学期">2018-2019上学期</el-option>
        	<el-option label="2018-2019下学期" value="2018-2019下学期">2018-2019下学期</el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="语文" prop="chinese">
        <el-input v-model="grades.chinese" placeholder="语文成绩"></el-input>
      </el-form-item>

      <el-form-item label="数学" prop="math">
        <el-input v-model="grades.math" placeholder="数学成绩"></el-input>
      </el-form-item>

      <el-form-item label="英语" prop="english">
        <el-input v-model="grades.english" placeholder="英语成绩"></el-input>
      </el-form-item>

      <el-form-item label="物理" prop="physics">
        <el-input v-model="grades.physics" placeholder="物理成绩"></el-input>
      </el-form-item>

      <el-form-item label="化学" prop="chemistry">
        <el-input v-model="grades.chemistry" placeholder="化学成绩"></el-input>
      </el-form-item>

      <el-form-item label="生物" prop="biology">
        <el-input v-model="grades.biology" placeholder="生物成绩"></el-input>
      </el-form-item>


    </el-form>

    <el-form :inline="true">
      <el-form-item>
        <el-button type="primary" @click="submitbtn">提交</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="danger" @click="resetbtn">重置</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="infor" @click="goback">返回</el-button>
      </el-form-item>
    </el-form>

	</div>
</template>

<script>
	export default {
		name: 'Tgradelogin',
    data() {
      return {
        gradelists: [],
        // stuinforlist: {},
        gradesitems: '',  // 学期
        grades: {
          // 成绩对象
          chinese: '',
          math: '',
          english: '',
          physics: '',
          chemistry: '',
          biology: ''
        },
        isdisabled: true,
        formChange: false,
        formChangeNum: 0,
        objid: '',
        targetstu: {
          sname: '',
          sid: '',
          sclass: ''
        },
        gradesrules: {
          chinese: [
            { required: true, message: '请输入语文成绩', trigger: 'blur' },
          ],
          math: [
            { required: true, message: '请输入数学成绩', trigger: 'blur' },
          ],
          english: [
            { required: true, message: '请输入英语成绩', trigger: 'blur' },
          ],
          physics: [
            { required: true, message: '请输入物理成绩', trigger: 'blur' },
          ],
          chemistry: [
            { required: true, message: '请输入化学成绩', trigger: 'blur' },
          ],
          biology: [
            { required: true, message: '请输入生物成绩', trigger: 'blur' },
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
      // 获取基本信息
      getgrades(id) {
        this.$http.get('stugradelist/' + id).then(res => {
          this.gradelists = res.data.gradelist;
          // this.stuinforlist = res.data;
          this.targetstu.sname = res.data.name;
          this.targetstu.sid = res.data.stuid;
          this.targetstu.sclass = res.data.class;
          this.objid = id;
          console.log(this.objid);
          // console.log(this.gradelists);
        })
      },
      submitbtn() {
        this.$refs.resetform.validate((valid) => {
          if (valid) {
            // 创建新的成绩信息
            let newGrades = {
              name: this.targetstu.sname,
              stuid: this.targetstu.sid,
              class: this.targetstu.sclass,
              gradelist: [
                {
                  stuyear: this.gradesitems,
                  chinese: this.grades.chinese,
                  math: this.grades.math,
                  english: this.grades.english,
                  physics: this.grades.physics,
                  chemistry: this.grades.chemistry,
                  biology: this.grades.biology
                }
              ]
            }
            if (!this.formChange) {
              this.$confirm('是否要提交成绩？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                this.$message({
                  type: 'success',
                  message: '成绩信息已经录入完成！'
                });
                // 将最新的信息加入之前的列表
                this.gradelists.push(newGrades.gradelist[0])
                newGrades.gradelist = this.gradelists;
                // 修改成现在的信息
                this.$http.put('stugradelist/' + this.objid, newGrades).then(res => {
                  this.$router.push('/teacher/tgradedetails/' + this.objid);
                })
              }).catch(() => {
                this.$message({
                  type: 'info',
                  message: '已取消当前操作。'
                });
              });
            } else {
              this.$message.info('您当前并未修改信息，已为您停留在当前页面。')
            }
          } else {
            return false;
          }
        });
      },
      resetbtn() {
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
      goback() {
        this.$router.push('/teacher/tgradedetails/' + this.objid);
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
