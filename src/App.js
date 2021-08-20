import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemId: '',
      itemThumb: '',
      itemTitle: '',
      itemPrice: 0,
      itemCount: 0,
    };
    this.updateCart = this.updateCart.bind(this);
  }

  updateCart = (cartItem) => {
    const { id, thumbnail, title, price } = cartItem;
    this.setState({
      itemId: id,
      itemThumb: thumbnail,
      itemTitle: title,
      itemPrice: price,
      itemCount: 1,
    });
  };

  render() {
    const { itemId, itemThumb, itemTitle, itemPrice, itemCount } = this.state;
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
              component={ () => (
                <Cart
                  itemId={ itemId }
                  itemThumb={ itemThumb }
                  itemTitle={ itemTitle }
                  itemPrice={ itemPrice }
                  itemCount={ itemCount }
                />) }
            />
            <Route
              exact
              path="/"
              component={ () => <Home updateCart={ this.updateCart } /> }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
