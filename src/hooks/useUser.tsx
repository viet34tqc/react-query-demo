import { useQuery } from 'react-query';
import { axiosInstance } from '../config/axios';
import { User } from '../types/user';

function fetchUser(userId: string): Promise<User> {
	return axiosInstance
		.get(`users/${userId}`)
		.then((res) => res.data)
		.catch((error) => error.message);
}

export default function useUser(userId: string) {
	return useQuery(['users', userId], () => fetchUser(userId));
}
