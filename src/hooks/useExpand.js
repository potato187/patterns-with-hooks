import React, { useCallback, useMemo, useState } from "react";

function useExpand() {
	const [expand, setExpand] = useState(false);
	const toggle = useCallback(() => setExpand((prevState) => !prevState), []);
	const value = useMemo(() => ({ expand, toggle }), [expand, toggle]);

	return value;
}

export default useExpand;
