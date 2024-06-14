<script setup>
</script>
<template>
    <aside id="sidebar" class="app-sidebar">
       <div class="aside-head">
            <span class="image img-cover profile-image"><img src="@/assets/admin/img/unnamed.png" alt=""></span>
            <div class="name">Võ Thành Đạt</div>
            <div class="role">Quản trị viên</div>
            <button class="btn btn-danger button-logout" @click="logout">Đăng Xuất</button>
       </div>
       <div class="aside-body">
        <ul class="uk-list uk-clearfix task-list">
            <li class="task-item">
                <span class="task-name">Main</span>
            </li>
            <li>
                <router-link :to="{ name: 'dashboard' }" class="nav-link" :class="{ active: $route.name === 'dashboard' }">
                    <div class="uk-flex uk-flex-middle">
                        <span class="task-icon">
                            <i class="bx bx-home"></i>
                        </span>
                        <span class="nav-label">Dashboard</span>
                        <span class="task-icon arrow">
                            <i class="bx bx-chevron-right"></i>
                        </span>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'xao' }" class="nav-link" :class="{ active: $route.name === 'xao' }">
                    <div class="uk-flex uk-flex-middle">
                        <span class="task-icon">
                            <i class="bx bx-cart"></i>
                        </span>
                        <span class="nav-label">QL Danh Mục Xào</span>
                        <span class="task-icon arrow">
                            <i class="bx bx-chevron-right"></i>
                        </span>
                    </div>
                </router-link>
            </li>
        </ul>
       </div>
    </aside>  
</template>

<script>
import Authorization from "@/services/admin/authorization.service.js";
export default {
  computed: {},
  name: "sidebar-admin",
  methods: {
    async logout() {
      // Xử lý đăng xuất ở đây
      try {
        const respone = await Authorization.logOut();
        this.$router.push({ name: "login" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
     .app-sidebar{
        height: 100%;
        width: 240px;
        background: #111c43;
        color: #a3aed1;
    }

    .app-sidebar .aside-head{
        padding: 20px;
    }

    .profile-image{
        width: 48px;
        height: 48px;
        border-radius: 50%;
        display: inline-block;
        margin-bottom: 5px;
    }

    .profile-image img{
        border-radius: 50%;
    }

    .aside-head .name{
        font-size: 18px;
        font-weight: 600;
        color: #a3aed1;
        margin-bottom: 7px;
    }

    .aside-head .role{
        font-size: 13px;
    }

    .app-sidebar .aside-body{
        padding: 0 10px;
    }

    .app-sidebar .task-list li > *{
        padding: 15px 12px;
        position: relative;
        text-decoration: none;
        font-size: 14px;
        border-radius: 8px;
        display: block;
        color: #a3aed1;
        padding-left: 30px;
        font-weight: 500;
    }

    .app-sidebar .task-list li:hover,
    .app-sidebar .task-list li .active{
        background: rgba(255, 255, 255, .05);
        color: #fff;
    }

    .app-sidebar .task-list li:hover *,
    .app-sidebar .task-list li .active *{
        color: #fff;
    }

    .app-sidebar .task-list li > a .task-icon{
        font-size: 18px;
        position: absolute;
        top: 10px;
        left: 5px;
    }

    .app-sidebar .task-list li > a .task-icon::before{
        content: '';
    }

    .app-sidebar .task-list li > a .arrow{
        right: 10px;
        left: initial;
    }

    .task-name{
        text-transform: uppercase;
        color: #57638b !important;
        font-weight: 700 !important;
        font-size: 10px !important;
        padding-left: 0 !important;
    }

</style>