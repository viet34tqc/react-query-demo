import { User } from '../types/user';
import { axiosInstance } from './axios';

const userApi = {
	getPaginatedUser: (params: any) => {
		const url = 'users';
		return axiosInstance.get(url, params);
	},
	getAll: () => {
		const url = 'users';
		return axiosInstance.get(url);
	},
	getUser: (userId: string) => {
		const url = `users/${userId}`;
		return axiosInstance.get(url);
	},
	addUser: (data: User) => {
		return axiosInstance.post('users', data);
	},
	editUser: (updatedUser: User, userId: string) => {
		const url = `users/${userId}`;
		return axiosInstance.put(url, updatedUser);
	},
	deleteUser: (userId: string) => {
		const url = `users/${userId}`;
		return axiosInstance.delete(url);
	},
};

export default userApi;
