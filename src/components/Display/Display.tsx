import React, {useId} from "react";
import styles from "./Display.module.scss";
import {useAppSelector} from "../../hooks/hooks";
import {selectProducts} from "../../redux/slices/productsSlice";
import DisplayItem from "../DisplayItem/DisplayItem";

const Display = () => {
    const products = useAppSelector(selectProducts)
    const id = useId()

    return (
        <section className={styles.display}>
            <ul className={styles.list_item}>
                {
                    products.map((product, index) => (
                        <DisplayItem key={`${id}_${index}`} {...product} id={index}/>
                    ))
                }
            </ul>
        </section>
    );
};

export default Display;
