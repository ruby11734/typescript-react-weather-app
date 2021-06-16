import React from "react";

interface IDividerProps {
	className: string;
}
const VerticalDivider = (props: IDividerProps) => (<div className={props.className} />)

export default VerticalDivider;