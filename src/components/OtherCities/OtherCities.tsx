import React, { useEffect, useState } from 'react';
import { getWeathersByMultipleCityId } from '../../apis/getWeather';
import MAIN_CITY from '../../constants/CityMap';
import { IWeatherProps } from '../../interfaces/weather';
import City from './components/City';

const OtherCities: React.FC = () => {
	const [weatherList, setWeatherList] = useState<Array<IWeatherProps>>();

	useEffect(() => {
		getCityWeather();
	}, []);

	const getCityWeather = async () => {
		const ids = MAIN_CITY.map(city => city.id);
		await getWeathersByMultipleCityId(ids).then((response) => {
			console.log(response);
			const { data } = response;
			// console.log(data.list);
			setWeatherList(data.list);
		});
	}

	// console.log(weatherList);
	return (
		<div>
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