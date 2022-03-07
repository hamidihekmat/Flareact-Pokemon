export interface IPokemon {
  id: number;
  name: string;
  image: string;
}

type Stat = {
  name: string;
  value: number;
};

export interface IPokemonDetails extends IPokemon {
  type: string[];
  stats: Stat[];
}
