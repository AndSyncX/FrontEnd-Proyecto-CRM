import axios from 'axios'; 						//-> Importando la librería axios para realizar solicitudes HTTP

const axiosConection = axios.create({ 			//-> Crear una instancia de axios con configuración personalizada
	baseURL: 'http://localhost:8080', 			//-> URL base de la API
	auth: { 									//-> Autenticación básica
		username: 'user', 						//-> Nombre de usuario para la autenticación
		password: '1234' 						//-> Contraseña para la autenticación
	}
});

export default axiosConection;