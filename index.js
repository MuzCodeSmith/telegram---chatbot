const { Telegraf } = require('telegraf')
const axios = require('axios')

const bot = new Telegraf('8166477747:AAEB6ZC5v5j6zLmvj5CIPYLehm7PS5hMY4E')

bot.start((ctx) => ctx.reply('Welcome to my first bot'))

bot.command('showMeCode',async function (ctx){
    const response = await axios.get('https://raw.githubusercontent.com/MuzCodeSmith/telegram---chatbot/refs/heads/master/index.js')
    console.log(response.data)
    ctx.reply(response.data)
    })

bot.help((ctx) => ctx.reply('Send me a sticker'))
// respond to normal chat
bot.on('sticker',(ctx)=>ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.hears('aur bhai kya karra hai?', (ctx) => ctx.reply('Sab badhiya bhai, tu bata?'))
bot.hears('tumhe kisne banaya?', (ctx) => ctx.reply('Muzaffar Shaikh'))
bot.launch()

