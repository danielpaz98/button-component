// COMPONENTS
import Button from "~/components/Button";
import CheckboxList from "~/components/CheckboxList";
import Checkbox from "~/components/Checkbox";
import Select from "~/components/Select";
import RangeSlider from "~/components/RangeSlider";
import ButtonStateHandler from "~/components/ButtonStateHandler";
import ComponentSyntaxHighlighter from "~/components/ComponentSyntaxHighlighter";
// HOOKS
import useButtonState from "~/hooks/useButtonState";
// STATIC DATA
import { checkboxOptions, iconOptions, colorOptions, variantOptions, sizeOptions } from "~/staticData";

export default function SectionPreview() {
	const { buttonState } = useButtonState();
	const ButtonComponent = <Button text="Click me" {...buttonState} />;

	return (
		<section className="section-preview">
			<div className="section-preview-body">
				<div className="section-preview-button">
					<h3 className="title-section">Preview</h3>
					<div className="button-container">{ButtonComponent}</div>
				</div>

				<div className="section-preview-options">
					<h3 className="title-section">Options</h3>

					<div className="control-options">
						<ButtonStateHandler>
							<CheckboxList values={checkboxOptions} />
						</ButtonStateHandler>

						<div className="option-group">
							<ButtonStateHandler state="icon">
								<Select placeholder="select a icon..." labelText="Icon:" values={iconOptions} block />
							</ButtonStateHandler>

							<ButtonStateHandler>
								<Checkbox labelText="Right" value="icon-right" />
							</ButtonStateHandler>
						</div>

						<ButtonStateHandler state="color">
							<Select placeholder="select a color..." labelText="Color:" values={colorOptions} block />
						</ButtonStateHandler>

						<ButtonStateHandler state="variant">
							<Select placeholder="select a variant..." labelText="Variant:" values={variantOptions} block />
						</ButtonStateHandler>

						<ButtonStateHandler state="size">
							<RangeSlider labelText="Size:" values={sizeOptions} />
						</ButtonStateHandler>
					</div>
				</div>
			</div>

			<div className="section-preview-footer">
				<ComponentSyntaxHighlighter component={ButtonComponent} />
			</div>
		</section>
	);
}
