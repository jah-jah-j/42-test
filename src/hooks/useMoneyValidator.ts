import {useAppDispatch, useAppSelector} from "./hooks";
import {setInsertedMoney, setIsBank} from "../redux/slices/productsSlice";
import {useEffect, useState} from "react";
import {useTimeout} from "./useTimeout";
import {useCustomInputValidator} from "./useCustomInputValidator";
import {selectChosenProduct, selectInsertedMoney} from "../redux/selectors/products";

export const useMoneyValidator = () => {
  const insertedMoney = useAppSelector(selectInsertedMoney)
  const chosenProduct = useAppSelector(selectChosenProduct)
  const [status, setStatus] = useState('Insert money')
  const {inputValue, onChange, onSubmit, clearInput} = useCustomInputValidator(validator)
  const dispatch = useAppDispatch()

  const setMoneyStatus = (bank: number = insertedMoney) => {
    bank > 0 ? setStatus(`Inserted money: ${bank}₽`) : setStatus('Insert money')
  }

  const {runTimeout} = useTimeout(setMoneyStatus, 1500)

  function validator(value: string, clear: () => void) {
    const reg = /^(50|100|200|500)$/;

    if (!reg.test(value)) {
      setStatus('Money is not accepted');
      runTimeout();
      return
    }

    const bank = +value + insertedMoney;
    dispatch(setInsertedMoney(bank))
    dispatch(setIsBank(true))
    setMoneyStatus(bank);
    clear()
  }


  useEffect(() => {
    if (insertedMoney === 0 && chosenProduct === '') {
      setStatus('Insert money');
    }
  }, [insertedMoney, chosenProduct, clearInput]);

  return {onSubmit, onChange, inputValue, status}
}
