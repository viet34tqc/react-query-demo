import { useQuery } from 'react-query';
import userApi from '../config/userApi';
import { User } from '../types/user';

function fetchUser(userId: string): Promise<User> {
	return userApi
		.getUser(userId)
		.then((res) => res.data)
		.catch((error) => error.message);
}

export default function useUser(userId: string) {
	return useQuery(['users', userId], () => fetchUser(userId));
}
