import {RootState} from "../store";

export const selectProducts = (state: RootState) => state.products.products
export const selectInsertedMoney = (state: RootState) => state.products.insertedMoney
export const selectChosenProduct = (state: RootState) => state.products.chosenProduct
export const selectIsBank = (state: RootState) => state.products.isBank
