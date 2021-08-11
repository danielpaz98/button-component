import { StrictMode } from "react";
import { render } from "react-dom";
import "~/assets/css/main.css";
import App from "./App";

const app = document.getElementById("app");

render(
	<StrictMode>
		<App />
	</StrictMode>,
	app,
);
