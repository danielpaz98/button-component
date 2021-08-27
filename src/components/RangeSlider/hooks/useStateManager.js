import { useState, useCallback } from "react";

export function useStateManager({
	defaultValue,
	labelText,
	value: propsValue,
	values = [],
	onChange: propsOnChange,
	...restProps
}) {
	const initialValue = defaultValue ? { text: labelText, value: defaultValue } : propsValue;
	const max = values.length - 1;

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
		...restProps,
		values,
		defaultValue,
		labelText,
		value: stateValue,
		max,
		onChange,
	};
}
