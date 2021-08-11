import { useState, useCallback } from "react";

export function useStateManager({ onChange: propsOnChange, value: propsValue, ...restSelectProps }) {
	const initialValue = propsValue ? propsValue : "";
	const [stateValue, setStateValue] = useState(initialValue);

	const onChange = useCallback(
		(value) => {
			if (typeof propsOnChange === "function") {
				propsOnChange(value);
			}
			setStateValue(value);
		},
		[propsOnChange]
	);

	return {
		...restSelectProps,
		onChange,
		value: stateValue,
	};
}
