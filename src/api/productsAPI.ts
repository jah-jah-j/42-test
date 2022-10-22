import db from "../db.json";
import {IResponse} from "../models/products";

export const productsAPI = new Promise((resolve: (value: IResponse) => void) => {
  resolve(db);
});
