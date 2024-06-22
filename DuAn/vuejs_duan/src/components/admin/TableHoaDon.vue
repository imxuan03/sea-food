<script setup>
import { ref } from 'vue';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import XaoService from "@/services/admin/xao.service";

const { table } = defineProps(['table']);
console.log(table);

const formData = ref({
    ten_xao: "",
    mo_ta_xao: "",
});

const add = async (event) => {
    event.preventDefault();
    try {
        if (!formData.value.ten_xao || !formData.value.mo_ta_xao) {
            toast.error("Please fill in all required fields.", { autoClose: 3000 });
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append("ten_xao", formData.value.ten_xao);
        formDataToSend.append("mo_ta_xao", formData.value.mo_ta_xao);

        console.log("Sending data:", {
            ten_xao: formData.value.ten_xao,
            mo_ta_xao: formData.value.mo_ta_xao
        });

        const response = await XaoService.create(formDataToSend);

        console.log("Response:", response);
        

        toast.success("Added successfully!", { autoClose: 1200 });
        setTimeout(() => {
            this.$router.push({ name: "xao" });
        }, 800);
    } catch (error) {
        console.log(error);
        const errorMessage = error.response?.data?.error || "Error!";
        toast.error(errorMessage, { autoClose: 3000 });
    }
};
</script>

<template>
    <table class="uk-table table-bordered">
        <thead>
            <tr>
                <td>
                    <input type="checkbox" value="" class="input-checkbox">
                </td>
                <td v-for="(val, key) in table.thead" :key="key">{{ val }}</td>
                <td>Trạng thái</td>
                <td class="uk-text-center">Thao Tác</td>
            </tr>
        </thead>
        <tbody>
            <template v-if="table.data.length > 0">
                <tr v-for="(val, key) in table.data" :key="key">
                    <td>
                        <input type="checkbox" value="" class="input-checkbox check-box-item">
                    </td>
                    <td>{{ val.id }}</td>
                    <td>{{ val.name }}</td>
                    <td>{{ val.hoadon_code }}</td>
                    <td>{{ val.date }}</td>
                    <td></td>
                    <td class="text-center uk-flex-center uk-flex">
                        <router-link :to="table.route.update" class="btn btn-primary mr10">
                            <i class="bx bx-edit"></i>
                        </router-link>
                        <router-link :to="table.route.delete" class="btn btn-danger mr10">
                            <i class="bx bx-trash"></i>
                        </router-link>
                        <router-link :to="table.route.detail" class="btn btn-warning">
                            <i class='bx bx-detail'></i>
                        </router-link>
                        <template v-if="table.action.length > 0">
                            <router-link v-for="(action, actionIndex) in table.action" :key="actionIndex"
                                :to="action.route" class="btn btn-danger" :class="action.class">
                                <i :class="action.icon"></i>
                            </router-link>
                        </template>
                    </td>
                </tr>
            </template>
        </tbody>
    </table>
</template>
