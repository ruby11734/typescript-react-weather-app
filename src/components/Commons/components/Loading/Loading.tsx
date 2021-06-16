import React from "react";
import classNames from "classnames/bind";
import styles from './Loading.module.css';

interface ILoadingProps {
	loadingStyle?: string;
}

const Loading = ({ loadingStyle }: ILoadingProps) => {
	const cx = classNames.bind(styles);

	return(
		<div className={cx('loading', loadingStyle)}>
			<div >loading...</div>
		</div>
	)
}

export default Loading;
