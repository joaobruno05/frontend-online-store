import React from 'react';
import { getCategories } from '../services/api';

export default class Categories extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      searchRadio: false,
      id: '',
    };
  }

  componentDidMount = () => {
    this.showCategories();
  }

  showCategories = async () => {
    const results = await getCategories();
    console.log(results);
    this.setState({
      categories: results,
    });
    // getCategories().then((categories) => this.setState({ categories }));
  }

  handleChange = ({ target }) => {
    const { id } = this.state;
    console.log(id);
    this.setState({
      searchRadio: true,
      id: target.id,
    });
  }

  render() {
    const { categories, searchRadio } = this.state;
    // console.log(id);
    // console.log(categories);
    // const { handleCategoryChange } = this.props;
    return (
      <div>
        <ul>
          { categories.map(({ id, name }) => (
            <li key={ id } data-testid="category">
              <label htmlFor={ id }>
                <input
                  type="radio"
                  name="searchRadio"
                  id={ id }
                  // categoryId={ categoryId }
                  value={ searchRadio }
                  onChange={ this.handleChange }
                />
                { name }
              </label>
            </li>
          )) }
        </ul>
      </div>
    );
  }
}
