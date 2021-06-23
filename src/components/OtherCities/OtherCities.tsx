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
import { selectSetError } from '../../store/slices/LocationSlice';

const childrenStyles: string[] = [styles.city, styles.name, styles.icon, styles.temperature];

const OtherCities:React.FC= () => {
	const [weatherList, setWeatherList] = useState<Array<IWeatherProps>>();
	const [loading, setLoading] = useState<boolean>(true);
	const [toggle, setToggle] = useState<boolean>(false);

	const currentCity = useAppSelector(selectSetCity).cityWeather;
	const locationError = useAppSelector(selectSetError).error;
	const dispatch = useAppDispatch();

	const cx = classNames.bind(styles);

	useEffect(() => {
		getCityWeather();
	}, [locationError]);

	const getCityWeather = async () => {
		const ids = MAIN_CITY.map(city => city.id);
		const { list } = await (await getWeathersByMultipleCityId(ids)).data;
		setWeatherList(list);
		setLoading(!list);

		// if location is not enabled, set the first weather as default
		locationError &&  dispatch(setCityWeather(list[0]));
	}

	const handleToggle = () => setToggle(!toggle);

	const handleCityClick = (weather: IWeatherProps, buttonIndex: number) => {
		if (weatherList && currentCity) {
			if (!weatherList.find(item => item.id === currentCity.id)) {
				const updatedList = weatherList.map((item, index) => (
					index === buttonIndex ? currentCity : item
				))
				setWeatherList(updatedList);
			}
			dispatch(setCityWeather(weather));
		}
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
