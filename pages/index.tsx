import { fetchPokemons } from '../api';
import type { IPokemon } from '../api';

import styled from 'styled-components';

import { Pokemon } from '../components/Pokemon';

type IndexProps = {
  pokemons: IPokemon[];
};

export async function getEdgeProps() {
  const pokemons = await fetchPokemons();
  return {
    props: {
      pokemons,
    } as IndexProps,
  };
}

export default function Index({ pokemons }: IndexProps) {
  if (!pokemons) {
    return <div>Error occured fetching pokemons...</div>;
  }
  return (
    <>
      <Grid>
        {pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} {...pokemon} />
        ))}
      </Grid>
    </>
  );
}

const Grid = styled.div`
  max-width: 900px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;
