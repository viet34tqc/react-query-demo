import { useState } from 'react';
import { Link } from 'react-router-dom';
import useDeleteUser from '../../hooks/useDeleteUser';
import { Users } from '../../types/user';
import DeleteModal from '../DeleteModal/DeleteModal';
import { DeleteIcon } from '../icons/DeleteIcon';
import EditIcon from '../icons/EditIcon';
import './UsersTable.styles.scss';
interface UsersTableProps {
	users: Users | undefined;
}

const UsersTable = ({ users }: UsersTableProps) => {
	const [deleteId, setDeleteId] = useState('');
	const [showModal, setShowModal] = useState(false);
	const { mutate } = useDeleteUser();
	function showDeleteModal(userId: string) {
		setDeleteId(userId);
		setShowModal(true);
	}

	function hideDeleteModal() {
		setShowModal(false);
	}

	function onDelete(id: any) {
		mutate(id, {
			onSuccess: () => {
				hideDeleteModal();
			},
		});
	}

	const rows = users?.map((user, index) => (
		<tr key={user.id} className="bg-white hover:bg-green-100">
			<td>{user.id}</td>
			<td>{user.first_name}</td>
			<td>{user.last_name}</td>
			<td>{user.email}</td>
			<td>{user.gender}</td>
			<td className="flex">
				<Link
					className="inline-block p-2 text-lime-800 hover:text-lime-500"
					to={`/users/edit/${user.id}`}
				>
					<EditIcon />
				</Link>
				<button
					className="inline-block p-2 text-lime-800 hover:text-lime-500"
					onClick={() => showDeleteModal(user.id)}
				>
					<DeleteIcon />
				</button>
			</td>
		</tr>
	));
	return (
		<>
			<DeleteModal
				id={deleteId}
				showModal={showModal}
				deleteAction={onDelete}
				cancelAction={hideDeleteModal}
			/>
			<Link to="/user/create" className="btn inline-block mb-4">
				Create User
			</Link>
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
		</>
	);
};

export default UsersTable;
