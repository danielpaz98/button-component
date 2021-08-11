import { useContext } from "react";
// CONTEXTS
import ButtonContext from "~/context/ButtonContext";

export default function useButtonState() {
	const { buttonState, setButtonState } = useContext(ButtonContext);

	const updateButtonState = (state) => {
		setButtonState((prevState) => ({ ...prevState, ...state }));
	};

	return { buttonState, updateButtonState };
}
