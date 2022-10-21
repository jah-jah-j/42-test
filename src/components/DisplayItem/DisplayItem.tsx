import React from 'react';
import styles from "../Display/Display.module.scss";
import {useAppSelector} from "../../hooks/hooks";
import {selectInsertedMoney} from "../../redux/slices/productsSlice";

interface IProps {
  name: string
  cost: number
  description: string
  id: number
}

const DisplayItem = ({name, cost, description, id}: IProps) => {
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
