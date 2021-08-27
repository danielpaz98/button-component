import "~/assets/css/button.css";
// PLUGINS
import classNames from "clsx";

export default function Button(props) {
	const { text = "Click me", color, variant, size, icon, ...staticStates } = props;
	const { disabled } = staticStates;

	const classNameBtn = classNames("btn", {
		[`btn-${color}`]: color && !disabled,
		[`btn-${variant}`]: variant,
		[`size-${size}`]: size,
		[`icon-${icon}`]: icon,
		...staticStates,
	});

	const classNameBtnIcon = classNames("material-icons", { show: Boolean(icon) });

	return (
		<button type="button" className={classNameBtn} disabled={disabled}>
			<span>{text}</span>
			<i className={classNameBtnIcon}>{icon}</i>
		</button>
	);
}

Button.displayName = "Button";
