import { fetchPokemonDetails, URL } from '../../api';
import type { IPokemonDetails } from '../../api';

import Link from 'flareact/link';

import styled from 'styled-components';

type PokemonPageProp = {
  pokemonDetails: IPokemonDetails | null;
};

export async function getEdgeProps({ params }) {
  const { id } = params;

  const pokemonDetails = await fetchPokemonDetails(id);

  return {
    props: {
      pokemonDetails,
    } as PokemonPageProp,
    revalidate: 60,
  };
}

export default function PokemonPage({ pokemonDetails }: PokemonPageProp) {
  if (!pokemonDetails) {
    return <h1>No such pokemon exists...</h1>;
  }

  return (
    <Grid>
      <Link href="/">
        <a style={{ textDecoration: 'none' }}>
          <Button>Back</Button>
        </a>
      </Link>
      <Image src={`${URL}/${pokemonDetails.image}`} />
      <Details>
        <Name>Stats for {pokemonDetails.name}</Name>
        <table>
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
          {pokemonDetails.stats.map((stat) => (
            <tr key={stat.name}>
              <td>{stat.name}</td>
              <td>{stat.value}</td>
            </tr>
          ))}
        </table>
      </Details>
    </Grid>
  );
}

const Grid = styled.div`
  max-width: 900px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: auto repeat(2, 1fr);
  gap: 10px;
`;

const Image = styled.img`
  max-width: 400px;
`;

const Name = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;

const Button = styled.div`
  padding: 10px 15px;
  background-color: steelblue;
  color: white;
  font-weight: 600;
`;

const Details = styled.div``;
