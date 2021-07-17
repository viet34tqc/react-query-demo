import React from 'react';
import UsersTable from '../components/UsersTable/UsersTable';
import useUsers from '../hooks/useUsers';

const BasicQuery = () => {
	const users = useUsers();
	const { data, error, status } = users;

	return (
		<div>
			<h2>Basic Query</h2>
			{error instanceof Error && <div>{error.message}</div>}

			{status === 'loading' && <div>Loading...</div>}

			{status === 'success' && <UsersTable users={data} />}
		</div>
	);
};

export default BasicQuery;
