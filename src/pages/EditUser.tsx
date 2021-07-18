import { Redirect, useParams } from 'react-router-dom';
import UserForm from '../components/UserForm/UserForm';
import useEditUser from '../hooks/useEditUser';
import useUser from '../hooks/useUser';

const EditUser = () => {
	const { id } = useParams<{ id: string }>();
	const { data: user, error: userError } = useUser(id);
	const { mutate, isSuccess, isLoading } = useEditUser(id);
	const onSubmit = (data: any) => {
		mutate(data);
	};

	if (isSuccess) {
		return <Redirect to="/" />;
	}
	return (
		<div>
			<h2>Edit User</h2>
			{userError instanceof Error && <div>{userError.message}</div>}
			{isLoading && <div>Loading...</div>}
			{user && <UserForm user={user} onSubmit={onSubmit} submitText="Edit" />}
		</div>
	);
};

export default EditUser;
