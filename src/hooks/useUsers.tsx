import { useQuery } from 'react-query';
import { axiosInstance } from '../config/axios';
import { User } from '../types/user';

function fetchUsers(): Promise<User[]> {
	return axiosInstance.get('users').then((res) => res.data);
}

export default function useUsers() {
	return useQuery('users', fetchUsers);
}
