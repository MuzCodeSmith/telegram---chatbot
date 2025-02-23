const { Telegraf } = require('telegraf')

const bot = new Telegraf('8166477747:AAEB6ZC5v5j6zLmvj5CIPYLehm7PS5hMY4E')

bot.start((ctx) => ctx.reply('Welcome to my first bot'))

bot.command('aur', (ctx) => ctx.reply('Sab badhiya bhai, tu bata?'))

bot.launch()

