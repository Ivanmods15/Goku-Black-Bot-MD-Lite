import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let chat = global.db.data.chats[m.chat]

  if (chat.welcome && m.messageStubType == 27) {
    let bienvenido = `Bienvenido @${m.messageStubParameters[0].split`@`[0]}`
await conn.sendMini(m.chat, packname, dev, bienvenido, welcome, welcome, channel, fkontak)
  }

  if (chat.welcome && m.messageStubType == 28) {
    let bye = `Adios @${m.messageStubParameters[0].split`@`[0]}`
await conn.sendMini(m.chat, packname, dev, bye, adios, adios, channel, fkontak)
  }

  if (chat.welcome && m.messageStubType == 32) {
    let kick = `Adios @${m.messageStubParameters[0].split`@`[0]}`
await conn.sendMini(m.chat, packname, dev, kick, adios, adios, channel, fkontak)
}}