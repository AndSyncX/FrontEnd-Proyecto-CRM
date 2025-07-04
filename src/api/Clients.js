import axiosConection from './axiosConection';                  

const API_BASE_URL = './clients';                               //-> Aqui se define la URL base de la API (localhost:8080/clients)

export async function getClients() {                            //-> Funcion para obtener todos los clientes
    try {
        const respons = await axiosConection.get(API_BASE_URL); //-> Realiza una solicitud GET a la API para obtener todos los clientes
        return respons.data;                                    //-> Devuelve los datos de la respuesta
    } catch (error) {
        console.error('Error al obtener los clientes:', error); //-> Manejo de errores
        throw error; 
    }
}