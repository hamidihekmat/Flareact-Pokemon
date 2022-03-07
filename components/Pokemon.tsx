import Link from 'flareact/link';

import styled from 'styled-components';
import type { IPokemon } from '../api';

export function Pokemon({ id, name, image }: IPokemon) {
  return (
    <Link href="/pokemon/[id]" as={`/pokemon/${id}`} prefetch>
      <a style={{ textDecoration: 'none' }}>
        <Wrapper>
          <Name>{name}</Name>
          <Image
            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${image}`}
          />
        </Wrapper>
      </a>
    </Link>
  );
}

const Wrapper = styled.div`
  // reset
  text-decoration: none;

  padding: 10px;
  background-color: whitesmoke;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background-color 150ms ease-in-out;
  cursor: pointer;

  :hover {
    background-color: lightgray;
  }
`;

const Name = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #66a310;
`;

const Image = styled.img`
  max-width: 200px;
  max-height: 200px;
`;
