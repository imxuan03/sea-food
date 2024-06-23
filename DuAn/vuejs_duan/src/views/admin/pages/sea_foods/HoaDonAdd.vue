<template>
    <Layout>
        <template #template>
            <Breadcrumb :pageTitle="pageTitle" />
            <div class="page-container">
                <div class="ibox variant-box mb30">
                    <div class="ibox-title">
                        <div class="uk-flex uk-flex-middle uk-flex-between">
                            <h5 class="mr5">Hóa đơn có nhiều xào</h5>
                            <div class="create-warehouse uk-flex uk-flex-middle pointer">
                                <input type="checkbox" class="input-radio mr10" id="create-variant">
                                <label for="create-variant">Khởi tạo phiên bản</label>
                            </div>
                        </div>
                    </div>
                    <div class="ibox-content">
                        <div class="description mb30">
                            Thêm vào các xào giúp cho hóa đơn có nhiều lựa chọn ví dụ: Xào U9, Xào U10,...
                        </div>
                        <div class="variant-container">
                            <div class="panel-head">
                                <div uk-grid class="uk-grid-medium">
                                    <div class="uk-width-1-3@m">
                                        <div class="attribute-catalogue-title text-navy">
                                            Chọn xào
                                        </div>
                                    </div>
                                    <div class="uk-width-2-3@m">
                                        <div class="attribute-catalogue-title text-navy">
                                            Chọn giá trị cho xào
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body mb10">
                                <VariantItem v-for="(value, key) in variantItemIntances" :key="key" :index="key" @remove="removeVariantItem(key)" />
                            </div>
                            <div class="panel-foot">
                                <button type="button" class="add-attribute-catalogue mr10" @click="addAttributeCatalogueRow">Thêm phiên bản mới</button>
                                <button type="button" class="add-attribute-catalogue" @click="removeLastVariantItem">Xóa</button>
                            </div>
                        </div>
                        <div class="uk-flex uk-flex-right mt20">
                            <button class="btn btn-primary">Lưu thông tin</button>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </Layout>
</template>

<script setup>
    import { ref } from 'vue'
    import Layout from "../../../../components/admin/Layout.vue";
    import Breadcrumb from "../../../../components/admin/Breadcrumb.vue";
    
    const pageTitle = ref({
        createTitle: 'QL Hóa Đơn',
        createText: 'Thêm hóa đơn'
    });

    const variantItemIntances = ref([]);

    const addAttributeCatalogueRow = () => {
        variantItemIntances.value.push({});
    };

    const removeVariantItem = (index) => {
        variantItemIntances.value.splice(index, 1);
    };

    const removeLastVariantItem = () => {
        if (variantItemIntances.value.length > 0) {
            variantItemIntances.value.pop();
        }
    };
</script>
