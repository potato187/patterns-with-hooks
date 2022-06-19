import React, { useContext } from "react";
import { ExpandableContext } from ".";
import "./css/Header.css";

function Header({ children, className = "", ...rest }) {
	const { toggle } = useContext(ExpandableContext);
	const combinedClassName = ["Expandable-trigger", className].join("");
	return (
		<button className={combinedClassName} onClick={toggle} {...rest}>
			{children}
		</button>
	);
}

export default Header;
