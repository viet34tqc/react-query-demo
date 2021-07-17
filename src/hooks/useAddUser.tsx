import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

export default function useAddUser() {
	const queryClient = useQueryClient();
	return useMutation(
		(data) =>
			axios.post('http://localhost:3005/users', data).then((res) => res.data),
		{
			onSettled: () => {
                // Refetch the user
				queryClient.invalidateQueries('users');
			},
		}
	);
}
