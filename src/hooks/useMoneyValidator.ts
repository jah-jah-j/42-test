import {useAppDispatch, useAppSelector} from "./hooks";
import {selectChosenProduct, selectInsertedMoney, setInsertedMoney} from "../redux/slices/productsSlice";
import {useEffect, useState} from "react";
import {useTimeout} from "./useTimeout";
import {useCustomInputValidator} from "./useCustomInputValidator";
import {ValidatorFunc} from "../models/validator";

export const useMoneyValidator = () => {
  const insertedMoney = useAppSelector(selectInsertedMoney)
  const chosenProduct = useAppSelector(selectChosenProduct)
  const [status, setStatus] = useState('Insert money')
  const dispatch = useAppDispatch()

  const setMoneyStatus = (bank: number = insertedMoney) => {
    bank > 0 ? setStatus(`Inserted money: ${bank}₽`) : setStatus('Insert money')
  }

  const {runTimeout} = useTimeout(setMoneyStatus, 1500)

  const validator: ValidatorFunc = (value, clear) => {
    const reg = /^(50|100|200|500)$/;

    if (!reg.test(value)) {
      setStatus('Money is not accepted');
      runTimeout();
      return
    }

    const bank = +value + insertedMoney;
    dispatch(setInsertedMoney(bank))
    clear()
    setMoneyStatus(bank);
  }

  const {inputValue, onChange, onSubmit, clearInput} = useCustomInputValidator(validator)

  useEffect(() => {
    if (insertedMoney === 0 && chosenProduct === '') {
      setStatus('Insert money');
    }
  }, [insertedMoney, chosenProduct, clearInput]);

  return {onSubmit, onChange, inputValue, status}
}
