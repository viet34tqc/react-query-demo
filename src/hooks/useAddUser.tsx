import { useMutation, useQueryClient } from 'react-query';
import userApi from '../config/userApi';
import { User } from '../types/user';

export default function useAddUser() {
	const queryClient = useQueryClient();
	return useMutation(
		(data: User) => userApi.addUser(data).then((res) => res.data),
		{
			onSettled: () => {
				// Refetch the user
				queryClient.invalidateQueries('users');
			},
		}
	);
}
