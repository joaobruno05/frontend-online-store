import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductsList from '../Components/ProductsList';

export default class Home extends React.Component {
  sendLocalStorageCart = () => {
    const { cart } = this.props;
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  componentDidUpdate = () => {
    this.sendLocalStorageCart();
  }

  getCartLocalStorage = () => {
    const getCart = JSON.parse(localStorage.getItem('cart'));
    console.log(getCart);
    if (getCart) {
      return getCart.length;
    }
    return 0;
  }

  render() {
    const { updateCart } = this.props;
    const getCartSize = localStorage.getItem('cart-size');
    return (
      <div>
        <p data-testid="shopping-cart-size">
          <Link
            to="/cart"
            data-testid="shopping-cart-button"
          >
            { getCartSize ? `Carrinho ${getCartSize} 🛒` : `Carrinho ${0} 🛒` }
          </Link>
        </p>
        <ProductsList updateCart={ updateCart } />
      </div>
    );
  }
}

Home.propTypes = {
  updateCart: PropTypes.func.isRequired,
  cart: PropTypes.shape({
    length: PropTypes.number.isRequired,
  }).isRequired,
};
