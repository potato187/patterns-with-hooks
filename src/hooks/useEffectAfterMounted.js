import React, { useEffect, useRef } from "react";

function useEffectAfterMounted(callback, deps) {
	const componentJustMounted = useRef(true);

	useEffect(() => {
		if (!componentJustMounted.current) {
			return callback();
		}
		componentJustMounted.current = false;
	}, deps);
}

export default useEffectAfterMounted;
