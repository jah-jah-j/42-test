import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IProducts} from "../../models/products";
import {productsAPI} from "../../api/productsAPI";

interface IState extends IProducts {
  isBank: boolean
}

const initialState: IState = {
  insertedMoney: 0,
  chosenProduct: '',
  isBank: false,
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
    },
    setIsBank: (state, action) => {
      state.isBank = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload
    })
  },
})

export const {setInsertedMoney, setChosenProduct, setIsBank} = productsSlice.actions

export default productsSlice.reducer
