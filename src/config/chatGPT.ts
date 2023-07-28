const OPENAI_API_KEY = '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'

export async function CompletionChat(prompt: string, rule: string) {

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: "POST",
    headers: {
      Accept: "application/json", 
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`
      
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {"role": "system", "content": rule},
        {role: "user", content: prompt}
      ],
      max_tokens: 70,
      temperature: 0.3
    })
  })

  const data = await response.json()

  if (response.ok && data.choices && data.choices.length > 0) {
    return data.choices[0].message.content
  } else if (response.status === 401) {
    return window.alert('Chave de API inválida, inexistente, ou com uso máximo atingido')
  } else if (response.status === 429) {
    return window.alert('Muitas requisições foram enviadas em um curto período de tempo, por favor, aguarde um certo período de tempo antes de continuar.')
  } else (
    window.alert('Erro nos servidores da OPENAI, reinicie a página se necessário.')
  )
}