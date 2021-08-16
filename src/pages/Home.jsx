import React from 'react';
import { Link } from 'react-router-dom';
import ProductsList from '../Components/ProductsList';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <ProductsList />
      </div>
    );
  }
}
