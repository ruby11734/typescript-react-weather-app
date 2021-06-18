import React, { useEffect, useState } from "react";
import getForecastById from "../../apis/getForecast";
import {WEEK} from "../../constants/constants";
import { IWeatherProps } from "../../interfaces/weather";
import { useAppSelector } from "../../store/hooks";
import Weathers from "../Commons/components/Weathers";
import Weather from "../Commons/components/Weathers/components/Weather";
import { selectSetCity } from "../../store/slices/WeatherSlice";
import styles from './Forecast.module.css';

const childrenStyles: string[] = [styles.everyday, styles.day, styles.icon, styles.temperature];

const Forecast: React.FC = () => {
	const [weatherList, setWeatherList] = useState<Array<IWeatherProps>>();
	const [loading, setLoading] = useState<boolean>(true);

	const id = useAppSelector(selectSetCity).cityWeather?.id;

	useEffect(() => {
		setLoading(true);
		getForecast();
	}, [id]);

	const getForecast = async () => {
		if (id) {
			await getForecastById(id).then((response) => {
				const { list } = response.data;
				setWeatherList(getWeeklyWeather(list));
				setLoading(false);
			})
		}
	}

	const getWeeklyWeather = (list: Array<IWeatherProps>) => (
		list.filter(weather => new Date(weather.dt_txt).getHours() === 12)
	)

	return (
		<div className={styles.forecast}>
			<Weathers
				parentStyles={styles.weathers}
				header={"Forecast"}
				loading={loading}
			>
				{weatherList?.map((weather) => (
					<Weather
						key={weather.dt_txt}
						childrenStyles={childrenStyles}
						CustomTag={'div'}
						title={WEEK[new Date(weather.dt_txt).getDay()]}
						clouds={weather.weather[0]}
						temperature={`${Math.round(weather.main.temp)} °`}
					/>
				))}
			</Weathers>
		</div>
	)
}

export default Forecast;