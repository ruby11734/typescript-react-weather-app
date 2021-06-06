import React, { useEffect, useState } from "react";
import getForecastById from "../../apis/getForecast";
import { IWeatherProps } from "../../interfaces/weather";
import Everyday from "./components/Everyday";

type ForecastProps = {
	id: number;
}

const Forecast = (props: ForecastProps) => {
	const [weatherList, setWeatherList] = useState<Array<IWeatherProps>>();
	const { id } = props;


	useEffect(() => {
		getForecast();
	}, []);

	const getForecast = () => {
		getForecastById(id).then((response) => {
			const { list } = response.data;

			setWeatherList(getWeeklyWeather(list));
		})
	}

	const getWeeklyWeather = (list: Array<IWeatherProps>) => {
		return list.filter(weather =>
			new Date(weather.dt_txt).getHours() === 12
		)
	}

	console.log(weatherList);
	return (
		<div>
			{
				weatherList?.map((weather) => (
					<Everyday key={weather.id} weather={weather} />
				))
			}
		</div>
	);
}

export default Forecast;