// HOOKS
import useButtonState from "~/hooks/useButtonState";

export default function ButtonStateHandler({ children, state }) {
	const ChildComponent = children.type;
	const childProps = children.props;
	const { updateButtonState } = useButtonState();

	const handleOnChange = (value) => updateButtonState(state, value);

	return <ChildComponent onChange={handleOnChange} {...childProps} />;
}
