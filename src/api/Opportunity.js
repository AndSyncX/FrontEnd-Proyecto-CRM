import axiosConection from "./axiosConection"

const API_BASE_URL = "./opportunity"

export async function getOpportunities() {                            
    try {
        const respons = await axiosConection.get(API_BASE_URL); 
        return respons.data;                                    
    } catch (error) {
        console.error("Error al obtener las oportunidades:", error);
        throw error; 
    }
}