import "~/assets/css/checkbox.css";
// PLUGINS
import PropTypes from "prop-types";

export default function Checkbox({ labelText, checked, value, onChange = () => {} }) {
	const inputValue = value?.value;

	const handleOnChange = (e) => onChange({ text: labelText, value: e.target.value, checked: e.target.checked });

	return (
		<div className="checkbox-option">
			<input
				type="checkbox"
				className="input-checkbox"
				id={inputValue}
				value={inputValue}
				checked={checked}
				onChange={handleOnChange}
			/>
			{labelText && <label htmlFor={inputValue}>{labelText}</label>}
		</div>
	);
}

Checkbox.propTypes = {
	value: PropTypes.any.isRequired,
};
