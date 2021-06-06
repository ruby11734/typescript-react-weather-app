import React, { ReactNode } from "react";

interface ITextProps {
	className: string;
	children: string;
}

const Text = ({className, children}: ITextProps) => {

	console.log(className);
	return (
		<span className={className}>{children}</span>
	);
 }

export default Text;