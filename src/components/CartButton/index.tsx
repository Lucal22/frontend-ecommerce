import * as Styled from './styles';
import { ShoppingCart } from 'phosphor-react';

type CartButtonProps = {
  number: number;
};

export default function CartButton({ number }: CartButtonProps) {
  return (
    <Styled.Cart>
      <Styled.CartSvg>
        <ShoppingCart size={32} />
        {number >= 1 ? (
          <Styled.CartCount>
            <p>{number}</p>
          </Styled.CartCount>
        ) : null}
      </Styled.CartSvg>
    </Styled.Cart>
  );
}
