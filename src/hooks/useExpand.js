import React, { useCallback, useMemo, useRef, useState } from "react";

const callFunctionsInSequence =
	(...fns) =>
	(...args) =>
		fns.forEach((fn) => fn && fn(...args));

function useExpand(initialExpanded = false) {
	const resetRef = useRef(0);
	const [expanded, setExpanded] = useState(initialExpanded);
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

	console.log(resetDep);
	const reset = useCallback(() => {
		setExpanded(initialExpanded);
		++resetRef.current;
	}, [initialExpanded]);

	const value = useMemo(
		() => ({ expanded, toggle, togglerProps, getTogglerProps, reset }),
		[expanded, toggle, togglerProps, getTogglerProps, reset]
	);
	return value;
}

export default useExpand;
