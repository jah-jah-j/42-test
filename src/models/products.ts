export interface IProducts {
  insertedMoney: number,
  chosenProduct: number,
  products: [] | Product[]
}

export type Product = {
  name: string,
  description: string,
  cost: number
}
