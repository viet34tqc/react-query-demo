import { useMutation, useQueryClient } from 'react-query';
import userApi from '../config/userApi';

const useDeleteUser = () => {
	const queryClient = useQueryClient();
	return useMutation((id: string) => userApi.deleteUser(id), {
		onSuccess: () => {
			queryClient.invalidateQueries();
		},
	});
};

export default useDeleteUser;
