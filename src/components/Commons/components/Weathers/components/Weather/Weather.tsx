import React, { MouseEventHandler, ReactNode } from "react";
import classNames from 'classnames/bind';
import styles from './Weather.module.css';

interface IWeatherComponentProps {
	childrenStyles: string;
	children: ReactNode;
	blockType: 'button' | 'div';
	onClick?: () => void;
}

const Weather: React.FC<IWeatherComponentProps> = ({
	childrenStyles, blockType, children,
	onClick
}) => {
	const cx = classNames.bind(styles);

	return (
		<>
			{
				blockType === 'button' ? (
					<button className={childrenStyles} onClick={()=>onClick ? onClick() : null}>
						{children}
					</button>
			) : (
					<div className={childrenStyles}>
						{children}
					</div>
				)
			}
		</>
	);
 }

export default Weather;