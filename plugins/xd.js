//Este codigo fue creado por ivan me ayudarian mucho siguiendome https://github.com/elias1524

import fetch from `node-fetch`
let img = await (await fetch(`https://telegra.ph/file/890cc83f4ee6468b7ab5c.mp4`)).buffer ()
let txt = `Pruebita`
await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, m, null, rcanal)}
handler.help = ['N']
handler.tags = ['n']
handler.command = /^(N)$/i
export default handler