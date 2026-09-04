import OpenAI from 'openai'
const openai = new OpenAI()

const messages = [
    {
        role: 'system',
        content: 'Explain the given topic from the user as if you are explaining to whatever age they specify. Your response should be no longer than 5 sentences.'
    },
    {
        role: 'user',
        content: 'Quantum Computing, 5 years old'
    }
]

const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: messages
})

console.log(response.choices[0].message.content)
/**
 * Challenge:
 * 1. Ask OpenAI to explain something complicated 
 *    to you. For example Quantum Computing.
 * 
 * Prompt Engineering Stretch Goals
 * - See if you can control the level of complexity of 
 *   the generated content, for example is this for 
 *   10-year-olds or college kids?
 * - See if you can control the length of the output.
 * **/ 
