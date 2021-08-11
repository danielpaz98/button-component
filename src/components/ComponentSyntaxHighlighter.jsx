import "~/assets/css/syntax-highlighter.css";
import { useState, useEffect, isValidElement } from "react";
// PLUGINS
import SyntaxHighlighter from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CopyToClipboard } from "react-copy-to-clipboard";
import reactElementToJSXString from "react-element-to-jsx-string";
import PropTypes from "prop-types";

export default function ComponentSyntaxHighlighter({ component }) {
	const [state, setState] = useState({ copied: false, icon: "content_copy", title: "copy to clipboard" });
	const codeString = isValidElement(component) ? reactElementToJSXString(component) : "<div></div>";

	const handleOnCopy = () => {
		if (!state.copied) {
			setState({ copied: true, icon: "content_paste", title: "copied!" });
		}
		setTimeout(() => setState({ ...state, copied: false }), 2000);
	};

	return (
		<div className="syntax-highlighter">
			<CopyToClipboard onCopy={handleOnCopy} text={codeString}>
				<button className="copy-button" title={state.title}>
					<i className="material-icons">{state.icon}</i>
				</button>
			</CopyToClipboard>

			<SyntaxHighlighter children={codeString} customStyle={{ padding: "1rem" }} language="markdown" style={nord} />
		</div>
	);
}

ComponentSyntaxHighlighter.propTypes = {
	component: PropTypes.element.isRequired,
};
