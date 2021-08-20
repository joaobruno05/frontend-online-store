import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Cart extends React.Component {
  constructor() {
    super();

    this.state = { vazio: true };
  }

  render() {
    const { vazio } = this.state;
    const { /* itemId, */ itemThumb, itemTitle, itemPrice, itemCount } = this.props;
    if (vazio) {
      return (
        <div>
          <section className="empty-cart" data-testid="shopping-cart-empty-message">
            <p><Link to="/">◀️Voltar</Link></p>
            <h3>Seu carrinho está vazio</h3>
          </section>
          <section className="used-cart" data-testid="shopping-cart-product-name">
            <h3>Carrinho de Compras</h3>
            <img src={ itemThumb } alt={ itemTitle } />
            <p>
              { itemTitle }
            </p>
            <p>
              {`R$${itemPrice}`}
            </p>
            <button type="button">
              -
            </button>
            <input
              data-testid="shopping-cart-product-quantity"
              type="text"
              name="itemCount"
              value={ itemCount }
              size="1"
            />
            <button type="button">
              +
            </button>
          </section>
        </div>
      );
    }
    return (
      <div />
    );
  }
}

Cart.propTypes = {
  itemId: PropTypes.string,
  itemTitle: PropTypes.string,
  itemPrice: PropTypes.number,
  itemThumb: PropTypes.string,
  itemCount: PropTypes.number,
}.isRequired;
