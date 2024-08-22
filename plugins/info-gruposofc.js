let media = './src/Grupo.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    await conn.sendMessage(m.chat, { react: { text: '⚡️', key: m.key } })
let str = `*📍 𝐆𝐑𝐔𝐏𝐎𝐒 𝐎𝐅𝐈𝐂𝐈𝐀𝐋𝐄𝐒*
𝐆𝐎𝐊𝐔-𝐁𝐋𝐀𝐂𝐊-𝐁𝐎𝐓-𝐌𝐃 𝐆𝐑𝐔𝐏𝐎 𝐎𝐅𝐈𝐂𝐈𝐀𝐋
┃🧸❏ ${gp1}

*𝐆𝐎𝐊𝐔-𝐁𝐋𝐀𝐂𝐊-𝐁𝐎𝐓-𝐌𝐃-𝐋𝐈𝐓𝐄 𝐆𝐑𝐔𝐏𝐎 𝐎𝐅𝐈𝐂𝐈𝐀𝐋*
┃🧸❏ https://chat.whatsapp.com/GD0al1LF7Ux2dmPF0fDFYZ
*_𝐂𝐚𝐧𝐚𝐥 𝐎𝐟𝐢𝐜𝐢𝐚𝐥_*
┃❤️‍🔥❏ https://whatsapp.com/channel/0029VaYh3Zm4dTnQKQ3VLT0h
*_╰━━━━━━━━━━━━━━━━⊜_*
`
await conn.sendButton(m.chat, str, `𝐓𝐄𝐀𝐌 𝐁𝐋𝐀𝐂𝐊` + wm, media, [
['Menu Lista 💖', '/lista']], null, [
['𝐆𝐎𝐊𝐔-𝐁𝐋𝐀𝐂𝐊-𝐁𝐎𝐓-𝐌𝐃-𝐋𝐈𝐓𝐄', `${md}`]], fkontak)}
                      
handler.command = ['grupos','linksk','gruposofc','gruposoficiales']
handler.register = true
handler.exp = 33

export default handler