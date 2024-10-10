import {generateWAMessageFromContent} from '@whiskeysockets/baileys';
import fs from 'fs';
const handler = async (m, {conn, usedPrefix, command}) => {
  const name = await conn.getName(m.sender);
  const donar =`*TE AGRADECERIA MUCHO SI ME DEJAS UNA ESTRELLITA EN EL REPO*`.trim();
  const aa = {quoted: m, userJid: conn.user.jid};
  const res = generateWAMessageFromContent(m.chat, {liveLocationMessage: {degreesLatitude: 0, degreesLongitude: 0, caption: donar, secuenceNumber: '0', contextInfo: {mentionedJid: conn.parseMention()}}}, aa);
  conn.relayMessage(m.chat, res.message, {});
};
handler.help = ['Estrella'];
handler.tags = ['estrellita'];
handler.command = /^estre(estrella|estrellita)|donar|apoyar$/i;
export default handler;
