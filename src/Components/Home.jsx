import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';
import SearchBar from './SearchBar';

export default class Home extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      categories: [],
      // products: [],
      searchText: '',
      searchRadio: false,
    };
  }

  componentDidMount = () => {
    getCategories().then((value) => this.setState({ categories: value }));
    // getProductsFromCategoryAndQuery().then((value) => this.setState({ products: value }));
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'radio' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { categories, searchText, searchRadio } = this.state;
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button" />
        <SearchBar
          searchText={ searchText }
          handleChange={ this.handleChange }
        />
        <section>
          { categories.map(({ id, name }) => (
            <div key={ id } data-testid="category">
              {/* <label htmlFor="categories"> */}
              <input
                type="radio"
                name="searchRadio"
                id="categories"
                value={ searchRadio }
                onChange={ this.handleChange }
              />
              { name }
              {/* </label> */}
            </div>
          )) }
        </section>
      </div>
    );
  }
}
