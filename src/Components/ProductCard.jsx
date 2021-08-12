import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { id, title, price, thumbnail } = product;

    if (product.length === 0) {
      return <span> Nenhum produto foi encontrado; </span>;
    }
    return (
      <div>
        <div data-testid="product" key={ id }>
          <h1>{ title }</h1>
          <img src={ thumbnail } alt={ title } />
          <span>{ price }</span>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.array,
}.isRequired;

export default ProductCard;
