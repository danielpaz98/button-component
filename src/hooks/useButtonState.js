import { useContext } from "react";
// CONTEXTS
import ButtonContext from "~/context/ButtonContext";

export default function useButtonState() {
	const { buttonState, setButtonState } = useContext(ButtonContext);

	const updateButtonState = ({ key, value }) => {
		const updateState = value ? { [key]: value } : delete buttonState[key];
		setButtonState((prevState) => ({ ...prevState, ...updateState }));
	};

	return { buttonState, updateButtonState };
}
