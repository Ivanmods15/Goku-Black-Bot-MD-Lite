var handler  = async (m, { conn }) => {

let texto = `🚩 *𝐏𝐑𝐎́𝐗𝐈𝐌𝐀𝐌𝐄𝐍𝐓𝐄 𝐄𝐒𝐓𝐀𝐑𝐀 𝐄𝐋 𝐁𝐎𝐓 𝐏𝐀𝐑𝐀 𝐈𝐍𝐒𝐓𝐀𝐋𝐀𝐑,𝐓𝐄 𝐏𝐔𝐄𝐃𝐄𝐒 𝐂𝐎𝐌𝐔𝐍𝐈𝐂𝐀𝐑 𝐂𝐎𝐍 𝐄𝐋 𝐃𝐔𝐄𝐍̃𝐎*
⬡ 𝐂𝐑𝐄𝐀𝐃𝐎𝐑: wa.me/595972157130
⬡ 𝐎𝐖𝐍𝐄𝐑𝟏: wa.me/18294868853
⬡ 𝐎𝐖𝐍𝐄𝐑𝟐: wa.me/51950148255
𝐁𝐲:𝐆𝐎𝐊𝐔-𝐁𝐋𝐀𝐂𝐊-𝐁𝐎𝐓-𝐌𝐃-𝐋𝐈𝐓𝐄`
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
