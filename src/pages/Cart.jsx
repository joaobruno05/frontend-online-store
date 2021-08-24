import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    const { itemPrice } = this.props;

    this.state = {
      // vazio: true,
      itemCount: 1,
      totalPrice: itemPrice,
    };
  }

  increaseCount = () => {
    const { itemPrice } = this.props;
    this.setState((prevState) => ({
      itemCount: prevState.itemCount + 1,
      totalPrice: prevState.totalPrice + itemPrice,
    }));
  }

  decreaseCount = () => {
    const { itemCount } = this.state;
    const { itemPrice } = this.props;
    if (itemCount > 1) {
      this.setState((prevState) => ({
        itemCount: prevState.itemCount - 1,
        totalPrice: prevState.totalPrice - itemPrice,
      }));
    }
  }

  // updatePrice = () => {
  //   const { totalPrice } = this.state;
  //   this.setState((prevState) => ({
  //     totalPrice: prevState.totalPrice + totalPrice,
  //   }));
  // }

  render() {
    const { itemCount, totalPrice } = this.state;
    const { itemThumb, itemTitle, itemPrice } = this.props;
    // let { itemPrice } = this.props;
    if (itemTitle === '') {
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
          <img src={ itemThumb } alt={ itemTitle } />
          <p data-testid="shopping-cart-product-name">
            { itemTitle }
          </p>
          <p>
            {`R$ ${itemPrice}`}
          </p>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ this.decreaseCount }
          >
            -
          </button>
          <span data-testid="shopping-cart-product-quantity">
            { itemCount }
          </span>
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ this.increaseCount }
          >
            +
          </button>
          <div>
            <p>{ `Valor total: R$ ${totalPrice}` }</p>
          </div>
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
