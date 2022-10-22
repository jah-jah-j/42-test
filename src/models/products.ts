export interface IResponse {
  products: IProduct[]
}

export interface IProducts {
  insertedMoney: number
  chosenProduct: string
  products: [] | IProduct[]
}

export interface IProduct {
  name: string
  description: string
  cost: number
}
