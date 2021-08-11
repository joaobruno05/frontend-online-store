import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import SearchBar from './SearchBar';

export default class Home extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      categories: [],
      products: [],
      searchText: '',
      searchRadio: false,
      // id: '',
    };
  }

  componentDidMount = () => {
    getCategories().then((value) => this.setState({ categories: value }));
  }

  handleChange = async ({ target }) => {
    const { name } = target;
    // console.log(target.id);
    const products = await getProductsFromCategoryAndQuery(target.id);
    console.log(products.results);
    const value = target.type === 'radio' ? target.checked : target.value;
    this.setState({
      [name]: value,
      products: products.results,
    });
  }

  render() {
    const { categories, searchText, searchRadio, products } = this.state;
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <SearchBar
          // id={ id }
          searchText={ searchText }
          handleChange={ this.handleChange }
        />
        <section>
          { categories.map(({ id, name }) => (
            <li key={ id } data-testid="category">
              <label htmlFor={ id }>
                <input
                  type="radio"
                  name="searchRadio"
                  id={ id }
                  value={ searchRadio }
                  onChange={ this.handleChange }
                />
                { name }
              </label>
            </li>
          )) }
        </section>
        <section>
          <ul>
            { products.map(({ id, title, price, thumbnail }) => (
              <li key={ id }>
                <h4>{ title }</h4>
                <p>{ price }</p>
                <img src={ thumbnail } alt={ title } />
              </li>
            )) }
          </ul>
        </section>
      </div>
    );
  }
}
