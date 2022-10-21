import {ChangeEvent, FC} from "react";

interface IProps {
   name: string
   handleChange: (e: ChangeEvent<HTMLInputElement>) => void
   values: Values
   disabled: boolean
}

type Values = {
   [key: string]: string
}

const Input: FC<IProps> = ({ name, handleChange, values, disabled = false }) => {
   return (
      <input name={name} type='text'
             onChange={handleChange}
             value={values[name]}
             disabled={disabled}
             placeholder='...'>
      </input>
   );
};
export default Input;
