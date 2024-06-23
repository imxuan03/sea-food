<template>
    <div class="mb20 variant-row" uk-grid>
        <div class="uk-width-1-3@m">
            <div class="attribute-catalogue">
                <select v-model="attributeCatalogueId" class="form-select custom-select">
                    <option disabled value="">Chọn thuộc tính</option>
                    <option v-for="item in list" :key="item.id" :value="item.id">{{ item.name }}</option>
                </select>
            </div>
        </div>
        <div class="uk-width-2-3@m">
            <div class="attribute-value">
                <div v-for="(attribute, index) in attributeValues" :key="index" class="attribute-item" :style="{ marginBottom: index < attributeValues.length - 1 ? '5px' : '0' }">
                    <div uk-grid>
                        <div class="uk-width-5-6@m">
                            <div class="attribute-catalogue">
                                <input type="text" v-model="attribute.value" class="fake-variant form-control custom-input" placeholder="Chọn giá trị">
                            </div>
                        </div>
                        <div class="uk-width-1-6@m">
                            <button type="button" class="btn btn-primary mr10" @click="addAttribute">
                                <i class='bx bxs-plus-square'></i>
                            </button>
                            <button type="button" class="btn btn-danger remove-attribute-catalogue" @click="removeAttribute(index)">
                                <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const attributeCatalogueId = ref('');
        const list = ref([
            { id: 1, name: 'Xào U9' },
            { id: 2, name: 'Xào U10' }
        ]);
        const attributeValues = ref([{ id: '', value: '' }]);
        const attributeCatalogueIds = ref(['']); // Array to store selected catalogue IDs

        const removeAttribute = (index) => {
            attributeValues.value.splice(index, 1); // Remove the attribute item from attributeValues
            attributeCatalogueIds.value.splice(index, 1); // Remove the corresponding catalogue ID
        };

        const addAttribute = () => {
            attributeValues.value.push({ id: attributeCatalogueId.value, value: '' }); // Add a new empty attribute item
            attributeCatalogueIds.value.push(attributeCatalogueId.value); // Store the selected catalogue ID
            attributeCatalogueId.value = ''; // Reset the select to default
        };

        return {
            attributeCatalogueId,
            list,
            attributeValues,
            removeAttribute,
            addAttribute
        };
    }
};
</script>



<style>
.custom-select,
.custom-input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    font-size: 16px;
    height: 40px;
    box-sizing: border-box;
}

.attribute-catalogue .form-control {
    width: 100%;
}

.attribute-item {
    margin-bottom: 5px; /* Default margin-bottom */
}

.attribute-item:last-child {
    margin-bottom: 0; /* Remove margin-bottom for the last attribute item */
}

.add-attribute-catalogue {
    height: 34px;
    color: #1791f2;
    border: 1px dashed #1791f2;
    background: #fafafa;
    text-align: center;
    border-radius: 5px;
    transition: all 0.3s ease;
    padding: 0 51px;
}

.add-attribute-catalogue:hover {
    background: #efefef;
}
</style>
