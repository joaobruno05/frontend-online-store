import React from 'react';
import PropTypes from 'prop-types';
import Products from './Products';
import * as api from '../services/api';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      // input: '',
      productList: [],
      loading: false,
      isClicked: false,
    };
    this.handleList = this.handleList.bind(this);
  }

  //  valueInput = ({ target }) => {
  //    this.setState({
  //      input: target.value,
  //    });
  //  }

  handleList = async () => {
    const { searchText } = this.props;
    // const { match: { params: { id } } } = this.props;
    // console.log(id);
    // console.log(match);
    //  const { input } = this.state;
    this.setState({ loading: true }, async () => {
      const { results } = await api.getProductsFromCategoryAndQuery('all', searchText);
      // console.log(results);
      this.setState({
        productList: results,
        loading: false,
        isClicked: true,
      });
    });
  }

  render() {
    const { productList, loading, isClicked } = this.state;
    // console.log(productList);
    const { handleChange, searchText } = this.props;
    if (loading) return (<p>Carregando...</p>);
    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          name="searchText"
          value={ searchText }
          onChange={ handleChange }
        />
        <button data-testid="query-button" type="button" onClick={ this.handleList }>
          Pesquisar
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Products products={ productList } isClicked={ isClicked } />
      </div>
    );
  }
}

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default SearchBar;
