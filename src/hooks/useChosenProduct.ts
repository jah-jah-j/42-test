import {useAppSelector} from "./hooks";
import {useEffect, useState} from "react";
import {IProduct} from "../models/products";
import {selectChosenProduct, selectProducts} from "../redux/selectors/products";

export const useChosenProduct = () => {
  const chosenProduct = useAppSelector(selectChosenProduct)
  const products = useAppSelector(selectProducts)
  let [values, setValues] = useState<IProduct>({name: '', cost: 0, description: ''})

  useEffect(() => {
    if (chosenProduct !== '') {
      setValues(products[+chosenProduct])
    }
  }, [chosenProduct, products])

  return {...values}
}
