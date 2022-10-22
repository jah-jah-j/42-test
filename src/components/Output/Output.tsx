import React, {FC} from "react";
import styles from "./Output.module.scss";
import Change from "../Change/Change";
import ProductResult from "../ProductResult/ProductResult";
import {useAppSelector} from "../../hooks/hooks";
import {selectChosenProduct} from "../../redux/selectors/products";

const Output: FC = () => {
  const chosenProduct = useAppSelector(selectChosenProduct)

  return (
    <div className={styles.output}>
      <div className={styles.change_output}>
        {chosenProduct !== '' && <Change/>}
      </div>
      <div className={styles.product_block}>
        {chosenProduct !== '' && <ProductResult/>}
      </div>
    </div>
  );
};
export default Output;
