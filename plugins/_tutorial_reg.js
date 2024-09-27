let handler = async (m, { conn }) => {
  const usuario = m.pushName || 'Usuario';
  const videoUrl = 'https://telegra.ph/file/330a7838421e8f555b7be.mp4';

  const texto = `Hola @${m.sender.split('@')[0]} SOMOS TEAM FELIX ROJAS GRACIAS POR UTILIZAR ESTE COMANDO❤️`;

  const options = {
    quoted: m,
    caption: texto,
    mentions: [m.sender]
  };

  await conn.sendMessage(m.chat, { video: { url: videoUrl }, ...options });
};

handler.command = ['Felix']

export default handler;