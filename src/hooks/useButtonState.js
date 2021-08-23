import { useContext } from "react";
// CONTEXTS
import ButtonContext from "~/context/ButtonContext";

export default function useButtonState() {
	const { buttonState, setButtonState } = useContext(ButtonContext);

	const updateButtonState = (state, value) => {
		value = value && value != "default" ? value : false;
		const updateState = state ? (value ? { [state]: value } : { [state]: false }) : value;
		setButtonState((prevState) => ({ ...prevState, ...updateState }));
	};

	return { buttonState, updateButtonState };
}
