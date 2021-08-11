import { useState, useCallback } from "react";

export function useStateManager({ onChange: propsOnChange, value: propsValue, checked = false, ...restSelectProps }) {
	const initialValue = typeof propsValue === "string" ? { [propsValue]: checked } : {};
	const [stateValue, setStateValue] = useState(initialValue);
	const checkedValue = typeof propsValue === "string" ? stateValue[propsValue] : false;

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
		checked: checkedValue,
	};
}
