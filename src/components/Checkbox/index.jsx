// COMPONENTS
import Checkbox from "./Checkbox";
// CUSTOM HOOKS
import { useStateManager } from "./hooks/useStateManager";

export default function StateManagerCheckbox(props) {
	const baseProps = useStateManager(props);

	return <Checkbox {...baseProps} />;
}
