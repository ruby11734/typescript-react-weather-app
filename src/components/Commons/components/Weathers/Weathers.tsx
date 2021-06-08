import React from "react";
import WEEK from "../../../../constants/Week";
import { IWeatherProps } from "../../../../interfaces/weather";
import Weather from "./components/Weather";
import classNames from 'classnames/bind'
import styles from './Weathers.module.css';

interface IWeathersDisplayProps {
	parentStyles: string[];
	header: 'Forecast' | 'Other Cities';
	weatherList: IWeatherProps[];
	childrenStyles: string[];
	onClick?: (weather: IWeatherProps) => void;
}

const Weathers: React.FC<IWeathersDisplayProps> = (props) => {
	const { parentStyles, header, weatherList, childrenStyles, onClick: handleCityClick} = props;

	const cx = classNames.bind(styles);

	const getKey = (weather: IWeatherProps): string | number => {
		return header === 'Other Cities' ? weather.id : weather.dt_txt;
	}

	const getDisplayType = (weather: IWeatherProps): string => {
		return header === 'Other Cities'
			? weather.name
			: WEEK[new Date(weather.dt_txt).getDay()];
	}

	const getBlockType = header === 'Other Cities' ? 'button' : 'div';

	return (
		<div className={cx('block',parentStyles[0])}>
			<h2 className={styles.header}>{header}</h2>
			<div className={parentStyles[1]}>
				{
					weatherList?.map((weather) => (
						<Weather
							key={getKey(weather)}
							childrenStyles={childrenStyles[0]}
							blockType={getBlockType}
							onClick={()=>handleCityClick? handleCityClick(weather):null}
						>
							<h3 className={cx('title',childrenStyles[1])}>{getDisplayType(weather)}</h3>
							<img
								className={cx('icon',childrenStyles[2])}
								src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
								alt={weather.weather[0].main}
							/>
							<div className={cx('temperature', childrenStyles[3])}>{`${Math.round(weather.main.temp)} °`}</div>
						</Weather>
					))
				}
			</div>
		</div>
	);
}

export default Weathers;