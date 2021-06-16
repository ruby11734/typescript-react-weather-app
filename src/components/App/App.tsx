import React from 'react';
import VerticalDivider from '../Commons/components/VerticalDivider';
import Current from '../Current';
import Forecast from '../Forecast';
import OtherCities from '../OtherCities';
import styles from './App.module.css';

const App = () => {
	return (
		<div className={styles.app}>
			<div className={styles.weather}>
				<Current />
				<div className={styles.bottom}>
					<OtherCities />
					<VerticalDivider className={styles.divider}/>
					<Forecast />
				</div>
			</div>
		</div>
	);
}

export default App;
