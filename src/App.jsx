// COMPONENTS
import Sidebar from "~/components/Sidebar";
// VIEWS
import SectionPreview from "~/views/SectionPreview";
// PROVIDER CONTEXTS
import { ButtonContextProvider } from "~/context/ButtonContext";

export default function App() {
	return (
		<main>
			<Sidebar />

			<div className="container">
				<ButtonContextProvider>
					<SectionPreview />
				</ButtonContextProvider>
			</div>
		</main>
	);
}
