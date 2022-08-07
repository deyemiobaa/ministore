import React from 'react';
import cart from '../../assets/icons/cart.svg';
// import CartOverlay from "./cart-overlay";

class Cart extends React.PureComponent {
  render() {
    return (
      <>
        <div>
          <img src={cart} alt="cart" />
        </div>
        {/* <CartOverlay /> */}
      </>
    );
  }
}

export default Cart;
