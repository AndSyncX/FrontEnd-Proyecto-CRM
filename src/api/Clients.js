import axiosConection from './axiosConection';

// Aqui se define la URL base de la API
const API_BASE_URL = './clients';

// Funcion para obtener todos los clientes
export async function getClients() {
    try {
        const respons = await axiosConection.get(API_BASE_URL); // Realiza una solicitud GET a la API para obtener todos los clientes
        return respons.data; // Devuelve los datos de la respuesta
    } catch (error) {
        console.error('Error al obtener los clientes:', error); // Manejo de errores
        throw error; 
    }
}