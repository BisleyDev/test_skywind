export interface IUser {
	id: number,
	time: string,
	name: string,
	status: boolean
}

export interface IVisibleModal {
	isVisible: boolean,
	toggle: ()=> boolean
}