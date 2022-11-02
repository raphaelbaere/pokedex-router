import PropTypes from 'prop-types';
import React, { Component } from 'react';
import PokemonMap from './PokemonMap';

export default class PokemonDetails extends Component {
  render() {
    const { pokemonList, match } = this.props;
    const { params } = match;
    const { id } = params;
    const pokemon = pokemonList.find((pokemonInfo) => pokemonInfo.id.toString() === id);
    const { name, type, image, averageWeight, summary, foundAt } = pokemon;
    const foundAtLocations = foundAt
      .map((location) => (
        <PokemonMap
          key={ location.location }
          pokemonMapList={ location }
        />));
    return (
      <div>
        <div>
          <h1>
            { name }
            {' '}
            details
          </h1>
        </div>
        <div>
          <p>{ name }</p>
          <p>{ type }</p>
          <p>
            {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
          <img src={ image } alt={ `${name} sprite` } />
          <p>
            { summary }
          </p>
          <div>
            { foundAtLocations }
          </div>
        </div>
      </div>
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
