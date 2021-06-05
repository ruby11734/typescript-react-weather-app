import React, { ReactNode } from "react";

interface ITextProps {
	// className: string;
	children: string;
}

const Text = ({children}: ITextProps) => {

	return (
		<span>{children}</span>
	);
 }

export default Text;