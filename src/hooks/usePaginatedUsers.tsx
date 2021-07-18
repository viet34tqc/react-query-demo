import axios from 'axios';
import { useQuery } from 'react-query';

const pageLimit = 15;

const usePaginatedUsers = (page: number) => {
	const fetchUsers = () => {
		return axios(
			`http://localhost:3004/users?_page=${page}&_limit=${pageLimit}`
		).then((res) => res.data);
	};
	return useQuery(['paginatedUsers', page], fetchUsers, {
		keepPreviousData: true, // The old data is kept until the new data arrive
	});
};

export default usePaginatedUsers;
