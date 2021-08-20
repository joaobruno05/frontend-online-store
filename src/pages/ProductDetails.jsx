import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductDetails extends React.Component {
  render() {
    const { location: { title, price, thumbnail } } = this.props;
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
        <h1 data-testid="product-detail-name">{ title }</h1>
        <h2>
          {`R$ ${price}`}
        </h2>
        <img src={ thumbnail } alt={ title } />
        <h2>Especificações Técnicas:</h2>
        <p>Especificação 1</p>
        <p>Especificação 2</p>
        <p>Especificação 3</p>
        <p>Especificação N</p>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};
