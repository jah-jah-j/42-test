import React, {FC} from 'react';

interface IProps {
  coin: string
  value: number
}

const ChangeItem: FC<IProps> = ({coin, value}) => {
  return <span>{coin}₽: {value} coins</span>;
};

export default ChangeItem;
