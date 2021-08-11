// COMPONENTS
import Select from "./Select";
// CUSTOM HOOKS
import { useStateManager } from "./hooks/useStateManager";

export default function StateManagerSelect(props) {
	const baseProps = useStateManager(props);

	return <Select {...baseProps} />;
}
