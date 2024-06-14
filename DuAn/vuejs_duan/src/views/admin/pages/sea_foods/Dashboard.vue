<script setup>
import Layout from "../../../../components/admin/Layout.vue";

</script>

<template>
    <Layout>
        <template #template>
            Đây là trang dashboard
        </template>
    </Layout>
</template>

<script>
// import Authorization from "@/services/admin/authorization.service.js";
// export default {
//   computed: {},
//   name: "app-header-admin",
//   methods: {
//     async logout() {
//       // Xử lý đăng xuất ở đây
//       try {
//         const respone = await Authorization.logOut();
//         this.$router.push({ name: "login" });
//       } catch (error) {
//         console.log(error);
//       }
//     },
//   },
// };
</script>

<style scoped>


</style>