"use client"

import React, { useState } from 'react'
import WarningIcon from '@mui/icons-material/Warning';
import { WarningContainer } from './styles/styledWarning';

export function Warning() {

  const [showVideo, setShowVideo] = useState('none')

  const handleShowVideo = (e: any) => {
    e.preventDefault()

    if (showVideo === 'none') {
      setShowVideo('column')
      window.scrollBy(0, 250)
    }
  }

  const handleCloseVideo = (e: any) => {
    e.preventDefault()

    if (showVideo === 'column') {
      setShowVideo('none')
      window.scrollBy(0, -500)
    }
  }

  return (
    <WarningContainer display={showVideo}>
      <WarningIcon />
      <p>
        Este site utiliza o modelo <strong>gpt-3.5-turbo</strong> da <em>OpenAI</em> em
        seus chats. Seu uso é limitado, portanto, a qualquer momento as respostas dos
        personagens podem vir a deixar de funcionar. Caso queira ver o site em funcionamento,
        clique <a onClick={handleShowVideo} href='#'> aqui</a> para ver um vídeo da aplicação.
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/bd7Bw1Aov7c"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      >
      </iframe>
      <a 
        onClick={handleCloseVideo}
        href="#"
      >
      fechar
      </a>
    </WarningContainer>
  )
}