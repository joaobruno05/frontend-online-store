import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = { evaluation: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState((prev) => ({ evaluation: prev.evaluation + value }));
  }

  render() {
    const { evaluation } = this.state;
    const { location: { title, price, thumbnail } } = this.props;
    return (
      <>
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
        <h3>{ evaluation }</h3>
        <textarea
          data-testid="product-detail-evaluation"
          value={ evaluation }
          cols="30"
          rows="10"
          onChange={ this.handleChange }
        />
      </>
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
