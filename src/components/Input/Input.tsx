import {ChangeEvent, FC} from "react";

interface IProps {
  name: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
  isDisabled: boolean
}

const Input: FC<IProps> = ({name, onChange, value, isDisabled = false}) => {
  return (
    <input name={name} type='text'
           onChange={onChange}
           value={value}
           disabled={isDisabled}
           placeholder='...'/>
  );
};
export default Input;
