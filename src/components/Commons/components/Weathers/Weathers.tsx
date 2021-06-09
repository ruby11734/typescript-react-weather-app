import React from "react";
import WEEK from "../../../../constants/Week";
import { IWeatherProps } from "../../../../interfaces/weather";
import Weather from "./components/Weather";
import classNames from 'classnames/bind'
import styles from './Weathers.module.css';
import Loading from "../Loading";

interface IWeathersDisplayProps {
	parentStyles: string[];
	header: 'Forecast' | 'Other Cities';
	weatherList: IWeatherProps[];
	childrenStyles: string[];
	onClick?: (weather: IWeatherProps) => void;
	loading: boolean;
}

const Weathers: React.FC<IWeathersDisplayProps> = (props) => {
	const { parentStyles, header, weatherList, childrenStyles, loading, onClick: handleCityClick} = props;

	const cx = classNames.bind(styles);

	const getKey = (weather: IWeatherProps): string | number => {
		return header === 'Other Cities' ? weather.id : weather.dt_txt;
	}

	const getTitle = (weather: IWeatherProps): string => {
		return header === 'Other Cities'
			? weather.name
			: WEEK[new Date(weather.dt_txt).getDay()];
	}

	const getCustomTag = header === 'Other Cities' ? 'button' : 'div';

	return (
		<div className={cx('block')}>
			<h2 className={styles.header}>{header}</h2>
			{loading ? (
				<Loading />
			) : (
				<div className={parentStyles[1]}>
				{
					weatherList?.map((weather) => (
						<Weather
							key={getKey(weather)}
							childrenStyles={childrenStyles}
							CustomTag={`${getCustomTag}`}
							onClick={() => handleCityClick ? handleCityClick(weather) : null}
							title={getTitle(weather)}
							clouds={weather.weather[0]}
							temperature={`${Math.round(weather.main.temp)} °`}
						/>
					))
				}
				</div>
			)}
		</div>
	);
}

export default Weathers;