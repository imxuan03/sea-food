<script setup>
import { ref } from 'vue'
import Layout from "../../../../components/admin/Layout.vue";
import Breadcrumb from "../../../../components/admin/Breadcrumb.vue";
const pageTitle = ref('Quản lý danh sách xào');
const tableTitle = ref('Danh sách xào');
const filter = ref({
  createText: 'Thêm mới xào',
  createLink: '/admin/xaoadd'
});

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
    update: 'xaoupdate',
    delete: 'xaodelete'
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
            <IboxFilter :filter="filter"/>
            <Table :table="table"/>
          </div>
        </div>
      </div>

    </template>
  </Layout>
</template>

<script>
// export default {
//   data() {
//     return {
//       recordsPerPage: 20,
//       searchKeyword: '',
//       groups: [
//         { id: 1, name: 'U9', description: 'U9 là một loại xào có con vừa và nhỏ', status: true },
//         { id: 2, name: 'Xào U9',  description: 'Xào U9 là một loại xào có con lớn size tù 12->20', status: true }
//       ]
//     };
//   },
//   computed: {
//     filteredGroups() {
//       return this.groups.filter(group =>
//         group.name.includes(this.searchKeyword) || group.description.includes(this.searchKeyword)
//       );
//     }
//   },
//   methods: {
//     addGroup() {
//       alert('Thêm mới nhóm thành viên');
//     },
//     editGroup(group) {
//       alert(`Edit ${group.name}`);
//     },
//     deleteGroup(group) {
//       this.groups = this.groups.filter(g => g.id !== group.id);
//     }
//   }
// };
</script>

<style></style>