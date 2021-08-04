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

axiosInstance.interceptors.response.use(
	(response) => {
		if (response && response.data) {
			return response.data;
		}

		return response;
	},
	(error) => {
		// Handle errors
		throw error;
	}
);
