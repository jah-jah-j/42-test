import React, {FC} from "react";
import Input from "../Input/Input";
import {useAppSelector} from "../../hooks/hooks";
import {useMoneyValidator} from "../../hooks/useMoneyValidator";
import {selectChosenProduct} from "../../redux/selectors/products";

const ReceiverMoney: FC = () => {
  const chosenProduct = useAppSelector(selectChosenProduct)
  const {onSubmit, onChange, inputValue, status} = useMoneyValidator()

  return (
    <form onSubmit={onSubmit}>
      <label>{status}</label>
      <Input name='money' onChange={onChange} value={inputValue} isDisabled={chosenProduct !== ''}/>
      <p>Available banknotes: 50, 100, 200 or 500 ₽. The machine gives change in 1, 2, 5 and 10 ₽ coins.</p>
    </form>
  );
};
export default ReceiverMoney;
