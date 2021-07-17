import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';

enum GenderEnum {
	female = 'female',
	male = 'male',
}

interface FormData {
	first_name: string;
	last_name: string;
	email: string;
	gender: GenderEnum;
}

const schema = yup.object().shape({
	first_name: yup.string().required(),
	last_name: yup.string().required(),
	email: yup.string().required().email(),
	gender: yup.string().required().oneOf(Object.values(GenderEnum)),
});

const UserForm = () => {
	const history = useHistory();
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<FormData>({
		resolver: yupResolver(schema),
	});

	const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="form-control">
				<label htmlFor="first_name">First Name</label>
				<input type="text" id="first_name" {...register('first_name')} />
				{errors?.first_name && (
					<div className="errors">First Name is required</div>
				)}
			</div>
			<div className="form-control">
				<label htmlFor="last_name">Last Name</label>
				<input type="text" id="last_name" {...register('last_name')} />
				{errors?.last_name && (
					<div className="errors">Last Name is required</div>
				)}
			</div>
			<div className="form-control">
				<label htmlFor="email">Email</label>
				<input type="email" id="email" {...register('email')} />
				{errors.email && errors.email.type === 'required' && (
					<div className="errors">Email is required</div>
				)}
				{errors.email && errors.email.type === 'pattern' && (
					<div className="errors">Provide a valid email address</div>
				)}
			</div>
			<div className="form-control">
				<label htmlFor="gender">Gender</label>
				<select id="gender" {...register('gender')}>
					<option value=""></option>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
				</select>

				{errors.gender && <div className="errors">Gender is required</div>}
			</div>
			<div className="form-control">
				<button type="submit">Submit</button>
				<button type="button" onClick={() => history.goBack()}>
					Back
				</button>
			</div>
		</form>
	);
};

export default UserForm;
