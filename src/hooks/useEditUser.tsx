import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const useEditUser = (userId: string) => {
	const queryClient = useQueryClient();
	return useMutation(
		(updatedUser) =>
			axios.put(`http://localhost:3005/users/${userId}`, updatedUser),
		{
			onSettled: () => {
				queryClient.invalidateQueries('users');
			},
		}
	);
};

export default useEditUser;
