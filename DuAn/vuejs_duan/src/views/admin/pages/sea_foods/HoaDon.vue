<script setup>
import { ref } from 'vue'
import Layout from "../../../../components/admin/Layout.vue";
import Breadcrumb from "../../../../components/admin/Breadcrumb.vue";
const pageTitle = ref({
  createTitle: 'QL Hóa Đơn',
  createText: 'QL Danh Sách Hóa Đơn'
});
const tableTitle = ref('Danh sách hóa đơn');

const filter = ref({
  filterTitle: 'Thêm mới hóa đơn',
  filterLink: '/admin/hoadon/add'
});


const table = ref({
  thead: ['Siêu','Tên hóa đơn', 'Mã hóa đơn','Ngày tạo'],
  data: [
    {
      id: 1,
      name: 'Hóa đơn 1',
      hoadon_code: 'HD1',
      date:'22/06/2024'
    },
    {
      id: 2,
      name: 'Hóa đơn 2',
      hoadon_code: 'HD2',
      date:'22/06/2024'
    }
  ],
  route: {
    update: 'xao/update',
    delete: 'xao/delete',
    detail: 'xao/detail'
  },
  action: [
    // {
    //   class: 'btn-warning ml10',
    //   icon: 'bx bx-cog',
    //   route: '/cog'
    // }
  ]
})

</script>

<template>
    <Layout>
        <template #template>
            <Breadcrumb :pageTitle="pageTitle" />
            <div class="page-container">
                <div class="ibox">
                <IboxTitle :tableTitle="tableTitle" />
                <div class="ibox-content">
                    <IboxFilterHoaDon :filter="filter"/>
                    <TableHoaDon :table="table"/>
                </div>
                </div>
            </div>
        </template>
    </Layout>
</template>

<script>

</script>

<style scoped>


</style>