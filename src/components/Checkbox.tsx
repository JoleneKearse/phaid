type CheckboxProps = {
  type: string;
}

const Checkbox = ({ type }: CheckboxProps) => {
  let labelText = "";
  switch(type) {
    case "webp":
      labelText = "Convert to webp";
      break;
    case "rmBackground":
      labelText = "Remove background";
      break;
    case "addAltText":
      labelText = "Add alt text";
      break;
    default:
      labelText = "";
  }

	return (
		<div className="flex gap-4">
			<input
				type="checkbox"
				name="photoOptions"
				id={type}
        value={type}
			/>
      <label htmlFor={type}>{labelText}</label>
		</div>
	);
};

export default Checkbox;
