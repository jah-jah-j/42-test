import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {IProducts} from "../../models/products";
import {productsAPI} from "../../api/productsAPI";

const initialState: IProducts = {
  insertedMoney: 0,
  chosenProduct: '',
  products: []
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    return await productsAPI.then((res) => res.products)
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setInsertedMoney: (state, action) => {
      state.insertedMoney = action.payload
    },
    setChosenProduct: (state, action) => {
      state.chosenProduct = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload
    })
  },
})

export const selectProducts = (state: RootState) => state.products.products
export const selectInsertedMoney = (state: RootState) => state.products.insertedMoney
export const selectChosenProduct = (state: RootState) => state.products.chosenProduct

export const {setInsertedMoney, setChosenProduct} = productsSlice.actions

export default productsSlice.reducer
