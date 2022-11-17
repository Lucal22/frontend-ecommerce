import { useState } from 'react';
import * as Styled from './styles';
import { ShoppingCart } from 'phosphor-react';

export default function CartButton() {
  const [item, setItem] = useState(true);
  return (
    <Styled.Cart>
      <Styled.CartSvg>
        <ShoppingCart size={32} />
        {item ? (
          <Styled.CartCount>
            <p>10</p>
          </Styled.CartCount>
        ) : null}
      </Styled.CartSvg>
    </Styled.Cart>
  );
}
