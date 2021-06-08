import React, { useEffect, useState } from 'react';
import { getWeathersByMultipleCityId } from '../../apis/getWeather';
import MAIN_CITY from '../../constants/CityMap';
import { IWeatherProps } from '../../interfaces/weather';
import Weathers from '../Commons/components/Weathers';
import Loading from "../Commons/components/Loading";
import styles from './OtherCities.module.css';

const parentStyles: string[] = [styles.otherCities];
const childrenStyles: string[] = [styles.city, styles.name, styles.icon, styles.temperature];

interface IHandler {
	handleCityClick: (weather: IWeatherProps) => void;
}

const OtherCities:React.FC<IHandler> = ({handleCityClick}) => {
	const [weatherList, setWeatherList] = useState<Array<IWeatherProps>>();
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		getCityWeather();
	}, []);

	const getCityWeather = async () => {
		const ids = MAIN_CITY.map(city => city.id);
		await getWeathersByMultipleCityId(ids).then((response) => {
			const { data } = response;
			setWeatherList(data.list);
			setLoading(false);
		});
	}

	// 	const handleCityClick = (id: number) => {
	// 	console.log(id);
	//  }

	return (
		<>
			{loading ? (
				<Loading />
			) : (weatherList && (
					<Weathers
						parentStyles={parentStyles}
						header={"Other Cities"}
						weatherList={weatherList}
						childrenStyles={childrenStyles}
						onClick={handleCityClick}
					/>
				))
			}
		</>
	)
}

export default OtherCities;