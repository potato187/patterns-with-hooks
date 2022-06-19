import { createContext, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Body from "./Body";
import Header from "./Header";
import Icon from "./Icon";
import "./css/Expandable.css";

export const ExpandableContext = createContext();

export default function index({ children, onExpand, className = "", ...rest }) {
	const [expanded, setExpanded] = useState(false);
	const toggle = useCallback(() => setExpanded((prevExpanded) => !prevExpanded), []);
	const componentJustMounted = useRef(true);
	const combinedClassName = ["Expandable", className].join("");

	const value = useMemo(() => ({ expanded, toggle }), [expanded, toggle]);
	useEffect(() => {
		if (!componentJustMounted && onExpand) {
			onExpand(expanded);
		}
		componentJustMounted.current = false;
	}, [expanded]);

	return (
		<ExpandableContext.Provider value={value}>
			<div className={combinedClassName} {...rest}>
				{children}
			</div>
		</ExpandableContext.Provider>
	);
}

index.Header = Header;
index.Icon = Icon;
index.Body = Body;
