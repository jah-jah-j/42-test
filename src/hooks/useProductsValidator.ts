import {useAppDispatch, useAppSelector} from "./hooks";
import {setChosenProduct, setIsBank} from "../redux/slices/productsSlice";
import {useEffect, useState} from "react";
import {useTimeout} from "./useTimeout";
import {useCustomInputValidator} from "./useCustomInputValidator";
import {selectChosenProduct, selectInsertedMoney, selectProducts} from "../redux/selectors/products";

export const useProductsValidator = () => {
  const chosenProduct = useAppSelector(selectChosenProduct)
  const insertedMoney = useAppSelector(selectInsertedMoney)
  const products = useAppSelector(selectProducts)
  const [status, setStatus] = useState<string>('/')
  const dispatch = useAppDispatch()
  const {runTimeout} = useTimeout(() => setStatus('Choose product'), 1500)
  const {inputValue, onChange, onSubmit} = useCustomInputValidator(validator)

  const onSubmitInvalid = (status: string) => {
    setStatus(status)
    runTimeout()
  }

  function validator(id: string, clear: () => void) {
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
      dispatch(setIsBank(false))
      setStatus('Success')
      clear()
    }
  }

  useEffect(() => {
    if (insertedMoney > 0) {
      setStatus('Choose product')
    }
    if (insertedMoney === 0) {
      setStatus('/')
    }
  }, [chosenProduct, insertedMoney]);

  return {onSubmit, onChange, inputValue, status}
}
