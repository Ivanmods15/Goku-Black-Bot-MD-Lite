import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {
let img = await (await fetch(`https://telegra.ph/file/c7b80b5ec234d13627808.jpg`)).buffer()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let txt = `*Queridos usuarios,*
📢 *¡Tenemos noticias importantes!* Después de mucho crecimiento y aprendizaje, hemos decidido dar un nuevo paso en nuestro camino. _Infinity-Host_ se convertirá en _CorinPlus Host_, una plataforma más fuerte y mejorada 💪.

No se preocupen, todo seguirá igual, solo que mejor 😊. Nuestro compromiso con la calidad y el servicio sigue siendo el mismo. Todos nuestros usuarios podrán migrar fácilmente a la nueva plataforma y disfrutar de nuevas características y mejoras 🔄.

Nuestros usuarios _VIP_ recibirán incentivos especiales por su lealtad y apoyo 🙏. _*¡Gracias por confiar en nosotros! ❤️*_
https://dash.corinplus.com

Sigan nuestro canal para estar informados de los próximos pasos y novedades: https://whatsapp.com/channel/0029VakUvreFHWpyWUr4Jr0g 

*¡Nos vemos en CorinPlus Host!*`
await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, m, null, rcanal)
}
handler.help = ['Corinplus']
handler.tags = ['Corin']
handler.command = /^(Corinplus)$/i
export default handler