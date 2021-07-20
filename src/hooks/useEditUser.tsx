import { useMutation, useQueryClient } from 'react-query';
import { axiosInstance } from '../config/axios';

const useEditUser = (userId: string) => {
	const queryClient = useQueryClient();
	return useMutation(
		(updatedUser) => axiosInstance.put(`users/${userId}`, updatedUser),
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
