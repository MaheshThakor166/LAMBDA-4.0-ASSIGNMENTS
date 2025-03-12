import { Telegraf } from 'telegraf'
import axios from 'axios'
import fs from 'fs'
const bot = new Telegraf('7740554979:AAHvAVANP1lsKLQkI7MYWPsm0bQqgE6BWV0') // Yaha apna BotFather se mila token dalega

bot.start((ctx) =>
  ctx.reply(
    'Welcome! Welcome to Mahesh TelegramBot Type /joke for a joke or /algo algorithmname for an algo!'
  )
)

// ✅ Function to Read Data from JSON File
function getAlgorithm(name) {
  const data = JSON.parse(fs.readFileSync('data.json', 'utf8'))
  return data[name] || null
}

// ✅ Command to Fetch Algorithm
bot.command('algo', (ctx) => {
  const message = ctx.message.text.split(' ') // "/algo binary_search"
  if (message.length < 2) {
    ctx.reply(
      '❌ Please provide an algorithm name. Example: `/algo binary_search`'
    )
    return
  }

  const algoName = message[1]
  const algo = getAlgorithm(algoName)

  if (algo) {
    ctx.reply(
      `📌 *${algo.name}*\n\n📝 ${algo.description}\n\n\`\`\`js\n${algo.code}\n\`\`\``,
      { parse_mode: 'Markdown' }
    )
  } else {
    ctx.reply('❌ Algorithm not found! Please try another.')
  }
})

bot.command('joke', async (ctx) => {
  try {
    const response = await axios.get(
      'https://official-joke-api.appspot.com/random_joke'
    )

    const joke = `${response.data.setup}\n\n😂 ${response.data.punchline}`
    ctx.reply(joke)
  } catch (error) {
    console.error(error) // ✅ Error print kar
    ctx.reply('😢 Koi joke nahi mila. Fir try karo!')
  }
})

bot.launch()

console.log('Bot is running...')
