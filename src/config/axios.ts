import axios from 'axios';

export const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_API_SERVER,
	headers: {
		'Content-type': 'application/json',
	},
});

axiosInstance.interceptors.request.use(async (config) => {
	return config;
});
