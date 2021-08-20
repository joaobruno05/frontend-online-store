import React from 'react';
import PropTypes from 'prop-types';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';

export default class ProductsList extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleList = this.handleList.bind(this);
    this.handleInputSearchText = this.handleInputSearchText.bind(this);
    this.addCart = this.addCart.bind(this);

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
    const { searchText } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(id, searchText);
    this.setState({ loading: true }, async () => {
      this.setState({
        products: results,
        loading: false,
      });
    });
  }

  searchResult = () => {
    const { products } = this.state;
    const { updateCart } = this.props;
    if (products.length === 0) {
      return <h3> Nenhum produto foi encontrado </h3>;
    }
    return products.map((product) => (
      <ProductCard
        key={ product.id }
        product={ product }
        products={ products }
        addCart={ this.addCart }
        updateCart={ updateCart }
      />
    ));
  }

  render() {
    const { categories, searchRadio, searchText, loading } = this.state;

    if (loading) return (<p>Carregando...</p>);
    return (
      <div className="main-page">
        <div className="categories">
          <ul>
            { categories.map(({ id, name }) => (
              <li key={ id }>
                <label data-testid="category" htmlFor={ id }>
                  ▶️
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
        <div className="right-page">
          <section className="search-area">
            <SearchBar
              searchText={ searchText }
              handleInputSearchText={ this.handleInputSearchText }
            />
            <span />
            <button
              className="search-button"
              data-testid="query-button"
              type="button"
              onClick={ this.handleList }
              disabled={ searchText.length === 0 }
            >
              Pesquisar
            </button>
          </section>
          <section>
            <h3 className="banner-msg" data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h3>
          </section>
          <div>
            {this.searchResult()}
          </div>
        </div>
      </div>
    );
  }
}

ProductsList.propTypes = {
  updateCart: PropTypes.func.isRequired,
};
