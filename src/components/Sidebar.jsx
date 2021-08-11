import "~/assets/css/sidebar.css";
import { useState } from "react";
// PLUGINS
import classNames from "clsx";

export default function Sidebar() {
	const [state, setState] = useState({ show: false, icon: "menu" });
	const className = classNames("main-sidebar", { show: state.show });

	const toggleSidebar = () => {
		const toggleShow = !state.show;
		const toggleIcon = toggleShow ? "close" : "menu";
		setState({ icon: toggleIcon, show: toggleShow });
	};

	return (
		<>
			<button className="btn-open-sidebar" onClick={toggleSidebar}>
				<i className="material-icons">{state.icon}</i>
			</button>

			<div className={className}>
				<div className="main-logo">
					<a href="https://devchallenges.io/" target="_blank">
						<span>Dev</span>challenges.io
					</a>
				</div>

				<ul className="sidebar-menu">
					<li className="sidebar-item">
						<a>Colors</a>
					</li>

					<li className="sidebar-item">
						<a>Typography</a>
					</li>

					<li className="sidebar-item">
						<a>Spaces</a>
					</li>

					<li className="sidebar-item active">
						<a>Buttons</a>
					</li>

					<li className="sidebar-item">
						<a>Inputs</a>
					</li>

					<li className="sidebar-item">
						<a>Grid</a>
					</li>
				</ul>
			</div>

			<div className="overlay" onClick={toggleSidebar}></div>
		</>
	);
}
