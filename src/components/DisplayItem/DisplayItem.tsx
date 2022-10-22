import React, {FC} from 'react';
import styles from "../Display/Display.module.scss";
import {useAppSelector} from "../../hooks/hooks";
import {selectInsertedMoney} from "../../redux/slices/productsSlice";
import {IProduct} from "../../models/products";

interface IProps extends IProduct {
  id: number
}

const DisplayItem: FC<IProps> = ({name, cost, description, id}) => {
  const insertedMoney = useAppSelector(selectInsertedMoney)

  return (
    <li className={`${styles.item} ${insertedMoney >= cost && styles.item_active}`}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.price}>
        <span className={styles.cost}>{cost}₽</span>
        <span className={styles.id}>{id + 1}</span>
      </div>
    </li>
  );
};

export default DisplayItem;
