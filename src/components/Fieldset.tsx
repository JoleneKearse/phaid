import Checkbox from "./Checkbox";

const Fieldset = () => {
	return (
		<fieldset className="text-brand-200 text-lg border-accent-blue border-2 p-8 rounded-lg bg-brand-900 flex justify-center gap-10 flex-wrap">
			<legend className="text-xl font-semibold text-brand-300">Choose your image processing</legend>
      <Checkbox type="webp" />
      <Checkbox type="rmBackground" />
      <Checkbox type="addAltText" />
		</fieldset>
	);
};

export default Fieldset;
