import { Redirect, useParams } from 'react-router-dom';
import UserForm from '../components/UserForm/UserForm';
import useEditUser from '../hooks/useEditUser';
import useUser from '../hooks/useUser';

const EditUser = () => {
	const { id } = useParams<{ id: string }>();
	const { data: user, error: userError, isLoading } = useUser(id);
	const { mutate, isSuccess, isLoading: isMutating } = useEditUser(id);
	const onSubmit = (data: any) => {
		mutate(data);
	};

	if (isSuccess) {
		return <Redirect to="/" />;
	}

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h2>Edit User</h2>
			{userError instanceof Error && <div>{userError.message}</div>}
			{user && (
				<UserForm
					user={user}
					onSubmit={onSubmit}
					submitText="Edit"
					isLoading={isMutating}
				/>
			)}
		</div>
	);
};

export default EditUser;
