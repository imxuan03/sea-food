<template>
    <aside id="sidebar" class="app-sidebar">
        <div class="aside-head">
            <span class="image img-cover profile-image"><img src="@/assets/admin/img/unnamed.png" alt=""></span>
            <div class="name">Võ Thành Đạt</div>
            <div class="role">Quản trị viên</div>
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
                        </div>
                    </router-link>
                </li>
                <li>
                    <a class="nav-link" @click="toggleSubMenu">
                        <div class="uk-flex uk-flex-middle">
                            <span class="task-icon">
                                <i class="bx bx-cart"></i>
                            </span>
                            <span class="nav-label">QL Danh Mục Xào</span>
                            <span class="task-icon arrow">
                                <i class="bx" :class="showSubMenu ? 'bx-chevron-down' : 'bx-chevron-right'"></i>
                            </span>
                        </div>
                    </a>
                    <ul class="uk-list uk-clearfix sub-module" :class="{ active: showSubMenu }">
                        <li>
                            <router-link 
                                :to="{ name: 'xao' }" 
                                class="nav-link" 
                                :class="{ active: showSubMenu && $route.name === 'xao' }">
                                QL Danh Sách Xào
                            </router-link>
                        </li>
                        <li>
                            <router-link 
                                :to="{ name: 'xao_add' }" 
                                class="nav-link" 
                                :class="{ active: showSubMenu && $route.name === 'xao_add' }">
                                Thêm xào
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script>
export default {
    data() {
        return {
            showSubMenu: false
        }
    },
    watch: {
        $route(to, from) {
            // Ensure submenu is visible if navigating to a child route
            if (to.name === 'xao' || to.name === 'xao_add') {
                this.showSubMenu = true;
            } else {
                this.showSubMenu = false;
            }
        }
    },
    methods: {
        toggleSubMenu() {
            this.showSubMenu = !this.showSubMenu;
        }
    },
    mounted() {
        // Set the initial state based on the current route
        if (this.$route.name === 'xao' || this.$route.name === 'xao_add') {
            this.showSubMenu = true;
        }
    }
}
</script>

<style scoped>
.app-sidebar {
    height: 100vh;
    width: 240px;
    background: #111c43;
    color: #a3aed1;
    position: absolute;
}

.app-sidebar .aside-head {
    padding: 20px;
}

.profile-image {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    margin-bottom: 5px;
}

.profile-image img {
    border-radius: 50%;
}

.aside-head .name {
    font-size: 18px;
    font-weight: 600;
    color: #a3aed1;
    margin-bottom: 7px;
}

.aside-head .role {
    font-size: 13px;
}

.app-sidebar .aside-body {
    padding: 0 10px;
}

.app-sidebar .task-list li > * {
    padding: 10px 12px;
    position: relative;
    text-decoration: none;
    font-size: 14px;
    border-radius: 8px;
    display: block;
    color: #a3aed1;
    padding-left: 30px;
    font-weight: 500;
}

.app-sidebar .task-list > li:hover > a,
.app-sidebar .task-list > li > .active {
    background: rgba(255, 255, 255, .05);
    color: #fff;
}

.app-sidebar .task-list li:hover > a,
.app-sidebar .task-list li .active > a {
    color: #fff;
}

.app-sidebar .task-list li > a .task-icon {
    font-size: 18px;
    position: absolute;
    top: 10px;
    left: 5px;
}

.app-sidebar .task-list li > a .task-icon::before {
    content: '';
}

.app-sidebar .task-list li > a .arrow {
    right: 10px;
    left: initial;
}

.task-name {
    text-transform: uppercase;
    color: #57638b !important;
    font-weight: 700 !important;
    font-size: 10px !important;
    padding-left: 0 !important;
}

/* Sub module */
.sub-module {
    padding-left: 20px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out, padding-top 0.3s ease-in-out, padding-bottom 0.3s ease-in-out;
    margin: 0;
    padding-top: 0;
    padding-bottom: 0;
}

.sub-module.active {
    max-height: 1000px;
    padding-top: 10px;
    padding-bottom: 10px;
}

.sub-module li {
    margin: 0;
}

.sub-module li > .nav-link {
    font-size: 13px;
    color: #a3aed1;
    position: relative;
    padding: 8px 10px 8px 15px;
    display: block;
    transition: background 0.3s ease-in-out;
}

.sub-module li > .nav-link::before {
    content: '';
    display: block;
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    width: 5px;
    height: 5px;
    background: transparent;
    border: 1px solid #a3aed1;
    border-radius: 50%;
}

.sub-module li > .nav-link:hover,
.sub-module li > .nav-link.active {
    background: rgba(255, 255, 255, .05);
    border-radius: 8px;
    color: #fff;
}

.sub-module li > .nav-link[data-v-e2c8aa21]:hover,
.sub-module li > .nav-link.active[data-v-e2c8aa21] {
    background: rgba(255, 255, 255, .05);
    border-radius: 8px;
    color: #fff;
}
</style>
