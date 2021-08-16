import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { id, title, price, thumbnail } = product;

    if (product.length === 0) {
      return <span> Nenhum produto foi encontrado; </span>;
    }
    return (
      <div>
        <Link
          to={ {
            pathname: `/product/${id}/${title}`,
            title,
            price,
            thumbnail,
          } }
          data-testid="product-detail-link"
        >
          <div data-testid="product" key={ id }>
            <h1>{ title }</h1>
            <img src={ thumbnail } alt={ title } />
          </div>
        </Link>
        <div>
          <p>{ price }</p>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }),
}.isRequired;
