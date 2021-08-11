import "~/assets/css/select.css";
// PLUGINS
import PropTypes from "prop-types";
import classNames from "clsx";

export default function Select({ labelText, placeholder, value, values = [], block, onChange = () => {} }) {
	const className = classNames("select-list", { block });

	const handleChange = (e) => onChange(e.target.value);
	const handleReset = () => onChange("");

	return (
		<div className="select-container">
			{labelText && (
				<label htmlFor="select-list" className="select-label">
					{labelText}
				</label>
			)}

			<div className="select-content">
				<select className={className} value={value} onChange={handleChange}>
					<option value="" title={placeholder} hidden defaultValue>
						{placeholder}
					</option>
					{values.map(({ text, value }, index) => (
						<option key={index} value={value} title={text}>
							{text}
						</option>
					))}
				</select>

				<button className="select-btn-reset" onClick={handleReset}>
					<i className="material-icons">close</i>
				</button>
			</div>
		</div>
	);
}

Select.propTypes = {
	values: PropTypes.array.isRequired,
};
