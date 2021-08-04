import { useMutation, useQueryClient } from 'react-query';
import userApi from '../config/userApi';
import { User } from '../types/user';

const useEditUser = (userId: string) => {
	const queryClient = useQueryClient();
	return useMutation(
		(updatedUser: User) => userApi.editUser(updatedUser, userId),
		{
			onError: (error: Error) => {
				throw new Error(error.message);
			},
			onSettled: () => {
				queryClient.invalidateQueries('users');
			},
		}
	);
};

export default useEditUser;
