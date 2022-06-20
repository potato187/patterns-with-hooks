import { createContext, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Body from "./Body";
import Header from "./Header";
import Icon from "./Icon";
import "./css/Expandable.css";

export const ExpandableContext = createContext();

export default function index({ children, className = "", shouldExpand, onExpand, ...rest }) {
	const [expanded, setExpanded] = useState(false);
	const toggle = useCallback(() => setExpanded((prevExpanded) => !prevExpanded), []);

	const componentJustMounted = useRef(true);
	const isExpandControlled = shouldExpand !== undefined;

	const getToggle = isExpandControlled ? onExpand : toggle;
	const getState = isExpandControlled ? shouldExpand : expanded;

	const combinedClassName = ["Expandable", className].join("");
	const value = useMemo(() => ({ expanded: getState, toggle: getToggle }), [getState, getToggle]);

	useEffect(() => {
		if (!componentJustMounted && !isExpandControlled) {
			onExpand(expanded);
			componentJustMounted.current = false;
		}
	}, [expanded, onExpand, isExpandControlled]);

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
