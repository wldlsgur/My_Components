import * as S from './style';
import { Props } from './type';

const List = <T,>({ data, children, ...rest }: Props<T>) => {
  return (
    <S.List {...rest}>
      {data.map((value: T, index: number) => {
        return children(value, index);
      })}
    </S.List>
  );
};

export default List;
