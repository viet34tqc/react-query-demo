import { useQuery } from 'react-query';
import userApi from '../config/userApi';
import { User } from '../types/user';

function fetchUsers(): Promise<User[]> {
	return userApi.getAll().then((res) => res.data);
}

export default function useUsers() {
	return useQuery('users', fetchUsers);
}
