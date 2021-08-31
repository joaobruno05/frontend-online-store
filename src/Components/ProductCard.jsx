import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductCard extends React.Component {
  render() {
    const { product, updateCart } = this.props;
    const { id, title, price, thumbnail } = product;

    return (
      <div className="card-item">
        <Link
          to={ {
            pathname: `/product/${id}/${title}`,
            id,
            title,
            price,
            thumbnail,
            updateCart,
          } }
          data-testid="product-detail-link"
        >
          <div data-testid="product" key={ id }>
            <h3>{ title }</h3>
            <img src={ thumbnail } alt={ title } />
          </div>
        </Link>
        <div>
          <h4>
            {`R$${price}`}
          </h4>
          <button
            data-testid="product-add-to-cart"
            type="button"
            id={ id }
            onClick={ () => updateCart(id, title, thumbnail, price) }
          >
            Adicionar ao Carrinho
          </button>

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
  }).isRequired,
  updateCart: PropTypes.func.isRequired,
};
