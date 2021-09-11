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

    this.state = {
      price: 0,
      cart: [],
    };
  }

  updateCart = (product) => {
    const max = product.available_quantity;
    const { id, title, thumbnail, price } = product;
    const cartItem = { id, title, thumbnail, price, quantify: 1, max };
    this.setState((prevState) => ({
      price: prevState.price + price,
      cart: [...prevState.cart, cartItem],
    }));
  };

  render() {
    const { cart } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              path="/product/:id/:title"
              render={ (props) => <ProductDetails { ...props } /> }
            />
            <Route
              path="/cart"
              render={ (props) => <Cart { ...props } cart={ cart } /> }
            />
            <Route
              exact
              path="/"
              render={ () => <Home updateCart={ this.updateCart } /> }
            />
            <Route path="/finish-buy" component={ FinishBuy } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
