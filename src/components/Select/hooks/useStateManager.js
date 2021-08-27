import { useState, useCallback } from "react";

export function useStateManager({ defaultValue, labelText, value: propsValue, onChange: propsOnChange, ...restProps }) {
	const initialValue = defaultValue ? { text: labelText, value: defaultValue } : propsValue;
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
		defaultValue,
		labelText,
		value: stateValue,
		onChange,
	};
}
