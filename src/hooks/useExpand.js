import React, { useCallback, useMemo, useState } from "react";

function useExpand() {
	const [expanded, setExpanded] = useState(false);
	const toggle = useCallback(() => setExpanded((prevState) => !prevState), []);
	const togglerProps = useMemo(() => ({ onClick: toggle, "aria-expanded": expanded }), [toggle, expanded]);
	const value = useMemo(() => ({ expanded, toggle, togglerProps }), [expanded, toggle, togglerProps]);
	return value;
}

export default useExpand;
