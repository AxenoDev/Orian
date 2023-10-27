const Discord = require("discord.js")
const Canvas = require("canvas")

module.exports = async() => {

    let caracters = [..."123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"]
    let text = [];
    for(let i = 0; i < 6; i++) text.push(caracters[Math.floor(Math.random() * caracters.length)])

    const canvas = Canvas.createCanvas(300, 150)
    const ctx = canvas.getContext("2d")

    ctx.font = '35px'
    ctx.fillStyle = "#ffffff"
    ctx.fillText(text, (150 - (ctx.measureText(text).width) / 2), 85)

    return {canvas: canvas, text: text}

}