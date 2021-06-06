import { AxiosResponse } from "axios";

export interface ICoordinate {
	lat: number;
	lon: number;
}

export interface IWeatherProps {
	id: number;
	name: string;
	dt_txt: string;
	main: {
		temp: number;
		temp_min?: number;
		temp_max?: number;
		humidity?: number;
	}
	weather: ICloudsProps[];
	wind?: {
		speed: number;
	}

}

export interface ICloudsProps {
	id: number;
	main: string;
	icon: string;
}