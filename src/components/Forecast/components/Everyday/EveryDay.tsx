import React from "react";
import { IWeatherProps } from "../../../../interfaces/weather";

interface IEverydayProps {
	weather: IWeatherProps;
}

const Everyday = (props: IEverydayProps) => {
	const { weather } = props;

	console.log(weather);
	return (<div></div>);
 }

export default Everyday;