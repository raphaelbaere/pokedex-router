import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class PokemonDetails extends Component {
  render() {
    const { pokemonList, match } = this.props;
    const { params } = match;
    const { id } = params;
    return (
      <h1>
        { pokemonList.find((pokemon) => pokemon.id.toString() === id).name }
        {' '}
        details
      </h1>
    );
  }
}

PokemonDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  pokemonList: PropTypes.shape({
    find: PropTypes.func,
  }).isRequired,
};
