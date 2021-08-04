import { useQuery } from 'react-query';
import userApi from '../config/userApi';

const pageLimit = 15;

const usePaginatedUsers = (page: number) => {
	const params = {
		_page: page,
		_limit: pageLimit,
	};
	const fetchUsers = () => {
		return userApi.getPaginatedUser(params).then((res) => res.data);
	};
	return useQuery(['paginatedUsers', page], fetchUsers, {
		keepPreviousData: true, // The old data is kept until the new data arrives
	});
};

export default usePaginatedUsers;
