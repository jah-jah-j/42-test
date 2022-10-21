import React from "react";
import styles from "./Dashboard.module.scss";
import ReceiverMoney from "../ReceiverMoney/ReceiverMoney";
import ProductChoice from "../ProductChoice/ProductChoice";
import Output from "../Output/Output";

const Dashboard = () => {
    return (
        <section className={styles.dashboard}>
            <ReceiverMoney />
            <ProductChoice />
            <Output />
        </section>
    );
};

export default Dashboard;
