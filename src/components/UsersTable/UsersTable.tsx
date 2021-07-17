import { Link } from 'react-router-dom';
import { Users } from '../../types/user';
import { DeleteIcon } from '../icons/DeleteIcon';
import EditIcon from '../icons/EditIcon';
import './UsersTable.styles.scss';
interface UsersTableProps {
	users: Users | undefined;
}

const UsersTable = ({ users }: UsersTableProps) => {
	const rows = users?.map((user, index) => (
		<tr key={user.id} className="bg-white hover:bg-green-100">
			<td>{user.id}</td>
			<td>{user.first_name}</td>
			<td>{user.last_name}</td>
			<td>{user.email}</td>
			<td>{user.gender}</td>
			<td>
				<Link
					className="inline-block p-2 text-lime-800 hover:text-lime-500"
					to={`/users/edit/${user.id}`}
				>
					<EditIcon />
				</Link>
				<Link
					className="inline-block p-2 text-lime-800 hover:text-lime-500"
					to={`/users/edit/${user.id}`}
				>
					<DeleteIcon />
				</Link>
			</td>
		</tr>
	));
	return (
		<table className="table-fixed table-users" style={{ width: '100%' }}>
			<thead className="text-white bg-pink-900">
				<tr className="py-4">
					<th className="w-1/12">Id</th>
					<th className="w-3/12">First Name</th>
					<th className="w-3/12">Last Name</th>
					<th className="w-3/12">Email</th>
					<th className="w-1/12">Gender</th>
					<th className="w-1/12">Action</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
};

export default UsersTable;
