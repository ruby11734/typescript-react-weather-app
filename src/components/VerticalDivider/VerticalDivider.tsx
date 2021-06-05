import React from "react";

interface IDividerProps {
	color: string;
	width: string;
	className: string;
}
const VerticalDivider = (props: IDividerProps) => {
	const { color, width, className } = props;

	return (
		<div
			className={className}
			style={{
				width,
				backgroundColor: color,
			}}
		/>
	);
}

export default VerticalDivider;