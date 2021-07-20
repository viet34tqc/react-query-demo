import { useMutation, useQueryClient } from 'react-query';
import { axiosInstance } from '../config/axios';

export default function useAddUser() {
	const queryClient = useQueryClient();
	return useMutation(
		(data) => axiosInstance.post('users', data).then((res) => res.data),
		{
			onSettled: () => {
				// Refetch the user
				queryClient.invalidateQueries('users');
			},
		}
	);
}
