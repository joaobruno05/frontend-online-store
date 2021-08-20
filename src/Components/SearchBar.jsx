import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { handleInputSearchText, searchText } = this.props;
    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          size="50"
          name="searchText"
          value={ searchText }
          onChange={ handleInputSearchText }
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  handleInputSearchText: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default SearchBar;
