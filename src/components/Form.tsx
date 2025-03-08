import Button from "./Button";
import DropArea from "./DropArea";
import Fieldset from "./Fieldset";

const from = () => {
	return (
		<form className="space-y-12">
			<Fieldset />
      <DropArea />
			<Button />
		</form>
	);
};

export default from;
