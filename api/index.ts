import type { IPokemon, IPokemonDetails } from '.';

export const URL = 'https://jherr-pokemon.s3.us-west-1.amazonaws.com';

export async function fetchPokemons(): Promise<IPokemon[] | null> {
  try {
    const response = await fetch(`${URL}/index.json`);
    return await response.json();
  } catch (error) {
    return null;
  }
}

export async function fetchPokemonDetails(
  id: number
): Promise<IPokemonDetails | null> {
  try {
    const response = await fetch(`${URL}/pokemon/${id}.json`);

    return await response.json();
  } catch (error) {
    return null;
  }
}

export * from './type';
