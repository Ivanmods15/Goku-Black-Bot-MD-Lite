//Codigo creado por Ivan 
import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {
let img = await (await fetch(`https://qu.ax/yYMht.mp4`)).buffer()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let txt = `*Vamos Albirroja Querido que ganamos hoy 🇵🇾*`
await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, m, null, rcanal)
}
handler.help = ['Albirroja']
handler.tags = ['Albirroja']
handler.command = /^(Albirroja)$/i
export default handler