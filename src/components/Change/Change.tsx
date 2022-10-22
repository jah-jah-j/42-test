import React, {FC} from 'react';
import ChangeItem from "../ChangeItem/ChangeItem";
import {useAppSelector} from "../../hooks/hooks";
import {useChange} from "../../hooks/useChange";
import {useChosenProduct} from "../../hooks/useChosenProduct";
import {selectInsertedMoney} from "../../redux/selectors/products";

const Change: FC = () => {
  const insertedMoney = useAppSelector(selectInsertedMoney)
  const {cost} = useChosenProduct()
  const result = useChange(insertedMoney - cost)

  return (
    <>
      {Object.entries(result).reverse().map(([key, value]) => <ChangeItem key={key} coin={key} value={value}/>)}
    </>
  );
};

export default Change;
