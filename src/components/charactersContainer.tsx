"use client"

import React, { useEffect, useState } from 'react'
import { CharacterContainer } from '../components/characterContainer';
import { Container } from './styles/styledCharactersContainer';
import db from '../config/firebase'
import { collection, getDocs } from 'firebase/firestore/lite';
import { CharacterTypes } from '../types/characterTypes';


export function CharactersContainer() {

  const [character, setCharacter] = useState<CharacterTypes[]>([])

  async function getCharacters() {
    const charactersCollection = collection(db, "characters")
    const charactersSnapshot = await getDocs(charactersCollection)
    const charactersData = charactersSnapshot.docs.map(doc => doc.data())
    const charactersList = charactersData as CharacterTypes[]
    setCharacter(charactersList)
  }

  useEffect(() => {
    getCharacters()
  }, [])

  return (
    <Container>
      {character.map(item => {
        return (
          <CharacterContainer
            key={item.id}
            name={item.name}
            placeholder={item.placeholder}
            img={item.img}
            direction={item.direction}
            rule={item.rule}
          />
        )
      })}
    </Container>
  )
}

