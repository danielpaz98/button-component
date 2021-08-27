import "~/assets/css/range-slider.css";
// PLUGINS
import PropTypes from "prop-types";

export default function RangeSlider({ labelText, defaultValue, values, value, max, onChange = () => {} }) {
	const rangeValue = value?.value || values[0] || "?";
	const inputValue = values.findIndex((value) => value === rangeValue);

	const handleOnChange = (e) => onChange({ text: labelText, value: values[e.target.value] });
	const handleReset = (e) => onChange({ text: labelText, value: "" });

	return (
		<div className="range-slider">
			{labelText && <label className="range-label">{labelText}</label>}

			<div className="range-content">
				<input className="range-input" type="range" min="0" max={max} value={inputValue} onChange={handleOnChange} />

				<div className="range-value">
					<span>{rangeValue}</span>
				</div>
			</div>

			<button className="range-btn-reset" onClick={handleReset}>
				<i className="material-icons">close</i>
			</button>
		</div>
	);
}

RangeSlider.propTypes = {
	values: PropTypes.array.isRequired,
};
