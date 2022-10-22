import React, {FC} from "react";
import Input from "../Input/Input";
import {useAppSelector} from "../../hooks/hooks";
import {selectChosenProduct, selectInsertedMoney} from "../../redux/slices/productsSlice";
import {useProductsValidator} from "../../hooks/useProductsValidator";

const ProductChoice: FC = () => {
  const chosenProduct = useAppSelector(selectChosenProduct)
  const insertedMoney = useAppSelector(selectInsertedMoney)
  const {onSubmit, onChange, inputValue, status} = useProductsValidator()

  return (
    <form onSubmit={onSubmit}>
      <label>{status}</label>
      <Input name='product'
             onChange={onChange}
             value={inputValue}
             isDisabled={ insertedMoney <= 0 && chosenProduct === ''  }
      />
    </form>
  );
};
export default ProductChoice;
