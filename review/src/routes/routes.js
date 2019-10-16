import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import User from "@/pages/User.vue";
import Mission from "@/pages/Mission.vue";
import Proposal from "@/pages/Proposal.vue";
import Login from "@/pages/Login.vue";
import Sign from "@/pages/Sign.vue";
import Upload from "@/pages/Upload.vue";
const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/user",
    children: [
      {
        path: "user",
        name: "我的账户",
        component: User
      },
      {
        path: "mission",
        name: "审核任务",
        component: Mission
      },
      {
        path: "proposal",
        name: "提案审阅",
        component: Proposal
      },
      {
        path: "login",
        name: "登陆",
        component: Login
      },
      {
        path: "sign",
        name: "注册",
        component: Sign
      },
      {
        path: "Upload",
        name: "论文上传",
        component: Upload
      }
    ]
  }
];

export default routes;
