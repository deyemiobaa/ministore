import React from 'react';
import { NavLink } from 'react-router-dom';
import CurrencyPicker from '../currency-picker/currency-picker';
import Cart from '../cart/cart';
import logo from '../../assets/brand-icon.png';

class Header extends React.PureComponent {
  render() {
    return (
      <header>
        <nav>
          <NavLink to="/">All</NavLink>
          <NavLink to="/clothes">Clothes</NavLink>
          <NavLink to="/shoes">Shoes</NavLink>
        </nav>
        <img src={logo} alt="logo" />
        <div>
          <CurrencyPicker />
          <Cart />
        </div>
      </header>
    );
  }
}

export default Header;
