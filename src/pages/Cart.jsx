import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    const { cart } = this.props;

    this.state = {
      cart,
    };
  }

  increaseCount = (id) => {
    const { cart } = this.state;
    const mapCart = cart.map((item) => (id === item.id
      ? { ...item, quantify: item.quantify + 1 }
      : item));
    this.setState({
      cart: mapCart,
    });
  }

  decreaseCount = (id, quantify) => {
    const { cart } = this.state;
    if (quantify > 1) {
      const mapCart = cart.map((item) => (id === item.id
        ? { ...item, quantify: item.quantify - 1 } : item));
      this.setState({
        cart: mapCart,
      });
    }
  }

  handleSubmit = () => {
    const { history } = this.props;
    history.push('/finish-buy');
  }

  render() {
    const { cart } = this.state;
    if (cart.length === 0) {
      return (
        <section className="empty-cart" data-testid="shopping-cart-empty-message">
          <p><Link to="/">◀️Voltar</Link></p>
          <h3>Seu carrinho está vazio</h3>
        </section>
      );
    }
    return (
      <div>
        <p><Link to="/">◀️Voltar</Link></p>
        <h3>Carrinho de Compras</h3>
        <br />
        <section className="used-cart">
          { cart.map(({ id, title, thumbnail, price, quantify }) => (
            <div key={ title }>
              <h4 data-testid="shopping-cart-product-name">
                { title }
              </h4>
              <img src={ thumbnail } alt={ title } />
              <p>
                {`R$ ${price * quantify}`}
              </p>
              <button
                type="button"
                data-testid="product-decrease-quantity"
                onClick={ () => this.decreaseCount(id, quantify) }
              >
                -
              </button>
              <span data-testid="shopping-cart-product-quantity">
                { quantify }
              </span>
              <button
                type="button"
                data-testid="product-increase-quantity"
                onClick={ () => this.increaseCount(id) }
              >
                +
              </button>
            </div>
          )) }
          <button
            type="button"
            onClick={ this.handleSubmit }
          >
            Finalizar compra
          </button>
        </section>
      </div>
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
