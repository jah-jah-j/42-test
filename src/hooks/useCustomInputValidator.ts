import {ChangeEvent, FormEvent, useState} from "react";
import {ValidatorFunc} from "../models/validator";

export const useCustomInputValidator = (validator: ValidatorFunc) => {
  const [inputValue, setInputValue] = useState<string>('')
  const onChange = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    validator(inputValue, clearInput)
  }
  const clearInput = () => setInputValue('')

  return {inputValue, onChange, onSubmit, clearInput}
}
