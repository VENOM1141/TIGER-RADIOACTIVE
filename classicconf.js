/*Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Sampe Nipu Apalagi Lari Dari Tanggung Jawab

Base Ori : Hw Mods
Base Haikal Hw Mods : Copyan Dari Base Dika

• [ Recode Bye > ZetsuboXygen777]
   # AND↓
   THANKS TO >
  XygenGod777( Watashi / 私 )
  Hw Mods Wa / Haikal (Base)
  Adiwajshing (Baileys)
  whiskeysockets (Baileys)
  Thunder X7 (Inspirate)
  Pak Tzy (Inspirate)
  Maintainer (Taira Makino)
  Maintener2(Samue-l1)
  Maintener3(Arlodragon)
  ♥️ ありがとう
                 >
*/
const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk'
global.ig = 'kipkoech' // ubah aja
global.email = 'samuelcircute@gmail.com' //serah
global.region = 'kenya' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'DRAGON' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['254746764468'] // ubah aja pake nomor lu
//==========================zetsuboclient=======================//
global.botname = '𝚻𝚰𝐆𝚵𝚪 𝐑𝚫𝐃𝚰𝚯𝚫𝐂𝚻𝚰𝛁𝚵 𝛁1' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = '𝚻𝚰𝐆𝚵𝚪 𝐑𝚫𝐃𝚰𝚯𝚫𝐂𝚻𝚰𝛁𝚵 𝛁1' // ubah aja ini nama sticker
global.author = '༻࿇𝚻𝚮𝚵𝚵 𝐃𝚪𝚫𝐆𝚯𝚴❖༺' // ubah aja ini nama sticker
global.prefa = '.'
global.sessionName = 'Tigersession'  //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.autoviewstatus = process.env.autoviewstatus || "TRUE"
global.autolike = process.env.autolikestatus || "TRUE"
global.autoread = process.env.autoread || "TRUE"
global.wlcm = []
global.wlcmm = []
global.anticall = true
global.rn = 'false'
/*
Declaring Menu type

V1 = Photo
V2 = Video
V3 = Text
V4 = Button

*/
global.menutype = "v2"
//eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUQvUTNZeDAzR0MzTzN4eXVYTGNDT0hxbVJPRmZZU0c5eW1DaTRLdHducz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWnlRekRFSC9iZU0yYVBPRkdqb2NXNU0yVWtjM1gwclZxa1JhU2J6Q3F4bz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlRzZLNGhEcFV6czhkM2ZNWVB0cVIxQ3NHM0E5L01zN0NMVFBmQnVIRjFFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZNDhlazlWWUJ2c3QyQzNVbXpJemRzWmhxUTMwK1J1TFlDSStiS1VwVVRvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZPWTNGYXk5bkhMMVlnSjFYU3dCS2YzNzV6b3IrSkV5V0FqQURuRFpJblU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkIvenVsdWk5LzdkZkY3UE82cmVPL05jcjljY2pkeUgzcE5seTVyZXRZbE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUt2MGV1YTdOeEp6dWNxeGttMTFqZDFnc1puMVZDVlZ6U3Y3cW9zckpuTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnpKTXJXVVZzNUIwWXhsMmFsWXQvRk5lTWFaUG1pTy9ocERjSmg0cTFHOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkE1T2tDMEhyUlhINktiK1hYSUhLYUliR3psQ2RENmx2ODl5R0ZrOGVkUk53WHdoUEhvUGxtQVJQczdBRXpWc2pUQTNEaDd5VlRNY1BnRzBkZG9Jemh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTMsImFkdlNlY3JldEtleSI6InJQS1hFMklraHBLdTdIc2RvYXFVQ25oSk5FRHh6T2prcHBBSkhWR1BTVUk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImozeXJrOHYzVGEyTjZ3SnB2Um1McWciLCJwaG9uZUlkIjoiYmE5MTA1OTQtZDViYi00YmEyLWFjZDAtMDI2NGNmY2RhMGEyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ildqb01UeVZCS0gvWnVuVWtPMDJ4U25vRVBjMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyaHZKbitIaWFOUElzUG45aFFsdU8vS3YwZ2c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNVA2Q1ZBTDEiLCJtZSI6eyJpZCI6IjI1NDc1NzIyMDQyNTo4MUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSytKL2VZSEVMalk0YmtHR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQk1oTERIYTNWY3hCYVB3UmdrQ3AzQ2VYTnBwanJaUkhSeHg3T2RZbzBWST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWFhQcy9TM0pWVlNpUERTUU5pREVLQ0Y2OFRiY0txMm1kVVE5cGJIa0QrODlIR3FscHpJUzB1OFNWa0JsVG5icitnVEoya3BUVXNFUGJRbUh4TEVGQnc9PSIsImRldmljZVNpZ25hdHVyZSI6ImMyS25HYWhrQkQ1ekJMVTdiamo5cWcvaWpxWjFzY0FkZTR6clFIUWNOWTBqNllWMy91blhNeVkyTWxsTkxVd0dHWjMzTXVSRWxHUmxQcXIzdXpidGlRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzU3MjIwNDI1OjgxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFUSVN3eDJ0MVhNUVdqOEVZSkFxZHdubHphYVk2MlVSMGNjZXpuV0tORlMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzE3NTA5ODEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRmp5In0=//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 5
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
