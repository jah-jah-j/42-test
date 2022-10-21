import db from '../../db.json';
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {IProducts} from "../../models/products";

const initialState: IProducts = {
   insertedMoney: 0,
   chosenProduct: 0,
   products: []
};

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, thunkAPI) => {
       return await productsAPI.then((res: any) => res.products)
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
         state.products = action.payload.products
      })
   },
})

export const selectProducts = (state: RootState) => state.products.products
export const selectInsertedMoney = (state: RootState) => state.products.insertedMoney
export const selectChosenProduct = (state: RootState) => state.products.chosenProduct

export const {setInsertedMoney, setChosenProduct} = productsSlice.actions

export default productsSlice.reducer

const productsAPI = new Promise((resolve) => {
   resolve(db);
});
