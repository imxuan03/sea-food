<script setup>
import { ref } from 'vue'
import Layout from "../../../../components/admin/Layout.vue";
import Breadcrumb from "../../../../components/admin/Breadcrumb.vue";
const pageTitle = ref({
  createTitle: 'QL Danh Mục Xào',
  createText: 'QL Danh Sách Xào'
});
const tableTitle = ref('Danh sách xào');
// const filter = ref({
//   createText: 'Thêm mới xào',
//   createLink: '/admin/xaoadd'
// });

const table = ref({
  thead: ['STT','Tên xào', 'Mô tả'],
  data: [
    {
      id: 1,
      name: 'U9',
      description: 'U9 là một loại xào có con vừa và nhỏ'
    },
    {
      id: 2,
      name: 'Xào U9',
      description: 'U9 là một loại xào có con lớn'
    }
  ],
  route: {
    update: 'xao/update',
    delete: 'xao/delete'
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
            <IboxFilterXao :filter="filter"/>
            <TableXao :table="table"/>
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<style></style>