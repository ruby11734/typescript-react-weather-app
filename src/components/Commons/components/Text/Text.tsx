import React from "react";

interface ITextProps {
	className: string;
	children: string;
}

const Text: React.FC<ITextProps> = ({className, children}) => (
		<span className={className}>{children}</span>
);


export default Text;