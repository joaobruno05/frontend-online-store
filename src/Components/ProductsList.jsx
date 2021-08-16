import React from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';

export default class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      products: [],
      searchRadio: false,
      searchText: '',
      id: '',
      loading: false,
    };
  }

  componentDidMount = () => {
    this.showCategories();
  }

  showCategories = async () => {
    const results = await getCategories();
    this.setState({
      categories: results,
    });
  }

  handleInputSearchText = ({ target }) => {
    this.setState({
      searchText: target.value,
    });
  }

  handleChange = async ({ target }) => {
    const { searchText } = this.state;
    const { id } = target;
    const { results } = await getProductsFromCategoryAndQuery(id, searchText);
    this.setState({
      products: results,
      searchRadio: true,
      id: target.id,
    });
  }

  handleList = async () => {
    const { id } = this.state;
    console.log(id);
    const { searchText } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(id, searchText);
    this.setState({ loading: true }, async () => {
      this.setState({
        products: results,
        loading: false,
      });
    });
  }

  render() {
    const { categories, products, searchRadio, searchText, loading } = this.state;
    console.log(products);
    if (loading) return (<p>Carregando...</p>);
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          handleInputSearchText={ this.handleInputSearchText }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handleList }
        >
          Pesquisar
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div>
          <ul>
            { categories.map(({ id, name }) => (
              <li key={ id }>
                <label data-testid="category" htmlFor={ id }>
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
          </ul>
        </div>
        <div>
          { products.map((product) => (
            <ProductCard
              key={ product.id }
              product={ product }
            />
          )) }
        </div>
      </div>
    );
  }
}
