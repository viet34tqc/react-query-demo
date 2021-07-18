import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const useDeleteUser = () => {
	const queryClient = useQueryClient();
	return useMutation(
		(id) => axios.delete(`http://localhost:3005/users/${id}`),
		{
			onSuccess: () => {
				queryClient.invalidateQueries();
			},
		}
	);
};

export default useDeleteUser;
