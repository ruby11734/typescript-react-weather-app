import React, { useEffect, useState } from 'react';
import { getWeathersByMultipleCityId } from '../../apis/getWeather';
import MAIN_CITY from '../../constants/CityMap';
import { IWeatherProps } from '../../interfaces/weather';
import City from './components/City';
import styles from './OtherCities.module.css';

const OtherCities: React.FC = () => {
	const [weatherList, setWeatherList] = useState<Array<IWeatherProps>>();

	useEffect(() => {
		getCityWeather();
	}, []);

	const getCityWeather = async () => {
		const ids = MAIN_CITY.map(city => city.id);
		await getWeathersByMultipleCityId(ids).then((response) => {
			const { data } = response;
			setWeatherList(data.list);
		});
	}

	return (
		<div className={styles.otherCities}>
			{weatherList?.map((weather) => {
				return (
					<City
						key={weather.id}
						name={weather.name}
						weather={weather}
					/>
				);
			})}
		</div>
	)
}

export default OtherCities;