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

<template>
    <nav class="navbar">
        <div class="uk-flex uk-flex-middle uk-flex-between">
            <div class="collapse-menu"><i class="bx bx-menu-alt-left" data-v-3b924b02></i></div>
            <div class="navbar-top-link">
                <div class="uk-flex uk-flex-middle">
                    <div class="notice">
                        <span class="header-link dropdown-toggle">
                            <i class="bx bx-bell header-link-icon"></i>
                            <span class="badge bg-secondary">5</span>
                        </span>
                    </div>
                    <div class="logout uk-flex uk-flex-middle">
                        <i class="bx bx-exit "></i>
                        <button class="btn btn-danger button-logout" @click="logout">Đăng Xuất</button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<style>
     /* Navbar */
    .navbar{
        padding: 0 20px;
        background: #fff;
        border-bottom: 1px solid  #e7eaec;
    }

    .navbar .bx-menu-alt-left{
        font-size: 25px;
    }

    .navbar-top-link .bx-exit{
        font-size: 20px;
        margin-right: 10px;
        color: #999;
    }

    .navbar-top-link a{
        color: #999;
    }

    .header-link{
        padding: 20px;
        display: block;
        position: relative;
    }

    .header-link-icon{
        font-size: 20px;
        padding-top: 4px;
    }
    
    .header-link .badge{
        position: absolute;
        background: var(--secondary-color);
        color: #fff;
        font-size: 10px;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        top: 15px;
        right: 11px;
        line-height: 15px;
        text-align: center;
        font-weight: 500;
    }
</style>