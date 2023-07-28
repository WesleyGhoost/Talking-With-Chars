"use client"

import React, { useEffect, useState } from 'react'
import { Container } from './styles/styledCharacterContainer'
import { CompletionChat } from '../config/chatGPT'
import Image, { StaticImageData } from 'next/image'

interface CharacterContainerProps {
  key: number,
  name: string,
  placeholder: string,
  img: StaticImageData,
  direction: string,
  rule: string
}

export function CharacterContainer(props: CharacterContainerProps) {

  useEffect(() => {
    async function animate() {
      const sr = (await import("scrollreveal")).default;
      sr().reveal(`.${props.direction}`, {
        duration: 1500,
        delay: 175,
        origin: props.direction === "right" ? "right" : "left",
        distance: "300px",
        reset: false,
      });
    }
    animate();
  }, []);

  const loading = "Carregando..."

  const [prompt, setPrompt] = useState<string>('')
  const [response, setResponse] = useState<string>('')

  const handleSubmit = async () => {
    setResponse(loading)
    setPrompt('')
    const completion = await CompletionChat(prompt, props.rule)
    if (completion) {
      setResponse(completion)
    }
  }

  return (
    <Container
      position={props.direction === 'left' ? 'left' : 'right'}
      className={props.direction}
    >
      <Image
        src={props.img}
        alt={props.placeholder}
      />
      <div>
        <h2>{props.name}</h2>
        <textarea
          disabled={true}
          value={response}
          placeholder={props.placeholder}
        >
        </textarea>
        <textarea
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
          placeholder='Digite Aqui!'
        >
        </textarea>
        <button type='submit' onClick={handleSubmit}>Enviar Pergunta</button>
      </div>
    </Container>
  )
}

