import React from 'react';
import PropTypes from 'prop-types';

class Products extends React.Component {
  render() {
    const { products } = this.props;
    // const { title, price, thumbnail } = products;

    if (products.length === 0) {
      return <span> Nenhum produto foi encontrado; </span>;
    }
    return (
      <div>
        { products.map(({ id, title, price, thumbnail }) => (
          <div data-testid="product" key={ id }>
            <h1>{title}</h1>
            <img src={ thumbnail } alt={ title } />
            <span>{price}</span>
          </div>
        ))}
      </div>
    );
  }
}

Products.propTypes = {
  products: PropTypes.array,
}.isRequired;

export default Products;
