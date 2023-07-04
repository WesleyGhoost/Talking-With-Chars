import { Configuration, OpenAIApi } from "openai";

const OPENAI_API = process.env.OPENAI_API_KEY

const configuration = new Configuration({
    apiKey: OPENAI_API
  });

const openai = new OpenAIApi(configuration)

export const getChatCompletion = async (content: string) => {
  const completion = await openai.createChatCompletion({
    model: "text-davinci-003",
    messages: [{"role": "system", "content": "You are a helpful assistant."}, {role: "user", content}],
  });

  return completion.data.choices[0].message
}


