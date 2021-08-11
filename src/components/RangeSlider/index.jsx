// COMPONENTS
import RangeSlider from "./RangeSlider";
// CUSTOM HOOKS
import { useStateManager } from "./hooks";

export default function StateManagerRangeSlider(props) {
	const baseProps = useStateManager(props);

	return <RangeSlider {...baseProps} />;
}
