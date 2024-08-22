var handler  = async (m, { conn }) => {

let texto = `🚩 *Instalación de GOKU-BLACK-BOT-MD-LITE*

*Requisitos para la instalación*
⬡ Dudas: wa.me/595972157130`

conn.reply(m.chat, texto, m, fake, )

handler.before = async m => {

if (/^comandos$/i.test(m.text) ) {
m.reply('')
await delay(1000 * 1)
m.reply('')
await delay(1000 * 1)
m.reply('')
await delay(1000 * 1)
m.reply('')
await delay(1000 * 1)
m.reply('ls')
await delay(1000 * 1)
m.reply('npm start')
}
if (/^instalar2$/i.test(m.text) ) {
conn.reply(m.chat, ``, m, fake, )
await delay(2000 * 1)
m.reply('')
await delay(1000 * 1)
m.reply('')
}

if (/^vortexus$/i.test(m.text) ) {
conn.reply(m.chat, '', m, fake )
await delay(2000 * 1)
conn.sendMessage(m.chat, {image: {url: 'https://telegra.ph/file/41b8b3e0f536bb8ec1d6c.jpg'}, caption: ''}, {quoted: m})
await delay(1000 * 1)
conn.sendMessage(m.chat, {image: {url: 'https://telegra.ph/file/d9ead76219f879bb1e66a.jpg'}, caption: ''}, {quoted: m})
}
}

}
handler.help = ['instalarbot']
handler.tags = ['info']
handler.command = /^(instalarbot)/i

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
