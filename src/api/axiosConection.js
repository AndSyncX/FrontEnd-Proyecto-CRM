import axios from 'axios';

const axiosConection = axios.create({
	baseURL: 'http://localhost:8080',
	auth: {
		username: 'user',
		password: '1234'
	}
});

export default axiosConection;