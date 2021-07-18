export enum GenderEnum {
	female = 'Female',
	male = 'Male',
}

export interface User {
	id: string;
	first_name: string;
	last_name: string;
	email: string;
	gender: GenderEnum;
}

export type Users = User[];
