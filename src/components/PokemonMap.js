import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class PokemonMap extends Component {
  render() {
    const { pokemonMapList } = this.props;
    const { location, map } = pokemonMapList;
    return (
      <div>
        <img alt={ location } src={ map } />
        <p>{ location }</p>
      </div>
    );
  }
}

PokemonMap.propTypes = {
  pokemonMapList: PropTypes.shape({
    location: PropTypes.string,
    map: PropTypes.string,
  }).isRequired,
};
