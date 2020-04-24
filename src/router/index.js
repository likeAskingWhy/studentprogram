import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Student from '../components/students/Student'
import Sinformation from '../components/students/Sinformation'
import Sgrade from '../components/students/Sgrade'
import Sinforidet from '../components/students/Sinforidet'
import Sclassmanage from '../components/students/Sclassmanage'

import Teacher from '../components/teachers/Teacher'
import Tinforlist from '../components/teachers/Tinforlist'
import Tgradeslist from '../components/teachers/Tgradeslist'
import Tinfordetails from '../components/teachers/Tinfordetails'
import Tstuinforidet from '../components/teachers/Tstuinforidet'
import Taddstuinfor from '../components/teachers/Taddstuinfor'
import Tgradesearch from '../components/teachers/Tgradesearch'
import Tgradedetails from '../components/teachers/Tgradedetails'
import Tgradelogin from '../components/teachers/Tgradelogin'
import Tclassmanage from '../components/teachers/Tclassmanage'

import Admin from '../components/admins/Admin'
import Ainforlist from '../components/admins/Ainforlist'
import Ainfordetails from '../components/admins/Ainfordetails'
import Aaddstuinfor from '../components/admins/Aaddstuinfor'
import Astuinforidet from '../components/admins/Astuinforidet'
import Agradeslist from '../components/admins/Agradeslist'
import Agradesearch from '../components/admins/Agradesearch'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/student',
      component: Student,
      children: [
        { path: '/', redirect: '/student/sinformation' },
        { path: 'sinformation', component: Sinformation },
        { path: 'sgrade', component: Sgrade },
        { path: 'sinforidet/:id', component: Sinforidet },
        { path: 'sclassmanage', component: Sclassmanage}
      ]
    },
    {
      path: '/teacher',
      component: Teacher,
      children: [
        { path: '/', redirect: '/teacher/tinforlist' },
        { path: 'tinforlist', component: Tinforlist },
        { path: 'tgradeslist', component: Tgradeslist },
        { path: 'Tinfordetails/:id', component: Tinfordetails},
        { path: 'tstuinforidet/:id', component: Tstuinforidet},
        { path: 'taddstuinfor', component: Taddstuinfor},
        { path: 'tgradesearch', component: Tgradesearch},
        { path: 'tgradedetails/:id', component: Tgradedetails},
        { path: 'tgradelogin/:id', component: Tgradelogin },
        { path: 'tclassmanage', component: Tclassmanage }
      ]
    },
    {
      path: '/admin',
      component: Admin,
      children: [
        { path: '/', redirect: '/admin/ainforlist' },
        { path: 'ainforlist', component: Ainforlist, meta: { keepAlive: true } },
        { path: 'ainfordetails/:id', component: Ainfordetails, meta: { keepAlive: false } },
        { path: 'aaddstuinfor', component: Aaddstuinfor, meta: { keepAlive: false }},
        { path: 'astuinforidet/:id', component: Astuinforidet, meta: { keepAlive: false }},
        { path: 'agradeslist', component: Agradeslist, meta: { keepAlive: true }},
        { path: 'agradesearch/:id', component: Agradesearch, meta: { keepAlive: false }},
      ]
    }
  ]
})
