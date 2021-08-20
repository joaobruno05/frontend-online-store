import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductsList from '../Components/ProductsList';

export default class Home extends React.Component {
  render() {
    const { updateCart } = this.props;

    return (
      <div>
        <p>
          <Link
            to="/cart"
            data-testid="shopping-cart-button"
          >
            Carrinho 🛒
          </Link>
        </p>
        <ProductsList updateCart={ updateCart } />
      </div>
    );
  }
}

Home.propTypes = {
  updateCart: PropTypes.func.isRequired,
};
