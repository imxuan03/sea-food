<script >
import Sidebar from './Sidebar.vue';
import Authorization from "@/services/admin/authorization.service.js";
export default {
        computed: {},
        name: "app-slider-admin",
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
    <div id="page-wrapper" class="dashboard">
        <Sidebar/>
        <!-- <slot name="template"></slot> -->
    </div>  
        
    
</template>

<style scoped>


</style>