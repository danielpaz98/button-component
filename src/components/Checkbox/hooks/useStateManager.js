import { useState, useCallback } from "react";

export function useStateManager({ labelText, checked, value: propsValue, onChange: propsOnChange, ...restProps }) {
	const initialChecked = checked === "" || checked || false;
	const initialValue = propsValue ? { text: labelText, value: propsValue, checked: initialChecked } : propsValue;

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
		labelText,
		value: stateValue,
		checked: stateValue.checked,
		onChange,
	};
}
