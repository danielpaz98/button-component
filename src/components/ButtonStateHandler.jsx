// HOOKS
import useButtonState from "~/hooks/useButtonState";

export default function ButtonStateHandler({ children, state }) {
	const ChildComponent = children.type;
	const childProps = children.props;
	const { updateButtonState } = useButtonState();

	const handleOnChange = (val) => {
		const value = val && val != "default" ? val : false;
		const updateState = state ? (value ? { [state]: value } : { [state]: false }) : value;
		updateButtonState(updateState);
	};

	return <ChildComponent onChange={handleOnChange} {...childProps} />;
}
