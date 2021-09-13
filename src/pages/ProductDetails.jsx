import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      evaluation: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState((prev) => ({ evaluation: prev.evaluation + value }));
  }

  render() {
    const cart = localStorage.getItem('cart-size');
    const { evaluation } = this.state;
    const { location: { id, title, price, thumbnail, updateCart } } = this.props;
    const product = { id, title, price, thumbnail, available_quantity: 3, updateCart };
    return (
      // <>
      <div>
        <div>
          <p data-testid="shopping-cart-size">
            <Link
              to={ {
                pathname: '/cart',
                // totalQuantify,
              } }
              data-testid="shopping-cart-button"
            >
              { `Carrinho ${cart} 🛒`}
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
        <br />
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          id={ id }
          onClick={ () => updateCart(product) }
        >
          Adicionar ao Carrinho
        </button>
      </div>
      // </>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    updateCart: PropTypes.func,
  }).isRequired,
};
