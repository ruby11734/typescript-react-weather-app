import React  from "react";
import Text from '../Text';
import styles from './Meta.module.css';

interface IMetaProps {
	className: string;
	title?: string;
	value: string;
}

const Meta = ({className, title, value }: IMetaProps) => {
	return (
		<div className={className}>
			{title && <Text className={styles.title}>{title}</Text>}
			{title && <br/>}
			<Text className={styles.value}>{value}</Text>
		</div>
	);
 }

export default Meta;