<script setup>
import { ref } from 'vue'
import Layout from "../../../../components/admin/Layout.vue";
import Breadcrumb from "../../../../components/admin/Breadcrumb.vue";
const pageTitle = ref({
  createTitle: 'QL Hóa Đơn',
  createText: 'Hóa đơn chi tiết'
});

</script>
<template>
    <Layout>
        <template #template>
            <Breadcrumb :pageTitle="pageTitle" />
            <div class="page-container">
                <div class="ibox">
                    Đây là trang hóa đơn chi tiết
                </div>
            </div>
        </template>
    </Layout>
</template>

<script>

</script>

<style scoped>


</style>