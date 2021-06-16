import React, { useEffect, useState } from "react";
import getCurrentLocation from "../../apis/getCurrentLocation";
import { getWeatherByCoordinate } from "../../apis/getWeather";
import { ICoordinate, IWeatherProps } from "../../interfaces/weather";
import VerticalDivider from "../Commons/components/VerticalDivider";
import Meta from "../Commons/components/Meta";
import styles from './Current.module.css';
import Loading from "../Commons/components/Loading";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectSetCity, setCityWeather } from "../../store/slices/WeatherSlice";



const Current: React.FC = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [coord, setCoord] = useState<ICoordinate>();
	const [weather, setWeather] = useState<IWeatherProps>();

	const cityWeather = useAppSelector(selectSetCity).cityWeather;
	const dispatch = useAppDispatch();

	useEffect(() => {
		getLocation();
	}, []);

	useEffect(() => {
		getLocationWeather();
	}, [coord]);

	useEffect(() => {
		cityWeather && setWeather(cityWeather);
	 },[cityWeather]);

	const getLocation = async () => {
		await getCurrentLocation().then((position) => {
			setCoord({
				lat: position.coords.latitude,
				lon: position.coords.longitude,
			})
		});
	}

	const getLocationWeather = async () => {
		if (coord && !cityWeather) {
			await getWeatherByCoordinate(coord).then((res) => {
				const { data } = res;
				setWeather(data);
				setLoading(false);
				dispatch(setCityWeather(data));
			})
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
