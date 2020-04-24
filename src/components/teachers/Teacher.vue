<template>
    <el-container>
      <!-- 标题 -->
      <el-header>
        <div>
          <span>学籍管理系统 - 教师端</span>
        </div>
        <el-button type="info" @click="exit">退出</el-button>
      </el-header>
      <el-container>
        <!-- 侧边栏 -->
        <el-aside :width="iscollapse? '64px' : '200px'">
          <!-- 折叠按钮 -->
          <div class="toggle-button" @click="togglecollapes">|||</div>
          <!-- 侧边栏菜单 -->
          <el-menu background-color="#333744" text-color="#fff" active-text-color="#ffd04b" :collapse="iscollapse" :collapse-transition="false" :router="true">
            <el-menu-item index="1" :index="tinforlistpath">
              <i class="el-icon-s-home"></i>
              <span slot="title">学籍管理</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-user-solid"></i>
                <span slot="title">成绩管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1" :index="this.tgradeslistpath">
                  <i class="el-icon-document"></i>
                  成绩录入
                </el-menu-item>
                <el-menu-item index="1-2" :index="this.tgradesearchpath">
                  <i class="el-icon-search"></i>
                  成绩查询
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="3" :index="tclassmanagepath">
              <i class="el-icon-date"></i>
              <span slot="title">课程管理</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <!-- 主页 -->
        <el-main>
          <!-- 路由占位符 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
	export default {
		name: 'Teacher',
    data() {
      return {
        iscollapse: false,
        tinforlistpath: '/teacher/tinforlist',
        tgradeslistpath: '/teacher/tgradeslist',
        tgradesearchpath: '/teacher/tgradesearch',
        tclassmanagepath: '/teacher/tclassmanage'
      }
    },
    methods: {
      exit() {
        this.$confirm('是否要退出登录？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '您已经退出登录！'
          });
          this.$router.push('/login')
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消当前操作。'
          });
        });
      },
      togglecollapes() {
        this.iscollapse = !this.iscollapse;
      },

    }
	}
</script>

<style scoped="scoped">
  .el-container {
    height: 100%;
  }
  .el-header {
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-size: 22px;
  }
  .el-aside {
    background-color: #333744;
  }
  .el-main {
    background-color: #FFFFFF;
  }
  .toggle-button {
    background-color: #4a5064;
    color: #FFFFFF;
    font-size: 10px;
    line-height: 24px;
    letter-spacing: 0.2em;
    text-align: center;
    cursor: pointer;
  }
  .el-menu {
    border: none;
  }

</style>
