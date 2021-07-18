import axios from 'axios';
import { useQuery } from 'react-query';
import { User } from '../types/user';

function fetchUser(userId: string): Promise<User> {
	return axios
		.get(`http://localhost:3005/users/${userId}`)
		.then((res) => res.data)
		.catch((error) => error.message);
}

export default function useUser(userId: string) {
	return useQuery(['users', userId], () => fetchUser(userId));
}
