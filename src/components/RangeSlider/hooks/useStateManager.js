import { useState, useCallback } from "react";

export function useStateManager({ onChange: propsOnChange, value: propsValue, values = [], ...restSelectProps }) {
	const initialValue = values.find((value) => value === propsValue) || values[0] || "?";
	const max = values.length - 1;

	const [value, setValue] = useState(initialValue);

	const onChange = useCallback(
		(value) => {
			if (typeof propsOnChange === "function") {
				propsOnChange(value);
			}
			setValue(value);
		},
		[propsOnChange]
	);

	return {
		...restSelectProps,
		values,
		value,
		max,
		onChange,
	};
}
