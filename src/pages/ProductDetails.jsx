import React from 'react';
import PropTypes from 'prop-types';

export default class ProductDetails extends React.Component {
  render() {
    const { location: { title, price, thumbnail } } = this.props;
    return (
      <div>
        <h1 data-testid="product-detail-name">{ title }</h1>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};
