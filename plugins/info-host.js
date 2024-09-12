//código creado por Jose Xrl agradecimientos 

import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {
let img = await (await fetch(`https://telegra.ph/file/c161c058a04477cffede1.mp4`)).buffer()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let txt = `*¿Tu Nokia es muy lento y necesitas que tu bot esté activo 24/7?* 📱⏳

¡Tranquilo, tenemos la solución perfecta para ti! 🎉 Mantén tu bot funcionando sin interrupciones con nuestros servidores, Ofrecemos servidores gratuitos y de pago a precios súper accesibles, al alcance de todos. 💸 

🖥️ *Totalmente compatible con GokuBlack-Bot-MD,* Disfruta al máximo de su potencial en nuestros servidores de alto rendimiento, asegurando una experiencia fluida y de alta calidad. El staff de GokuBlackBot y Superiority Host se encarga de que disfrutes de todas sus funciones al máximo. 💖✨

🟢 \`\`\`Información del Host\`\`\`

💻 *Página:*
https://dash.superiority.pro

*🟢 Dashboard:*
https://dash.superiority.pro

⚙️ *Panel*
https://panel.superiority.pro

🧸 *Comunidad de WhatsApp:*
https://chat.whatsapp.com/HZprUWDGFKdCm7QBNXQQRQ

✨ *Grupo General Superiority (Whatsapp)*
https://chat.whatsapp.com/Feg4luP8CgHFFrbD65Wj7B

🧡 *Canal de WhatsApp:*
https://whatsapp.com/channel/0029VaoRzN0KmCPMFNe3TD1b

🗣📲 *Contacto:*
• wa.me/51918425805

No esperes más y lleva tu bot al siguiente nivel con nuestro servicio de alojamiento. ¡Es fácil, rápido y económico! 💪🚀`
await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, m, null, rcanal)
}
handler.help = ['Superiority']
handler.tags = ['Host']
handler.command = /^(Superiority)$/i
export default handler