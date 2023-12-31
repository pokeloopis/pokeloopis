import React, { useEffect, useState, useRef } from "react";
import "./style.css";

export default function Pokemon({ pokemonType, pokemonIndex, showPokemon }) {
  function fixIndexValue(index) {
    if (index < 10) return '00' + index;
    if (index < 100) return '0' + index;
    return index;
  }
  return (
    <div style={{ backgroundColor: pokemonType?.color }} className="pokeCard">
      {pokemonIndex !== undefined && (
        <img
          style={{filter: showPokemon}}
          draggable="false"
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${fixIndexValue(pokemonIndex)}.png`}
        />
      )}
    </div>
  );
}
