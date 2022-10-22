import {useAppDispatch, useAppSelector} from "./hooks";
import {selectInsertedMoney, selectProducts, setChosenProduct} from "../redux/slices/productsSlice";
import {useEffect, useState} from "react";
import {useTimeout} from "./useTimeout";
import {useCustomInputValidator} from "./useCustomInputValidator";
import {ValidatorFunc} from "../models/validator";

export const useProductsValidator = () => {
  const insertedMoney = useAppSelector(selectInsertedMoney)
  const products = useAppSelector(selectProducts)
  const [status, setStatus] = useState<string>('/')
  const dispatch = useAppDispatch()
  const {runTimeout} = useTimeout(() => setStatus('Choose product'), 1500)

  const onSubmitInvalid = (status: string) => {
    setStatus(status)
    runTimeout()
  }

  const validator: ValidatorFunc = (id, clear) => {
    const productId = +id - 1

    if (id === '' || !isFinite(productId) || productId >= products.length) {
      onSubmitInvalid('Enter correct product number')
      return
    }

    if (products[productId].cost > insertedMoney) {
      onSubmitInvalid('Not enough money')
      return;
    }

    if (products[productId].cost <= insertedMoney) {
      dispatch(setChosenProduct(productId))
      setStatus('Success')
      clear()
    }
  }

  const {inputValue, onChange, onSubmit} = useCustomInputValidator(validator)

  useEffect(() => {
    insertedMoney === 0 ? setStatus('/') : setStatus('Choose product');
  }, [insertedMoney]);

  return {onSubmit, onChange, inputValue, status}
}
