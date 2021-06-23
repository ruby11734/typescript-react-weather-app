import React from "react";
import classNames from 'classnames/bind';
import styles from './Weather.module.css';
import { ICloudsProps } from "../../../../../../interfaces/weather";

interface IWeatherComponentProps {
	childrenStyles: string[];
	CustomTag: 'button' | 'div';
	onClick?: () => void;
	title: string;
	clouds: ICloudsProps;
	temperature: string;
}

const Weather: React.FC<IWeatherComponentProps> = (props) => {
	const { childrenStyles, CustomTag, title, clouds, temperature, onClick } = props;
	const cx = classNames.bind(styles);

	return (
		<>
			<CustomTag className={childrenStyles[0]} onClick={() => onClick ? onClick() : null}>
				<h3 className={cx('title', childrenStyles[1])}>{title}</h3>
				<img
					className={cx('icon', childrenStyles[2])}
					src={`https://openweathermap.org/img/wn/${clouds.icon}.png`}
					alt={clouds.main}
				/>
				<div className={cx('temperature', childrenStyles[3])}>{temperature}</div>
			</CustomTag>
		</>
	);
 }

export default Weather;