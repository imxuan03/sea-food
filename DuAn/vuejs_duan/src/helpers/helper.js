import axios from 'axios';
import { ref } from 'vue';

export const handleFormError = (error, formErrorMessage) => {
    formErrorMessage.value = {}
    if (error.response.status == 422) {
        Object.keys(error.response.data.errors).forEach(key => {
            formErrorMessage.value[key] = error.response.errors[key][0]
        })
    } else {
        formErrorMessage.value.message = error.response.data.message
    }
}

export const setupDataDropbox = async (url, dropboxData, dropboxErrorMessage) => {
    dropboxData.value = [];
    dropboxErrorMessage.value = '';

    try {
        const response = await axios.get(url);
        dropboxData.value = response.data;
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            dropboxErrorMessage.value = error.response.data.message;
        } else {
            dropboxErrorMessage.value = 'An error occurred while fetching data';
        }
    }
}
