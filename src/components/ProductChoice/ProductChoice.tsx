import React, {FC} from "react";
import Input from "../Input/Input";
import {useProductsValidator} from "../../hooks/useProductsValidator";
import {useAppSelector} from "../../hooks/hooks";
import {selectIsBank} from "../../redux/selectors/products";

const ProductChoice: FC = () => {
  const {onSubmit, onChange, inputValue, status} = useProductsValidator()
  const isBank = useAppSelector(selectIsBank)

  return (
    <form onSubmit={onSubmit}>
      <label>{status}</label>
      <Input name='product'
             onChange={ onChange }
             value={ inputValue }
             isDisabled={!isBank}
      />
    </form>
  );
};

export default ProductChoice;
