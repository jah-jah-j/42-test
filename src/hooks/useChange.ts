interface IChange {
  [key: string]: number
}

export const useChange = (change: number) => {
  const tenChange = Math.floor(change / 10)
  const fivesChange = Math.floor(change % 10 / 5)
  const twosChange = Math.floor(change % 5 / 2)
  const onesChange = Math.floor(change % 5 % 2)

  const result: IChange = {}

  tenChange && (result[10] = tenChange)
  fivesChange && (result[5] = fivesChange)
  twosChange && (result[2] = twosChange)
  onesChange && (result[1] = onesChange)

  return result
}
