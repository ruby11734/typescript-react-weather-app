import React from "react";
import { IWeatherProps } from "../../../../interfaces/weather";

type CityProps = {
	// key: number;
	name: string;
	weather: IWeatherProps;
}

const City =(props: CityProps) => {
	// const { name, weather } = props;
	// console.log(key);
	// console.log(name);

	// console.log(weather.temperature);

	return (
		<div></div>
	);
}
export default City;