<template>
    <div class="mb20 variant-row" uk-grid>
        <div class="uk-width-1-3@m">
            <div class="attribute-catalogue">
                <select v-model="attributeCatalogueId" class="form-select custom-select">
                    <option value="">Chọn thuộc tính</option>
                    <option v-for="item in list" :key="item.id" :value="item.id">{{ item.name }}</option>
                </select>
            </div>
        </div>
        <div class="uk-width-2-3@m">
            <div class="attribute-value">
                <div v-for="(attribute, index) in attributeValues" :key="index" class="attribute-item"
                    :style="{ marginBottom: index < attributeValues.length - 1 ? '20px' : '0' }">
                    <div class="attribute-catalogue" uk-grid>
                        <div class="uk-width-1-3@m">
                            <input type="number" v-model="attribute.value" class="fake-variant form-control custom-input"
                                placeholder="Chọn giá trị" min="0">
                        </div>
                        <div class="uk-width-2-3@m action-buttons">
                            <button type="button" class="btn btn-primary mr10" @click="addAttribute"
                                v-if="index === attributeValues.length - 1">
                                <i class='bx bxs-plus-square'></i>
                            </button>
                            <button type="button" class="btn btn-danger remove-attribute-catalogue"
                                @click="removeAttribute(index)" v-show="attributeValues.length > 1">
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
        const attributeValues = ref([{ id: '', value: 0 }]); // Khởi tạo giá trị ban đầu là 0

        const removeAttribute = (index) => {
            attributeValues.value.splice(index, 1); // Xóa mục thuộc tính khỏi attributeValues
        };

        const addAttribute = () => {
            if (attributeCatalogueId.value) {
                // Tìm mục từ danh sách list có id tương ứng
                const selectedAttribute = list.value.find(item => item.id === attributeCatalogueId.value);
                
                if (selectedAttribute) {
                    // Thêm mục vào attributeValues với id và giá trị
                    const valueToAdd = attributeCatalogueId.value.trim() !== '' ? attributeCatalogueId.value.trim() : 0;
                    attributeValues.value.push({ id: selectedAttribute.id, value: valueToAdd });
                    attributeCatalogueId.value = ''; // Đặt lại select về giá trị mặc định
                }
            } else {
                attributeValues.value.push({ id: '', value: 0 }); // Thêm giá trị mặc định 0 nếu không có giá trị được chọn
            }
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
    margin-bottom: 5px;
    /* Default margin-bottom */
}

.attribute-item:last-child {
    margin-bottom: 0;
    /* Remove margin-bottom for the last attribute item */
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
    cursor: pointer;
    margin-top: 10px;
}

.add-attribute-catalogue:hover {
    background: #efefef;
}

.attribute-value {
    display: flex;
    flex-wrap: wrap;
}

.attribute-item {
    flex-basis: calc(33.33% - 10px);
    /* 33.33% width with margin between items */
    margin-right: 10px;
    /* Adjust margin between items */
    margin-bottom: 10px;
    /* Default margin-bottom */
    position: relative;
    /* Ensure relative positioning */
}

.attribute-item:last-child {
    margin-right: 0;
    /* Remove margin-right for the last item in the row */
}

.action-buttons {
    display: flex;
    align-items: center;
}

.action-buttons button {
    margin-left: 10px;
    /* Add spacing between buttons */
}

@media (max-width: 768px) {
    .attribute-item {
        flex-basis: calc(50% - 10px);
        /* 50% width for smaller screens */
    }

    .add-attribute-catalogue {
        width: calc(50% - 10px);
        /* 50% width for smaller screens */
    }
}
</style>
