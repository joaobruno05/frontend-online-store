import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';
// import Products from './Components/Products';

import './App.css';
// import SearchBar from './Components/SearchBar';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/cart" component={ Cart } />
            {/* <Route path="/:id" render={ (props) => <Products { ...props } /> } /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
