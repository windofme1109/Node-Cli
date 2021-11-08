const { createCanvas } = require('canvas')

exports.newCanvas = function (word, options) {
    const canvas = createCanvas(options.width, options.height)
    const ctx = canvas.getContext('2d')

    // rect
    ctx.fillStyle = options.bgColor
    ctx.fillRect(0, 0, options.width, options.height)
    // word
    ctx.textBaseline = 'middle'
    ctx.textAlign = 'center'
    ctx.font = `${options.size}px ${options.family}`
    ctx.fillStyle = options.color
    ctx.fillText(word, options.width / 2, options.height / 2)

    return {
        canvas,
        ctx,
    }
}
