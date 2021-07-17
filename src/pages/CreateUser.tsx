import { Redirect } from 'react-router-dom';
import UserForm from '../components/UserForm/UserForm';
import useAddUser from '../hooks/useAddUser';

const CreateUser = () => {
	const { isLoading, error, isSuccess, mutate } = useAddUser();
	const onSubmit = (data: any) => {
		mutate(data);
	};
	if (isSuccess) {
		return <Redirect to="/" />;
	}
	return (
		<div>
			<h2>New User</h2>
			{error instanceof Error && <div>{error.message}</div>}
			{isLoading && <div>Loading...</div>}
			<UserForm onSubmit={onSubmit} />
		</div>
	);
};

export default CreateUser;
