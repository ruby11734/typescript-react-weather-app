import React, { useEffect, useState } from "react";
import getForecastById from "../../apis/getForecast";
import { IWeatherProps } from "../../interfaces/weather";
import Loading from "../Commons/components/Loading";
import Weathers from "../Commons/components/Weathers";
import styles from './Forecast.module.css';

const parentStyles: string[] = [styles.forecast, styles.weathers];
const childrenStyles: string[] = [styles.everyday, styles.day, styles.icon, styles.temperature];

type ForecastProps = {
	id: number;
}

const Forecast: React.FC<ForecastProps> = ({id}) => {
	const [weatherList, setWeatherList] = useState<Array<IWeatherProps>>();
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		getForecast();
	}, []);

	const getForecast = () => {
		getForecastById(id).then((response) => {
			const { list } = response.data;

			setWeatherList(getWeeklyWeather(list));
			setLoading(false);
		})
	}

	const getWeeklyWeather = (list: Array<IWeatherProps>) => list.filter(weather => (
			new Date(weather.dt_txt).getHours() === 12)
	)

	return (
		<>
			{loading ? (
				<Loading />
			) : (weatherList && (
					<Weathers
						parentStyles={parentStyles}
						header={"Forecast"}
						weatherList={weatherList}
						childrenStyles={childrenStyles}
					/>
				))
			}
		</>
	)
}

export default Forecast;