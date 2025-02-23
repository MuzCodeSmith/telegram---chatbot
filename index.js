const { Telegraf } = require('telegraf')

const bot = new Telegraf('8166477747:AAEB6ZC5v5j6zLmvj5CIPYLehm7PS5hMY4E')

bot.start((ctx) => ctx.reply('Welcome to my first bot'))

// bot.command('', (ctx) => ctx.reply(''))

bot.help((ctx) => ctx.reply('Send me a sticker'))
// respond to normal chat
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.hears('aur bhai kya karra hai?', (ctx) => ctx.reply('Sab badhiya bhai, tu bata?'))
bot.launch()

