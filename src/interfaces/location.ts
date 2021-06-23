export interface ICoordinate {
	latitude: number;
	longitude: number;
}

export interface ILocationState {
	coord?: ICoordinate;
	error?: boolean;
}