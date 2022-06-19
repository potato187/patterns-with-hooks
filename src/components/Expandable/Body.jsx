// Body.js
import { useContext } from "react";
import { ExpandableContext } from ".";
import "./css/Body.css";

const Body = ({ children, className = "", ...rest }) => {
	const { expanded } = useContext(ExpandableContext);
	const combinedClassNames = ["Expandable-panel", className].join("");
	return expanded ? (
		<div className={combinedClassNames} {...rest}>
			{children}
		</div>
	) : null;
};
export default Body;
