const Discord = require('discord.js')
const colors = require('../colors.json')
const client = require('../index.js')
const db = require('quick.db')
const ms = require('ms')
const chatbot = require('espchatbotapi')

module.exports = {
    name: 'chatbot',
    description: 'habla con el bot',
    usage: 'v!chatbot',
    category: 'Fun',
    guildOnly: true,
    async execute(message, args){
        chatbot.hablar(args).then(respuesta => {
            message.channel.send(respuesta)
        })// This file is just for you to copy and create new commands each time. So it becomes more efficient. If theres an easier way, let me know
    }
}