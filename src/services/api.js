import axios from "axios";
import { API_BASE_URL } from "./baseUrl";

const base_api_url = axios.create({
    baseURL: API_BASE_URL,
});

const ApiService = {
    getItem: async (endpoint, formData) => {
        try {
            const response = await base_api_url.get(endpoint, formData);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },
    createItem: async (endpoint, formData) => {
        try {
            const response = await base_api_url.post(endpoint, formData);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    updateItem: async (endpoint, formData) => {
        try {
            const response = await base_api_url.put(endpoint, formData);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },
    deleteItem: async (endpoint) => {
        try {
            const response = await base_api_url.delete(endpoint);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },
    getAllItems: async (endpoint) => {
        try {
            const response = await base_api_url.get(endpoint);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },
}

export default ApiService;
