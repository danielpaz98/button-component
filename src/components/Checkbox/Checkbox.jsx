import "~/assets/css/checkbox.css";
// PLUGINS
import PropTypes from "prop-types";

export default function Checkbox({ labelText, checked, value, onChange = () => {} }) {
	const checkboxValue = Object.keys(value).length ? Object.keys(value)[0] : "";

	const handleOnChange = (e) => onChange({ [e.target.value]: e.target.checked });

	return (
		<div className="checkbox-option">
			<input
				type="checkbox"
				className="input-checkbox"
				id={checkboxValue}
				value={checkboxValue}
				checked={checked}
				onChange={handleOnChange}
			/>
			{labelText && <label htmlFor={checkboxValue}>{labelText}</label>}
		</div>
	);
}

Checkbox.propTypes = {
	value: PropTypes.any.isRequired,
};
