"use client"

import React, { useEffect, useState } from 'react'
import { CharacterContainer } from '../components/characterContainer';
import { Container } from './styles/styledCharactersContainer';
import { CharacterTypes } from '../types/characterTypes';
import { charactersInfo } from '../utils/charactersInfos';

export function CharactersContainer() {

  const [characterList, setCharacterList] = useState<CharacterTypes[]>([])

  useEffect(() => {
    const newCharacterList = charactersInfo.map(character => {
      return {
        ...character,
        setCharacter: (newCharacter: CharacterTypes) => {
          setCharacterList(prevState => [...prevState, newCharacter])
        }
      }
    })
    setCharacterList(newCharacterList)
  }, [])

  return (
    <Container>
      {characterList.map(item => {
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

