import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import Input from "../Input/Input";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {selectChosenProduct, selectInsertedMoney, setInsertedMoney} from "../../redux/slices/productsSlice";
import {useTimeout} from "../../hooks/useTimeout";

interface IValues {
   [key: string]: string
}

const ReceiverMoney = () => {
   const insertedMoney = useAppSelector(selectInsertedMoney)
   const chosenProduct = useAppSelector(selectChosenProduct)
   const dispatch = useAppDispatch()

   const [status, setStatus] = useState('Insert money')
   const [values, setValues] = useState<IValues>({ money: '' })

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const name = e.target.name;
      setValues({ [name]: value });
   };

   const setMoneyStatus = (newAmount = insertedMoney) => {
      newAmount ? setStatus(`Inserted money: ${newAmount}₽`) : setStatus('Insert money');
   };

   const {runTimeout} = useTimeout(setMoneyStatus, 1500)

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const reg = /^(50|100|200|500)$/;
      if (reg.test(values.money)) {
         const newAmount = insertedMoney + +values.money;
         dispatch(setInsertedMoney(newAmount))
         setMoneyStatus(newAmount);
      } else {
         setStatus('Money is not accepted');
         runTimeout();
      }
   }

   useEffect(() => {
      if (!insertedMoney && !chosenProduct) {
         setStatus('Insert money');
         setValues({ money: '' });
      }
   }, [insertedMoney, chosenProduct]);

   return (
      <form onSubmit={handleSubmit}>
         <label>{status}</label>
         <Input name='money' handleChange={handleChange} values={values} disabled={!!chosenProduct}/>
         <p>Available banknotes: 50, 100, 200 or 500 ₽. The machine gives change in 1, 2, 5 and 10 ₽ coins.</p>
      </form>
   );
};
export default ReceiverMoney;
