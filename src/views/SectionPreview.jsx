// COMPONENTS
import Button from "~/components/Button";
import CheckboxList from "~/components/CheckboxList";
import Checkbox from "~/components/Checkbox";
import Select from "~/components/Select";
import RangeSlider from "~/components/RangeSlider";
import ComponentSyntaxHighlighter from "~/components/ComponentSyntaxHighlighter";
// HOOKS
import useButtonState from "~/hooks/useButtonState";
// STATIC DATA
import { checkboxOptions, iconOptions, colorOptions, variantOptions, sizeOptions } from "~/staticData";

export default function SectionPreview() {
	const { buttonState, updateButtonState } = useButtonState();
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
						<CheckboxList
							values={checkboxOptions}
							onChange={(e) => updateButtonState({ key: e.value, value: e.checked })}
						/>

						<div className="option-group">
							<Select
								placeholder="select a icon..."
								labelText="Icon:"
								values={iconOptions}
								block
								onChange={(e) => updateButtonState({ key: "icon", value: e.value })}
							/>

							<Checkbox
								labelText="Right"
								value="icon-right"
								onChange={(e) => updateButtonState({ key: e.value, value: e.checked })}
							/>
						</div>

						<Select
							placeholder="select a color..."
							labelText="Color:"
							values={colorOptions}
							block
							onChange={(e) => updateButtonState({ key: "color", value: e.value })}
						/>

						<Select
							placeholder="select a variant..."
							labelText="Variant:"
							values={variantOptions}
							block
							onChange={(e) => updateButtonState({ key: "variant", value: e.value })}
						/>

						<RangeSlider
							labelText="Size:"
							values={sizeOptions}
							onChange={(e) => updateButtonState({ key: "size", value: e.value })}
						/>
					</div>
				</div>
			</div>

			<div className="section-preview-footer">
				<ComponentSyntaxHighlighter component={ButtonComponent} />
			</div>
		</section>
	);
}
