import React, { useEffect, useState } from 'react';
import { getWeathersByMultipleCityId } from '../../apis/getWeather';
import { MAIN_CITY } from '../../constants/constants';
import { IWeatherProps } from '../../interfaces/weather';
import Weathers from '../Commons/components/Weathers';
import classNames from 'classnames/bind'
import styles from './OtherCities.module.css';
import Weather from '../Commons/components/Weathers/components/Weather';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectSetCity, setCityWeather } from '../../store/slices/WeatherSlice';

const childrenStyles: string[] = [styles.city, styles.name, styles.icon, styles.temperature];

const OtherCities:React.FC= () => {
	const [weatherList, setWeatherList] = useState<Array<IWeatherProps>>();
	const [loading, setLoading] = useState<boolean>(true);
	const [toggle, setToggle] = useState<boolean>(false);

	const currentCity = useAppSelector(selectSetCity).cityWeather;
	const dispatch = useAppDispatch();
	const cx = classNames.bind(styles);

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

	const handleToggle = () => setToggle(!toggle);

		const handleCityClick = (weather: IWeatherProps, buttonIndex: number) => {
			if (weatherList) {
				const updatedList = weatherList.map((item, index) => {
					if (currentCity && index === buttonIndex) {
						return currentCity;
					}
					return item;
				})
				setWeatherList(updatedList);
			}
			currentCity && dispatch(setCityWeather(weather));
	};

	return (
		<div className={styles.otherCities}>
			{!toggle && (
					<button
						className={styles.toggle}
						onClick={handleToggle}
					>
						View More Cities ...
					</button>
				)
			}
			<div className={cx('container', { active: toggle })}>
				<Weathers
					parentStyles={styles.cities}
					header={"Other Cities"}
					loading={loading}
				>
					{weatherList?.map((weather, index) => (
						<Weather
							key={weather.id}
							childrenStyles={childrenStyles}
							CustomTag={'button'}
							onClick={() => handleCityClick(weather, index)}
							title={weather.name}
							clouds={weather.weather[0]}
							temperature={`${Math.round(weather.main.temp)} °`}
						/>
					))}
				</Weathers>
			</div>
		</div>
	)
}

export default OtherCities;
