import React, { useEffect, useState } from "react";
import getCurrentLocation from "../../apis/getCurrentLocation";
import { getWeatherByCoordinate } from "../../apis/getWeather";
import { ICoordinate, IWeatherProps } from "../../interfaces/weather";
import VerticalDivider from "../Commons/components/VerticalDivider";
import Meta from "../Commons/components/Meta";
import styles from './Current.module.css';


const Current: React.FC = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [coord, setCoord] = useState<ICoordinate>();
	const [weather, setWeather] = useState<IWeatherProps>();

	useEffect(() => {
		getLocation();
	}, []);

	useEffect(() => {
		getLocationWeather();
	}, [coord?.lat]);

	const getLocation = () => {
		getCurrentLocation().then((position) => {
			setCoord({
				lat: position.coords.latitude,
				lon: position.coords.longitude,
			})
		})
	}

	const getLocationWeather = () => {
		if (coord) {
			getWeatherByCoordinate(coord).then((res) => {
				const { data } = res;
				setWeather(
					data
					// id: data.id,
					// name: data.name,
					// temperature: data.main.temp,
					// clouds: data.weather[0].main,
					// humidity: data.main.humidity,
					// wind: data.wind.speed,
				);
				setLoading(false);
			})
		}
	}

	console.log(coord);
	console.log(weather);
	return (
		<div className={styles.current}>
			{loading ? (
				<div className={styles.loading}>
					<div>Loading....</div>
				</div>
			) : (
					<>
						<div className={styles.left}>
							<Meta className={styles.temperature} value={`${weather?.main.temp} °`} />
							<Meta className={styles.clouds} value={`${weather?.weather[0].main}`} />
							<div className={styles.bottomMetas}>
								<Meta className={styles.humidity} title='HUMIDITY' value={`${weather?.wind?.speed} %`} />
								<VerticalDivider width='2px' color="rgba(255, 255, 255, 0.7)" />
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
