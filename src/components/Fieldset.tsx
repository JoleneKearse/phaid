import Checkbox from './Checkbox';
import { useTypes } from '../context/TypesContext';

const Fieldset = () => {
  const types = useTypes();

  return (
    <fieldset className="text-brand-200 text-lg border-accent-blue border-2 p-8 rounded-lg bg-brand-900 flex justify-center gap-10 flex-wrap">
      <legend className="text-xl font-semibold text-brand-300">Choose your image processing</legend>
      {types.map(type => (
        <Checkbox key={type} type={type} />
      ))}
    </fieldset>
  );
};

export default Fieldset;
