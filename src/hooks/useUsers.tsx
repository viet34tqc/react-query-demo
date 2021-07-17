import axios from 'axios';
import { useQuery } from 'react-query';
import { User } from '../types/user';

function fetchUsers(): Promise<User[]> {
	return axios.get('http://localhost:3005/users').then((res) => res.data);
}

export default function useUsers() {
	return useQuery('users', fetchUsers);
}
