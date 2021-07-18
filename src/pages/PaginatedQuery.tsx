import React, { useState } from 'react';
import UsersTable from '../components/UsersTable/UsersTable';
import usePaginatedUsers from '../hooks/usePaginatedUsers';

const pageLimit = 15;

const PaginatedQuery = () => {
	const [page, setPage] = useState(1);
	const users = usePaginatedUsers(page);
	const { data, error, status } = users;

	const prevPage = () => {
		if (page > 1) setPage((page) => page - 1);
	};

	const nextPage = () => {
		setPage((page) => page + 1);
	};

	return (
		<>
			<div>
				<h2>Paginated Query</h2>
				{error instanceof Error && <div>{error.message}</div>}

				{status === 'loading' && <div>Loading...</div>}

				{status === 'success' && <UsersTable users={data} />}
			</div>
			<div className="flex mt-4 justify-between items-center">
				<button className="btn" onClick={prevPage} disabled={page <= 1}>
					Prev
				</button>
				<span className="rounded font-semibold text-teal-900">
					Page: {page}
				</span>
				<button
					className="btn"
					onClick={nextPage}
					disabled={data && data.length < pageLimit}
				>
					Next
				</button>
			</div>
		</>
	);
};

export default PaginatedQuery;
