// PLUGINS
import PropTypes from "prop-types";
// COMPONENTS
import Checkbox from "~/components/Checkbox";

export default function CheckboxList({ values, onChange = () => {} }) {
	return (
		<div className="checkbox-list">
			{values.map(({ text, value }, index) => (
				<Checkbox key={index} labelText={text} value={value} onChange={onChange} />
			))}
		</div>
	);
}

CheckboxList.propTypes = {
	values: PropTypes.array.isRequired,
};
