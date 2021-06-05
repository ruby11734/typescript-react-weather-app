import React, { useEffect, useState } from "react";
import getCurrentLocation from "../../apis/getCurrentLocation";
import { getWeatherByCoordinate } from "../../apis/getWeather";
import { ICoordinate, IWeatherProps } from "../../interfaces/weather";
import Meta from "./components/Meta";


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
		<div>
			{loading ? (
				<div>
					<div>Loading....</div>
				</div>
			) : (
					<div>
						<Meta title="WIND" value={`${weather?.wind?.speed} K/M`} />
					</div>
			)}
		</div>
	);
}

export default Current;
