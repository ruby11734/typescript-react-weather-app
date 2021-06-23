import React, { useEffect, useState } from "react";
import getCurrentLocation from "../../apis/getCurrentLocation";
import { getWeatherByCoordinate } from "../../apis/getWeather";
import { IWeatherProps } from "../../interfaces/weather";
import VerticalDivider from "../Commons/components/VerticalDivider";
import Meta from "../Commons/components/Meta";
import styles from './Current.module.css';
import Loading from "../Commons/components/Loading";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectSetCity, setCityWeather } from "../../store/slices/WeatherSlice";
import { setLocationError } from "../../store/slices/LocationSlice";

const Current: React.FC = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [weather, setWeather] = useState<IWeatherProps>();

	const cityWeather = useAppSelector(selectSetCity).cityWeather;
	const dispatch = useAppDispatch();

	useEffect(() => {
		getLocation();
	}, []);

	useEffect(() => {
		if (cityWeather) {
			setWeather(cityWeather);
			setLoading(!cityWeather);
		}
	}, [cityWeather]);

	const getLocation = async () => {
		try {
			const {coords} = await getCurrentLocation();
			const { data } = await getWeatherByCoordinate(coords);
			setWeather(data);
			setLoading(!data);
			dispatch(setCityWeather(data));
		} catch (error) {
			dispatch(setLocationError());
			alert("Please make sure to enable the location permission!");
		}
	}

	return (
		<div className={styles.current}>
			{loading ? (
				<Loading loadingStyle={styles.loading}/>
			) : (
					<>
						<div className={styles.left}>
							<Meta className={styles.temperature} value={`${weather?.main.temp} °`} />
							<Meta className={styles.clouds} value={`${weather?.weather[0].main}`} />
							<div className={styles.bottomMetas}>
								<Meta className={styles.humidity} title='HUMIDITY' value={`${weather?.wind?.speed} %`} />
								<VerticalDivider className={styles.divider} />
								<Meta className={styles.wind} title='WIND' value={`${weather?.wind?.speed} K/M`} />
							</div>
						</div>
						<div className={styles.right}>
							<Meta className={styles.location}  value={`${weather?.name}`} />
						</div>
						<div className={styles.bottom} />
					</>
			)}
		</div>
	);
}

export default Current;
