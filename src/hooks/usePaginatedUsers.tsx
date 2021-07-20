import { useQuery } from 'react-query';
import { axiosInstance } from '../config/axios';

const pageLimit = 15;

const usePaginatedUsers = (page: number) => {
	const fetchUsers = () => {
		return axiosInstance(`users?_page=${page}&_limit=${pageLimit}`).then(
			(res) => res.data
		);
	};
	return useQuery(['paginatedUsers', page], fetchUsers, {
		keepPreviousData: true, // The old data is kept until the new data arrive
	});
};

export default usePaginatedUsers;
