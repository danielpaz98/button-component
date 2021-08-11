import { createContext, useState } from "react";

const ButtonContext = createContext({});

export function ButtonContextProvider({ children }) {
	const [buttonState, setButtonState] = useState({});

	return <ButtonContext.Provider value={{ buttonState, setButtonState }}>{children}</ButtonContext.Provider>;
}

export default ButtonContext;
