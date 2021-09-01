import axios from 'axios';

export const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_API_SERVER || 'https://demo-usequery-server.herokuapp.com/',
	headers: {
		'Content-type': 'application/json',
	},
})

axiosInstance.interceptors.request.use(async (config) => {
	return config;
});
