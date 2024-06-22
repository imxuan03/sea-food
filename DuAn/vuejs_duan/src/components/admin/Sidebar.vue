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
                    <a class="nav-link" @click="toggleSubMenu('xao')">
                        <div class="uk-flex uk-flex-middle">
                            <span class="task-icon">
                                <i class="bx bx-cart"></i>
                            </span>
                            <span class="nav-label">QL Danh Mục Xào</span>
                            <span class="task-icon arrow">
                                <i class="bx" :class="showSubMenuXao ? 'bx-chevron-down' : 'bx-chevron-right'"></i>
                            </span>
                        </div>
                    </a>
                    <ul v-if="showSubMenuXao" class="uk-list uk-clearfix sub-module" :class="{ active: showSubMenuXao }">
                        <li>
                            <router-link 
                                :to="{ name: 'xao' }" 
                                class="nav-link" 
                                :class="{ active: showSubMenuXao && $route.name === 'xao' }">
                                QL Danh Sách Xào
                            </router-link>
                        </li>
                    </ul>
                </li>

                <li>
                    <a class="nav-link" @click="toggleSubMenu('hoadon')">
                        <div class="uk-flex uk-flex-middle">
                            <span class="task-icon">
                                <i class="bx bx-cart"></i>
                            </span>
                            <span class="nav-label">QL Hóa Đơn</span>
                            <span class="task-icon arrow">
                                <i class="bx" :class="showSubMenuHoaDon ? 'bx-chevron-down' : 'bx-chevron-right'"></i>
                            </span>
                        </div>
                    </a>
                    <ul v-if="showSubMenuHoaDon" class="uk-list uk-clearfix sub-module" :class="{ active: showSubMenuHoaDon }">
                        <li>
                            <router-link 
                                :to="{ name: 'hoadon' }" 
                                class="nav-link" 
                                :class="{ active: showSubMenuHoaDon && $route.name === 'hoadon' }">
                                QL Danh Sách Hóa Đơn
                            </router-link>
                        </li>
                    </ul>
                    <ul v-if="showSubMenuHoaDonAdd" class="uk-list uk-clearfix sub-module" :class="{ active: showSubMenuHoaDon }">
                        <li>
                            <router-link 
                                :to="{ name: 'hoadon.add' }" 
                                class="nav-link" 
                                :class="{ active: showSubMenuHoaDonAdd && $route.name === 'hoadon.add' }">
                                Thêm hóa đơn
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
            showSubMenuXao: false,
            showSubMenuHoaDon: false,
            showSubMenuHoaDonAdd: false
        }
    },
    watch: {
        $route(to, from) {
            // Ensure submenu is visible if navigating to a child route
            if (to.name === 'xao') {
                this.showSubMenuXao = true;
                this.showSubMenuHoaDon = false;
                this.showSubMenuHoaDonAdd = false;
            } else if (to.name === 'hoadon') {
                this.showSubMenuHoaDon = true;
                this.showSubMenuHoaDonAdd = true;
                this.showSubMenuXao = false;
            } else {
                this.showSubMenuXao = false;
                this.showSubMenuHoaDon = false;
            }
        }
    },
    methods: {
        toggleSubMenu(menu) {
            if (menu === 'xao') {
                this.showSubMenuXao = !this.showSubMenuXao;
                this.showSubMenuHoaDon = false;
            } else if (menu === 'hoadon') {
                this.showSubMenuHoaDon = !this.showSubMenuHoaDon;
                this.showSubMenuHoaDonAdd = !this.showSubMenuHoaDonAdd;
                this.showSubMenuXao = false;
            }
        }
    },
    mounted() {
        // Set the initial state based on the current route
        if (this.$route.name === 'xao') {
            this.showSubMenuXao = true;
        } else if (this.$route.name === 'hoadon' || this.$route.name === 'hoadon.add') {
            this.showSubMenuHoaDon = true;
            this.showSubMenuHoaDonAdd = true;
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
    padding: 8px 10px; /* Reduced padding */
    position: relative;
    text-decoration: none;
    font-size: 14px;
    border-radius: 8px;
    display: block;
    color: #a3aed1;
    padding-left: 30px;
    font-weight: 500;
}

.app-sidebar .task-list > li {
    margin-bottom: 5px; /* Reduced margin */
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
    top: 8px; /* Adjusted for reduced padding */
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
    padding-top: 8px; /* Reduced padding */
    padding-bottom: 8px; /* Reduced padding */
}

.sub-module li {
    margin: 0;
}

.sub-module li > .nav-link {
    font-size: 13px;
    color: #a3aed1;
    position: relative;
    padding: 6px 10px 6px 15px; /* Reduced padding */
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
