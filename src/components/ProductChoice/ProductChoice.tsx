import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import Input from "../Input/Input";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {
   selectChosenProduct,
   selectInsertedMoney,
   selectProducts,
   setChosenProduct
} from "../../redux/slices/productsSlice";
import {useTimeout} from "../../hooks/useTimeout";

interface IValues {
   [key: string]: string
}

const ProductChoice = () => {
   const insertedMoney = useAppSelector(selectInsertedMoney)
   const chosenProduct = useAppSelector(selectChosenProduct)
   const products = useAppSelector(selectProducts)
   const dispatch = useAppDispatch()

   const [status, setStatus] = useState('/');
   const [values, setValues] = useState<IValues>({ product: '' });

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const name = e.target.name;
      setValues({ [name]: value });
   };

   const {runTimeout} = useTimeout(() => setStatus('Choose product'), 1500)

   const setProductStatus = (status: string) => {
      setStatus(status);
      runTimeout()
   };

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const podVal = +values.product;
      if (podVal && (podVal > 0 && podVal <= products.length)) {

         if (products[podVal - 1].cost <= insertedMoney) {
            dispatch(setChosenProduct(podVal))
            setStatus('Success')
            setValues({ product: '' })
         } else {
            setProductStatus('Not enough money')
         }

      } else {
         setProductStatus('Enter correct product number')
      }
   }

   useEffect(() => {
      !insertedMoney ? setStatus('/') : setStatus('Choose product');
   }, [insertedMoney]);

   return (
      <form onSubmit={handleSubmit}>
         <label>{status}</label>
         <Input name='product' handleChange={handleChange} values={values}
                disabled={!(insertedMoney && !chosenProduct)}/>
      </form>
   );
};
export default ProductChoice;
