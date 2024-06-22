<script setup>
import { ref } from 'vue';
const { table } = defineProps(['table'])

console.log(table)

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
            <tr>
                <td></td>
                <td></td>
                <td><input style="width: 120px" form="ADD_form" type="text" name="ten_xao" autocomplete="off" required />
                </td>
                <td><input style="width: 120px" form="ADD_form" type="text" name="mo_ta" autocomplete="off" required />
                </td>
                <td></td>
                <td class="text-center uk-flex-center uk-flex">
                    <form id="ADD_form" method="post" style="display: contents">
                        <input type="text" name="type" style="display: none" value="ADD"></input> <input type="text" name="shopID" style="display: none" value="id"></input>
                        <router-link :to=table.route.add class="btn btn-primary mr10"><i class='bx bxs-plus-square'></i></router-link>
                    </form>
                </td>
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
                    <td>{{ val.description }}</td>
                    <td></td>
                    <td>
                    <td class="text-center uk-flex-center uk-flex">
                        <router-link :to=table.route.update class="btn btn-primary mr10"><i
                                class="bx bx-edit"></i></router-link>
                        <router-link :to=table.route.delete class="btn btn-danger"><i
                                class="bx bx-trash"></i></router-link>
                        <template v-if="table.action.length > 0">
                            <router-link v-for="(action, actionIndex) in table.action" :key="actionIndex"
                                :to="action.route" class="btn btn-danger" :class="action.class">
                                <i :class="action.icon"></i>
                            </router-link>
                        </template>
                    </td>
                    </td>
                </tr>
            </template>
        </tbody>
    </table>
</template>