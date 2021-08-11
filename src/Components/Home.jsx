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
      // id: '',
    };
  }

  componentDidMount = () => {
    getCategories().then((value) => this.setState({ categories: value }));
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'radio' ? target.checked : target.value;
    this.setState({
      [name]: value,
      // id,
    });
  }

  // handleClick = ({ target }) => {
  //   const { id } = target;
  //   console.log(id);
  //   this.handleChange({ target });
  //   const { searchText } = this.state;
  //   getProductsFromCategoryAndQuery(id, searchText).then((value) => this.setState({ products: value }));
  // }

  render() {
    const { categories, searchText, searchRadio } = this.state;
    return (
      <div>
        {/* <Link to="/cart" data-testid="shopping-cart-button" /> */}
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <SearchBar
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
                  // onClick={ this.handleClick }
                />
                { name }
              </label>
            </li>
          )) }
        </section>
      </div>
    );
  }
}
