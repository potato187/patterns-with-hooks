// Icon.js
import { useContext } from "react";
import { ExpandableContext } from ".";
import "./css/Icon.css";

const Icon = ({ className = "", ...rest }) => {
	const { expanded } = useContext(ExpandableContext);
	const combinedClassName = ["Expandable-icon", className].join("");
	return (
		<span className={combinedClassName} {...rest}>
			{expanded ? "-" : "+"}
		</span>
	);
};

export default Icon;
