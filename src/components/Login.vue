<template>
	<div class="login-container">
	  <div class="login-box">
	    <!-- 左耳朵 -->
	    <div class="ear-left">
	      <!-- 眉毛 -->
	      <div class="eyebrow"></div>
	      <!-- 眼睛 -->
	      <div class="eyes"></div>
	    </div>
	    <!-- 右耳朵 -->
	    <div class="ear-right">
	      <!-- 眉毛 -->
	      <div class="eyebrow"></div>
	      <!-- 眼睛 -->
	      <div class="eyes"></div>
	    </div>

	    <!-- 表单登录块 -->
	    <div class="login-form">
        <el-form ref="loginformrefs" :rules="loginformrules" :model="loginform" label-width="0px" class="login_form">
          <!-- 用户名 -->
          <el-form-item prop="username">
            <el-input prefix-icon="el-icon-user" placeholder="请输入用户名" v-model="loginform.username"></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item prop="password">
            <el-input prefix-icon="el-icon-lock" placeholder="请输入密码" type="password" v-model="loginform.password"></el-input>
          </el-form-item>

          <!-- 单选框 -->
          <el-radio v-model="chooseuser" label="student">学生</el-radio>
          <el-radio v-model="chooseuser" label="teacher">教师</el-radio>
          <el-radio v-model="chooseuser" label="admin">管理员</el-radio>

        </el-form>
	    </div>

      <el-form class="login-btns">
        <el-form-item class="btns">
          <el-button size="small" :disabled='isdisabled' @click="loginto">登录</el-button>
          <el-button size="small" @click="resetloginform">重置</el-button>
        </el-form-item>
      </el-form>
	  </div>
	</div>
</template>

<script>
	export default {
		name: 'Login',
    data() {
      return {
        chooseuser: '',
        isdisabled: true,
        loginform: {
          username:'admin',
          password: '123456'
        },
        loginformrules: {
          // 验证用户名
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 5, max: 18, message: '长度在 5 到 18个字符', trigger: 'blur' }
          ],
          // 验证密码
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      loginto() {
        if (this.chooseuser == 'student') {
          if (this.loginform.username == 'student' && this.loginform.password == '123456') {
            this.$router.push('/student');
            this.$message.success('亲爱的同学，恭喜你登录成功！');
          } else {
            this.$message.error('登录失败，请正确选择您的登录身份并检查用户名和密码是否正确！');
          }
        } else if (this.chooseuser == 'teacher') {
          if (this.loginform.username == 'teacher' && this.loginform.password == '123456') {
            this.$router.push('/teacher');
            this.$message.success('亲爱的老师，恭喜你登录成功！');
          } else {
            this.$message.error('登录失败，请正确选择您的登录身份并检查用户名和密码是否正确！');
          }
        } else {
          if (this.loginform.username == 'admin' && this.loginform.password == '123456') {
            this.$router.push('/admin');
            this.$message.success('亲爱的管理员，恭喜你登录成功！');
          } else {
            this.$message.error('登录失败，请正确选择您的登录身份并检查用户名和密码是否正确！');
          }
        }
      },
      resetloginform() {
        this.$refs.loginformrefs.resetFields()
      },
      isclicked() {
        if (this.chooseuser == '') {
          this.isdisabled = true;
        } else {
          this.isdisabled = false;
        }
      }
    },
    mounted() {
      this.isclicked();
    },
    updated() {
      this.isclicked();
    }
	}
</script>

<style>
  .login-container {
    height: 100%;
    background-color: #409EFF;
  }
  .login-box {
    width: 460px;
    height: 320px;
    position: absolute;
    left: 50%;
    top: 50%;
    background-color: #333744;
    transform: translate(-50%, -50%);
    border-radius: 50px;
  }
  .ear-left, .ear-right {
    width: 120px;
    height: 120px;
    background-color: #333744;
    border-radius: 50%;
    border: 2px solid #FFFFFF;
    box-shadow: 0 0 10px #FFFFFF;
  }
  .ear-left {
    position: absolute;
    left: 60px;
    top: -60px;
  }
  .ear-right {
    position: absolute;
    right: 60px;
    top: -60px;
  }
  .eyebrow {
    width: 80px;
    height: 5px;
    background-color: #FFFFFF;
    position: absolute;
    left: 20px;
    top: 58px;
  }
  .eyes {
    width: 5px;
    height: 5px;
    background-color: #FFFFFF;
    position: absolute;
    left: 95px;
    top: 65px;
  }
  .login-form {
    width: 380px;
    height: 180px;
    background-color: #FFFFFF;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    /* padding: 0 15px; */
  }

  .login_form {
    position: absolute;
    top: 20px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .login-btns {
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
  }
  .btns {
    display: flex;
    justify-content: flex-end;
  }

</style>
