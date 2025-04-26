import axiosConection from "./axiosConection";

const APP_BASE_URL = "./users";

export async function getUsers() {
    try {
        const response = await axiosConection.get(APP_BASE_URL); 
        return response.data;
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        throw error; 
    }
}