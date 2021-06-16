import React, { ReactNode } from "react";
import classNames from 'classnames/bind'
import styles from './Weathers.module.css';
import Loading from "../Loading";

interface IWeathersDisplayProps {
	parentStyles: string;
	header: 'Forecast' | 'Other Cities';
	loading: boolean;
	children: ReactNode;
}

const Weathers: React.FC<IWeathersDisplayProps> = (props) => {
	const { parentStyles, header, loading, children } = props;

	const cx = classNames.bind(styles);

	return (
		<div className={cx('block')}>
			<h2 className={styles.header}>{header}</h2>
			{loading ? (
				<Loading />
			) : (
					<div className={parentStyles}>
						{children}
					</div>
			)}
		</div>
	);
}

export default Weathers;