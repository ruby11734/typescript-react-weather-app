import React, { useState } from 'react';
import styles from './App.module.css';
import VerticalDivider from './components/Commons/components/VerticalDivider';
import Current from './components/Current';
import Forecast from './components/Forecast';
import OtherCities from './components/OtherCities';
import MAIN_CITY from './constants/CityMap';
import { IWeatherProps } from './interfaces/weather';

const App = () => {
	const [weather, setWeather] = useState<IWeatherProps>();

	const handleCityClick = (weather: IWeatherProps) => {
		setWeather(weather);
	}

	return (
		<div className={styles.app}>
			<div className={styles.weather}>
				<Current cityWeather={weather || null} />
				<div className={styles.bottom}>
					<OtherCities handleCityClick={handleCityClick}/>
					<VerticalDivider className={styles.divider}/>
					<Forecast id={MAIN_CITY[0].id} />
				</div>
			</div>
		</div>
  );
}

export default App;
