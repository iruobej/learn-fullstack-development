import OpenAI from 'openai'

const openai = new OpenAI({
    dangerouslyAllowBrowser: true
})

/**
 * Challenge:
 * 
 * I've pasted some output below. Try and figure out 
 * what instructions I gave OpenAI to get that output.
 * 
 * On the screen, visions gleam, a tech queen's dream, 
 * in every home's scene.
 * Pixels dance, in a trance, shows advance, in a 
 * high-def glance.
 * Remote in hand, worlds expand, from sitcom land to 
 * news that's grand.
 * Binging shows, the excitement grows, the plot thickens 
 * and the time just flows.
 * From dawn till night, in colors bright, TVs light up 
 * our life just right.
 * **/

const messages = [
    {
        role: 'system',
        content: 'You are a poem generator. Generate each new sentence of the poem on a new line. The poem should be 5 sentences long, with each sentence having words that rhyme inside it.'
    },
    {
        role: 'user',
        content: 'I need a poem about televisions'
    }
]

const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: messages
})

console.log(response.choices[0].message.content)