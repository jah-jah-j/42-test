import React, {FC} from 'react';
import styles from "../Output/Output.module.scss";
import {useAppDispatch} from "../../hooks/hooks";
import {setChosenProduct, setInsertedMoney} from "../../redux/slices/productsSlice";
import {useChosenProduct} from "../../hooks/useChosenProduct";

const ProductResult: FC = () => {
  const dispatch = useAppDispatch()
  const {name, cost, description} = useChosenProduct()

  const clear = () => {
    dispatch(setInsertedMoney(0))
    dispatch(setChosenProduct(''))
  };

  return (
    <div className={styles.product} onClick={clear}>
      <h3>{name}</h3>
      <p>{description}</p>
      <span>{cost}₽</span>
    </div>
  );
};

export default ProductResult;
