//Codigo creado por Ivan 
import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {
let img = await (await fetch(`https://telegra.ph/file/c161c058a04477cffede1.mp4`)).buffer()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let txt = `*Mincho😻*`
await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, m, null, rcanal)
}
handler.help = ['Mincho']
handler.tags = ['Mincho']
handler.command = /^(Mincho)$/i
export default handler