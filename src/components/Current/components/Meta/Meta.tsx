import React from "react";
import Text from '../Text';

interface IMetaProps {
	title: string;
	value: string;
}

const Meta = ({ title, value }: IMetaProps) => {

	return (
		<div>
			<Text>{title}</Text>
			<br />
			<Text>{value}</Text>
		</div>
	);
 }

export default Meta;