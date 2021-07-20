import { useMutation, useQueryClient } from 'react-query';
import { axiosInstance } from '../config/axios';

const useDeleteUser = () => {
	const queryClient = useQueryClient();
	return useMutation((id) => axiosInstance.delete(`users/${id}`), {
		onSuccess: () => {
			queryClient.invalidateQueries();
		},
	});
};

export default useDeleteUser;
