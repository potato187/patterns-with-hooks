import React, { useCallback, useMemo, useState } from "react";

const callFunctionsInSequence =
	(...fns) =>
	(...args) =>
		fns.forEach((fn) => fn && fn(...args));

function useExpand() {
	const [expanded, setExpanded] = useState(false);
	const toggle = useCallback(() => setExpanded((prevState) => !prevState), []);
	const togglerProps = useMemo(() => ({ onClick: toggle, "aria-expanded": expanded }), [toggle, expanded]);
	const getTogglerProps = useCallback(
		({ onClick, ...customProps } = {}) => ({
			"aria-expanded": expanded,
			onClick: callFunctionsInSequence(onClick, toggle),
			...customProps,
		}),
		[toggle, expanded]
	);
	const value = useMemo(
		() => ({ expanded, toggle, togglerProps, getTogglerProps }),
		[expanded, toggle, togglerProps, getTogglerProps]
	);
	return value;
}

export default useExpand;
