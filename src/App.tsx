import React from 'react';
import styles from './App.module.css';
import Current from './components/Current';
import Forecast from './components/Forecast';
import OtherCities from './components/OtherCities';
import MAIN_CITY from './constants/CityMap';

const App = () => {
	return (
		<div className={styles.app}>
			<div className={styles.weather}>
				<Current />
				<OtherCities />
				<Forecast id={MAIN_CITY[0].id} />
			</div>
		</div>
  );
}

export default App;
