<template>
	<div class="tinforlist">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>学籍列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-input placeholder="请输入关键词进行查询" v-model="inforquery" class="input-with-select">
            <el-button slot="append" icon="el-icon-search" @click="gettargrtinfor"></el-button>
          </el-input>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-button type="primary" @click="addstuinfor">添加学籍</el-button>
        </div>
      </el-col>
    </el-row>

    <p style="color: #99A9BF; font-size: 14px;">Tips：<span style="color: red;">双击</span>表格的任一行可进入当前单元行的学籍管理页面。</p>
    <el-table @row-dblclick="toinfordetails" :data="stuinforlist.slice((currentPage - 1) * pagesize, currentPage * pagesize)" style="width: 1290px">
      <el-table-column prop="id" label="序号" width="70px"></el-table-column>
      <el-table-column prop="name" label="姓名" width="110px"></el-table-column>
      <el-table-column prop="sex" label="性别" width="90px"></el-table-column>
      <el-table-column prop="studentno" label="学号" width="130px"></el-table-column>
      <el-table-column prop="class" label="入学班级" width="150px"></el-table-column>
      <el-table-column prop="enrolmentdate" label="入学日期" width="180px"></el-table-column>
      <el-table-column prop="nativeplace" label="籍贯" width="180px"></el-table-column>
      <el-table-column prop="birthdate" label="出生日期" width="180px"></el-table-column>
      <el-table-column prop="idnumber" label="身份证号" width="200px"></el-table-column>
    </el-table>

    <!-- 设置分页效果-->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 8, 10, 20]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="stuinforlist.length">
    </el-pagination>
	</div>
</template>

<script>
	export default {
		name: 'Tinforlist',
    data() {
      return {
        stuinforlist: [],
        currentPage: 1,
        pagesize: 10,
        inforquery: ''
      }
    },
    methods: {
      addstuinfor() {
        this.$router.push('/teacher/taddstuinfor');
      },
      getstuinforlist() {
        this.$http.get('stuinforlist').then(res => {
          // console.log(res.data);
          this.stuinforlist = res.data;
        })
      },
      handleSizeChange(size) {
        this.pagesize = size;
      },
      handleCurrentChange(currentPage) {
        this.currentPage = currentPage;
      },
      toinfordetails(row, event, column) {
        this.$router.push('/teacher/tinfordetails/'+ row.id)
        // console.log(row.id);
      },
      /* 搜索功能*/
      gettargrtinfor() {
        this.stuinforlist = [];
        this.$http.get('stuinforlist').then(res => {
          res.data.filter(i => {
            if (i.name.match(this.inforquery) || i.sex.match(this.inforquery) || i.studentno.match(this.inforquery) || i.class.match(this.inforquery) || i.enrolmentdate.match(this.inforquery) || i.nativeplace.match(this.inforquery) || i.birthdate.match(this.inforquery) || i.idnumber.match(this.inforquery)) {
              return this.stuinforlist.push(i)
            }
          })
        })
      }
    },
    created() {
      this.getstuinforlist()
    }
	}
</script>

<style scoped="scoped">
  .el-row {
      margin: 30px 0 20px 0;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .el-col {
      border-radius: 4px;
    }
    .grid-content {
      border-radius: 4px;
    }
    .row-bg {
      padding: 10px 0;
    }
    .el-table {
      border-top: 1px solid #EBEEF5;
      margin-bottom: 20px;
    }
</style>
