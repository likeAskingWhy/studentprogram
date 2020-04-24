<template>
	<div class="tclassmanage">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item>首页</el-breadcrumb-item>
		  <el-breadcrumb-item>课程查询</el-breadcrumb-item>
		</el-breadcrumb>

    <p>学年：{{schoolyear}} <span style="width: 40px; display: inline-block;"></span>班级：{{uclass}}</p>
    <el-table :data="timetablelist" style="width: 950px">
      <el-table-column prop="order" label="序号" width="100px"></el-table-column>
      <el-table-column prop="duringtime" label="上课时间" width="150px"></el-table-column>
      <el-table-column prop="monday" label="星期一" width="100px"></el-table-column>
      <el-table-column prop="tuesday" label="星期二" width="100px"></el-table-column>
      <el-table-column prop="wednesday" label="星期三" width="100px"></el-table-column>
      <el-table-column prop="thursday" label="星期四" width="100px"></el-table-column>
      <el-table-column prop="friday" label="星期五" width="100px"></el-table-column>
      <el-table-column prop="saturday" label="星期六" width="100px"></el-table-column>
      <el-table-column prop="sunday" label="星期日" width="100px"></el-table-column>
    </el-table>
    <p style="color: #99A9BF; font-size: 14px;">Tips：夏季下午上课时间<span style="color: red;">清明假期之后调整为14:20</span>，冬季下午上课时间<span style="color: red;">十一假期之后调整为14:00</span>，其他调整会另行通知。</p>

	</div>
</template>

<script>
	export default {
		name: 'Tclassmanage',
    data() {
      return {
        timetablelist: [],
        schoolyear: "",
        uclass: ""
      }
    },
    methods: {
      getTimeTableList() {
        this.$http.get('timetableforsix').then(res => {
          // console.log(res.data[0].timetable);
          this.schoolyear = res.data[0].schoolyear;
          this.uclass = res.data[0].class;
          this.timetablelist = res.data[0].timetable;
        })
      }
    },
    created() {
      this.getTimeTableList();
    }
	}
</script>

<style>
  .el-breadcrumb {
    margin-bottom: 40px;
  }
  .el-table {
    border-top: 1px solid #EBEEF5;
    margin-bottom: 20px;
  }
</style>
