import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import FinishBuy from './pages/FinishBuy';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const size = localStorage.getItem('cart-size');
    this.state = {
      price: 0,
      cart: [],
      cartSize: Number(size),
    };
  }

  componentDidMount = () => {
    const { cartSize, cart } = this.state;
    localStorage.setItem('cart-size', JSON.stringify(cartSize));
    const cartKey = localStorage.key(1);
    if (!cartKey) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  updateCart = (id, title, thumbnail, price) => {
    const { cartSize, cart } = this.state;
    const cartItem = { id, title, thumbnail, price, quantify: 1 };
    
  updateCart = (product) => {
    const max = product.available_quantity;
    const { id, title, thumbnail, price } = product;
    const cartItem = { id, title, thumbnail, price, quantify: 1, max };
    this.setState((prevState) => ({
      price: prevState.price + price,
      cart: [...prevState.cart, cartItem],
      cartSize: prevState.cartSize + 1,
    }));
    localStorage.setItem('cart-size', cartSize);
    const cartSizeLocal = localStorage.getItem('cart-size');
    localStorage.setItem('cart-size', JSON.parse(cartSizeLocal) + 1);

    const cartLocalStorage = localStorage.getItem('cart');
    localStorage.setItem('cart', JSON.parse(cartLocalStorage).push(cart));
  };

  render() {
    const { cart, cartSize } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              path="/product/:id/:title"
              render={ (props) => <ProductDetails { ...props } cart={ cart } /> }
            />
            <Route
              path="/cart"
              render={ (props) => <Cart { ...props } cart={ cart } /> }
            />
            <Route
              exact
              path="/"
              render={
                () => (
                  <Home
                    updateCart={ this.updateCart }
                    cart={ cart }
                    cartSize={ cartSize }
                  />)
              }
            />
            <Route
              path="/finish-buy"
              component={ FinishBuy }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
