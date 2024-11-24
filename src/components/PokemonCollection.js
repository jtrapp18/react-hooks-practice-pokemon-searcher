import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({showCards}) {
  return (
    <Card.Group itemsPerRow={6}>
      {showCards.map(pokemon=>
        <PokemonCard
          key={pokemon.name}
          {...pokemon}
        />
      )}
    </Card.Group>
  );
}

export default PokemonCollection;
