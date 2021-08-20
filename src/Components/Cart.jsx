import React from 'react';

export default class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      vazio: true,
      listCart,
      quantidade: 1,
      total: 0,
    };
    this.handlePrice = this.handlePrice.bind(this);
    this.handleClickIncrease = this.handleClickIncrease.bind(this);
    this.handleClickDecrease = this.handleClickDecrease.bind(this);
  }

  handleClickDecrease() {
    const { quantidade } = this.state;
    if (quantidade >= 2) {
      this.setState((prev) => ({ quantidade: prev.quantidade - quantidade }));
    }
  }

  handleClickIncrease() {
    this.setState((prev) => ({
      quantidade: prev.quantidade + quantidade,
    }));
  }

  handlePrice(price) {
    const { quantidade } = this.state;
    this.setState((prev) => ({ total: quantidade * (prev.total + price) }));
  }

  render() {
    const { vazio, listCart, quantidade } = this.state;
    if (listCart) {
      this.setState({
        vazio: false,
      });
    }
    if (vazio) {
      return (
        <div data-testid="shopping-cart-empty-message">
          <h2>Seu carrinho está vazio</h2>
        </div>
      );
    }
    return (
      <div>
        <ul>
          { listCart.map((item) => (
            <li key={ item.id }>
              <handlePrice price={ item.price } />
              <h1>{ item.title }</h1>
              <img src={ item.thumbnail } alt={ item.title } />
              <span>{ item.price }</span>
              <button
                type="button"
                data-testid="product-decrease-quantity"
                onClick={ this.handleClickDecrease }
              >
                -
              </button>
              <span data-testid="shopping-cart-product-quantity">{ quantidade }</span>
              <button
                type="button"
                data-testid="product-increase-quantity"
                onClick={ this.handleClickIncrease }
              >
                +
              </button>
              <button
                type="button"
                onClick={ this.handleClickRemove }
              >
                Remove(X)
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
