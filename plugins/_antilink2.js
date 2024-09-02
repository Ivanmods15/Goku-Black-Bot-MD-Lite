const linkRegex = /whatsapp.com.channel\/([0-9A-Za-z]{20,24})/i;
export async function before(m, {isAdmin, isBotAdmin}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) return !1;
  const chat = global.db.data.chats[m.chat];
  const delet = m.key.participant;
  const bang = m.key.id;
  const bot = global.db.data.settings[this.user.jid] || {};
  const user = `@${m.sender.split`@`[0]}`;
  const isGroupLink = linkRegex.exec(m.text);
  const grupo = `https://whatsapp.com/channel`;
  if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('¡𝐎𝐲𝐞! 𝐍𝐨 𝐞𝐧𝐯𝐢𝐚𝐫 𝐞𝐧𝐥𝐚𝐜𝐞𝐬 , 𝐚𝐥𝐞𝐠𝐫𝐚𝐭𝐞 𝐝𝐞 𝐪𝐮𝐞 𝐡𝐞𝐫𝐞𝐬 𝐚𝐝𝐦𝐢𝐧, 𝐒𝐚𝐥𝐯𝐚𝐝𝐨❕ !');
  if (chat.antiLink && isGroupLink && !isAdmin) {
    if (isBotAdmin) {
      const linkThisGroup = `https://whatsapp.com.channel/${await this.groupInviteCode(m.chat)}`;
      if (m.text.includes(linkThisGroup)) return !0;
    }
    await this.sendMessage(m.chat, {text: `*「 ANTI CANAL 」*\n𝐇𝐚𝐬𝐭𝐚 𝐩𝐫𝐨𝐧𝐭𝐨  ${user} 𝐑𝐨𝐦𝐩𝐢𝐬𝐭𝐞𝐬 𝐥𝐚𝐬 𝐫𝐞𝐠𝐥𝐚𝐬 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨, 𝐬𝐞𝐫𝐚𝐬 𝐞𝐱𝐩𝐮𝐥𝐬𝐚𝐝𝐨/𝐚...!!`, mentions: [m.sender]}, {quoted: m});
    if (!isBotAdmin) return m.reply('[🚫] 𝐍𝐨 𝐬𝐨𝐲 𝐚𝐝𝐦𝐢𝐧, 𝐢𝐦𝐩𝐨𝐬𝐢𝐛𝐥𝐞 𝐞𝐣𝐞𝐜𝐮𝐭𝐚𝐫 𝐥𝐚 𝐚𝐜𝐜𝐢𝐨𝐧 𝐝𝐞 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐫');
    if (isBotAdmin && bot.restrict) {
      await conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    } else if (!bot.restrict) return m.reply('[🚫] 𝐄𝐥 𝐎𝐰𝐧𝐞𝐫 𝐧𝐨 𝐭𝐢𝐞𝐧𝐞 𝐚𝐜𝐭𝐢𝐯𝐚 𝐥𝐚 𝐨𝐩𝐜𝐢𝐨́𝐧 𝐝𝐞 𝐫𝐞𝐬𝐭𝐫𝐢𝐧𝐠𝐢𝐫 ! 𝐩𝐨𝐫 𝐭𝐚𝐧𝐭𝐨 𝐧𝐨 𝐩𝐮𝐞𝐝𝐨 𝐞𝐣𝐞𝐜𝐮𝐭𝐚𝐫 𝐥𝐚 𝐚𝐜𝐜𝐢𝐨𝐧');
  }
  return !0;
}
