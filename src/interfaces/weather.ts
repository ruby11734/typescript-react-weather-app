import { PayloadAction } from "@reduxjs/toolkit";

export interface IWeatherProps {
	id: number;
	name: string;
	dt_txt: string;
	main: {
		temp: number;
		temp_min: number;
		temp_max: number;
		humidity: number;
	}
	weather: ICloudsProps[];
	wind: {
		speed: number;
	}

}

export interface ICloudsProps {
	id: number;
	main: string;
	icon: string;
}

export interface ICityWeatherState {
	cityWeather?: IWeatherProps;
}

export interface ICityWeatherReducer {
	state: ICityWeatherState,
	action: PayloadAction<IWeatherProps>,
}
