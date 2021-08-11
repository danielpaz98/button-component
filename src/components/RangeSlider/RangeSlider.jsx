import "~/assets/css/range-slider.css";
// PLUGINS
import PropTypes from "prop-types";

export default function RangeSlider({ labelText, values, value, max, onChange = () => {} }) {
	const rangeValue = (value && values.findIndex((item) => item === value)) || 0;

	const handleOnChange = (e) => onChange(values[e.target.value]);

	return (
		<div className="range-slider">
			{labelText && <label className="range-label">{labelText}</label>}

			<div className="range-content">
				<input className="range-input" type="range" min="0" max={max} value={rangeValue} onChange={handleOnChange} />

				<div className="range-value">
					<span>{value}</span>
				</div>
			</div>
		</div>
	);
}

RangeSlider.propTypes = {
	values: PropTypes.array.isRequired,
};
