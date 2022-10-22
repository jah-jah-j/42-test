import React, {FC} from "react";
import styles from "./Display.module.scss";
import {useAppSelector} from "../../hooks/hooks";
import {selectProducts} from "../../redux/slices/productsSlice";
import DisplayItem from "../DisplayItem/DisplayItem";

const Display: FC = () => {
  const products = useAppSelector(selectProducts)

  return (
    <section className={styles.display}>
      <ul className={styles.list_item}>
        {products.map((product, index) => <DisplayItem key={product.name} {...product} id={index}/>)}
      </ul>
    </section>
  );
};

export default Display;
