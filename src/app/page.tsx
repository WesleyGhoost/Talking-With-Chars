"use client"

import styled from 'styled-components';
import { CharactersContainer } from '../components/charactersContainer';
import { Warning } from '../components/warning';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
  gap: 80px;
 
`

export default function Home() {
  return (
    <Main>
      <Warning />
      <CharactersContainer />
    </Main>
  )
}
